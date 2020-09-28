import * as THREE from '../../build/three.module.js';

import { OrbitControls } from '../../jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../../jsm/loaders/GLTFLoader.js';
import { RGBELoader } from '../../jsm/loaders/RGBELoader.js';
import { RoughnessMipmapper } from '../../jsm/utils/RoughnessMipmapper.js';

var container, controls;
var camera, scene, renderer;

init();
render();

function init() {

  container = document.createElement('div');
  document.body.appendChild(container);

  camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.25, 20);
  camera.position.set(0, 2, 6);

  scene = new THREE.Scene();

  var loadingManager = new THREE.LoadingManager(() => {
    const loadingScreen = document.getElementById('loading');
    loadingScreen.classList.add('fade-out');
    loadingScreen.addEventListener('transitionend', e => e.target.remove());
  });

  new RGBELoader()
    .setDataType(THREE.UnsignedByteType)
    .setPath('./assets/img/')
    .load('venice_sunset_1k.hdr', function (texture) {
      var envMap = pmremGenerator.fromEquirectangular(texture).texture;
      console.log(envMap);

      scene.background = envMap;
      scene.environment = envMap;

      texture.dispose();
      pmremGenerator.dispose();

      render();

      // model

      // use of RoughnessMipmapper is optional
      var roughnessMipmapper = new RoughnessMipmapper(renderer);

      var loader = new GLTFLoader(loadingManager);
      loader.setPath('./assets/models/');
      loader.load('T6.1-Chasis_propuesta.glb', function (gltf) {

        gltf.scene.traverse(function (child) {

          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            // TOFIX RoughnessMipmapper seems to be broken with WebGL 2.0
            roughnessMipmapper.generateMipmaps( child.material );

          }

        });

        scene.add(gltf.scene);

        roughnessMipmapper.dispose();

        render();

      }, xhr => {
        let total = xhr.lengthComputable ? xhr.total : parseInt(xhr.target.getResponseHeader('content-length'), 0);
        let percentage = total > 100 ? 100 : (xhr.loaded / total * 100).toFixed(0);
        let span = document.querySelector('#loading span');
        span.innerHTML = 'Cargando ' + percentage + '%';
      });

    });

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;
  renderer.shadowMap.enabled = true;
  renderer.shadowMapSoft = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.shadowMapBias = 0.0039;
  renderer.shadowMapDarkness = 0.5;
  renderer.shadowMapWidth = 1024;
  renderer.shadowMapHeight = 1024;
  container.appendChild(renderer.domElement);

  var pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  controls = new OrbitControls(camera, renderer.domElement);
  controls.maxPolarAngle = Math.PI / 2.3;
  controls.enableDamping = true;
  controls.dampingFactor = 0.12;
  controls.minDistance = 2;

  //controls = new OrbitControls(camera, renderer.domElement);
  controls.addEventListener('change', render); // use if there is no animation loop
  controls.target.set(0, 0, -0.2);
  controls.update();

  window.addEventListener('resize', onWindowResize, false);

}

function onWindowResize() {

  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  render();

}

//

function render() {

  renderer.render(scene, camera);

}