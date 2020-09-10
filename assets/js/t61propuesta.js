import * as THREE from '../../build/three.module.js';
import { OrbitControls } from '../../jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../../jsm/loaders/GLTFLoader.js';
import Stats from '../..//jsm/libs/stats.module.js';
var scene;
var renderer;
var camera;
var controls;
var stats;
var loader;
var loadingManager;
var spotlight;

init();

function init() {
  renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  document.body.appendChild(renderer.domElement);

  stats = new Stats();
  document.body.appendChild(stats.dom);

  scene = new THREE.Scene();
  scene.background = new THREE.Color(0xbdbdbd);

  camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.4, 100);
  camera.position.set(1, 3, 5);

  controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI / 2.1;
  controls.enableDamping = true;
  controls.dampingFactor = 0.12;
  controls.minDistance = 2;

  loadingManager = new THREE.LoadingManager(() => {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.classList.add('fade-out');
    loadingScreen.addEventListener('transitionend', e => e.target.remove());
  });

  var glassMaterial = new THREE.MeshPhongMaterial({
    color: 0xffffff,
    refractionRatio: 0.8
  });

  addLights();

  loader = new GLTFLoader(loadingManager);
  loader.load('./assets/models/T6.1-Chasis_propuesta.glb', gltf => {
    let model = gltf.scene || gltf.scenes[0];
    let animations = gltf.animations || [];
    scene.add(model);
    console.log('Model');
    console.log(model);
    console.log('Animations');
    console.log(animations);


    model.traverse(node => {
      if (node.isMesh) {
        node.castShadow = true;
        node.receiveShadow = true;
        node.material.emissiveIntensity = 2
        if (node.material.map) {
          node.material.map.anisotropy = 16;
        }
      }
    });
  }, xhr => {
    let total = xhr.lengthComputable ? xhr.total : parseInt(xhr.target.getResponseHeader('content-length'), 0);
    let percentage = total > 100 ? 100 : (xhr.loaded / total * 100).toFixed(0);
    let span = document.querySelector('#loading span');
    span.innerHTML = 'Cargando ' + percentage + '%';
  }, error => {
    console.log(error);
  });

  window.addEventListener('resize', function () {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }, false);
  animate();
}

function addLights() {
  /* var hemiLight = new THREE.HemisphereLight(0xf5f5f5, 0xbdbdbd, 0.9);
  scene.add(hemiLight); */

  var ambientLight = new THREE.AmbientLight(0xeeeeee);
  scene.add(ambientLight);

  spotlight = new THREE.SpotLight(0xf5f5f5, 1);
  spotlight.castShadow = true;
  spotlight.shadow.bias = -0.0001;
  spotlight.shadow.mapSize.height = 1024 * 4;
  //scene.add(spotlight);

  var directionalLight = new THREE.DirectionalLight(0xffffff, 3);
  directionalLight.position.set(0, 5, 0);
  scene.add(directionalLight);

  var directionalLightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
  //scene.add(directionalLightHelper);

  var pointLight = new THREE.PointLight(0xffffff, 2, 100, 3);
  pointLight.position.set(0, 0, 0);
  scene.add(pointLight);
}

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
  stats.update();
}