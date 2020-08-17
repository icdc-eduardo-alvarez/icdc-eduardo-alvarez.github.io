'use strict'

import * as THREE from '../../build/three.module.js';
import { OrbitControls } from '../../jsm/controls/OrbitControls.js';
import { GLTFLoader } from '../../jsm/loaders/GLTFLoader.js';


let container,
  sceneWidth,
  sceneHeight,
  scene,
  scene2,
  renderer,
  camera,
  controls,
  loader,
  content,
  spotLight;

let state = {
  sceneColor: 0xcacaca,
  ambientColor: 0xffffff,
  ambientIntensity: 0.3,
  directColor: 0xcfcfcf,
  directIntensity: 2.5132741228718345
};


const init = () => {
  createScene();
  update();
};

const createScene = () => {
  sceneWidth = window.innerWidth;
  sceneHeight = window.innerHeight;

  scene = new THREE.Scene();
  scene.background = new THREE.Color(state.sceneColor);

  //Renderer initialization
  renderer = new THREE.WebGLRenderer({
    antialias: false,
    alpha: true
  });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(sceneWidth, sceneHeight);
  renderer.toneMapping = THREE.ReinhardToneMapping;
  renderer.toneMappingExposure = 2.3;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearColor(0xe0e0e0);

  //Canvas initialization
  container = document.getElementById('app');
  container.appendChild(renderer.domElement);
  camera = new THREE.PerspectiveCamera(60, sceneWidth / sceneHeight, 1, 1000);


  controls = new OrbitControls(camera, renderer.domElement);
  controls.maxZoom = 10;
  controls.minDistance = 2;
  controls.maxPolarAngle = Math.PI / 2;
  controls.enableDamping = true;
  controls.dampingFactor = 0.1;
  controls.update();

  loader = new GLTFLoader();
  loader.setCrossOrigin('anonymous')

  loader.load('./assets/models/T61_Cargo.glb', (gltf) => {
    let object = gltf.scene || gltf.scenes[0];
    if (!object) {
      throw 'El modelo no contiene escenas y no puede visualizarse correctamente';
    }
    setContent(object);
  }, undefined, (error) => {
    console.log(error);
    throw error;
  });

};

const update = () => {
  requestAnimationFrame(update);
  render();
  if (spotLight) {
    spotLight.position.set(
      camera.position.x + 10,
      camera.position.y + 10,
      camera.position.z + 10
    );
  }
};

const render = () => {
  controls.update();
  renderer.render(scene, camera);
};

const setContent = (object) => {
  const box = new THREE.Box3().setFromObject(object);
  const size = box.getSize(new THREE.Vector3()).length();
  const center = box.getCenter(new THREE.Vector3());
  

  controls.reset();

  object.position.x += (object.position.x - center.x);
  object.position.y += (object.position.y - center.y);
  object.position.z += (object.position.z - center.z);

 

  controls.maxDistance = size * 10;
  camera.near = size / 100;
  camera.far = size * 100;
  camera.updateProjectionMatrix();

  camera.position.copy(center);
  camera.position.x += size / 2.0;
  camera.position.y += size / 5.0;
  camera.position.z += -size / 2.0;
  camera.lookAt(center);

  controls.saveState();

  scene.add(object);


  content = scene;

  content.traverse((node) => {
    if (node.isMesh) {
      node.castShadow = true;
      node.receiveShadow = true;
      if (node.material.map) {
        node.material.map.anisotropy = 16;
      }
    }
  });

  updateLights();

};

const updateLights = () => {
  spotLight = new THREE.SpotLight(0xffffff, 4.0, 3000);
  spotLight.position.y = 1000;
  spotLight.target = scene;
  spotLight.castShadow = true;
  spotLight.shadow = new THREE.LightShadow(new THREE.PerspectiveCamera(100, 1, 500, 1000));
  spotLight.shadow.bias = 0.0001;
  spotLight.shadow.mapSize.width = 1024 * 2;
  spotLight.shadow.mapSize.height = 1024 * 2;
  //scene.add(spotLight);
  //scene.castShadow = true;
  //scene.receiveShadow = true;

  /* let lights = [
    { x: 0, y: 5, z: 1 },
    { x: -10, y: 5, z: 1 },
    { x: 10, y: 5, z: 1 },
    { x: 0, y: 0, z: 10 },
    { x: 0, y: 0, z: -2 }
  ]; */

  let lights = [
    { x: 2, y: 0, z: 3, intensity: 1, color: state.directColor },
    { x: -2, y: 0, z: 3, intensity: 1, color: state.directColor },
    { x: 0, y: 0, z: 3.5, intensity: 1, color: state.directColor },
    { x: 2, y: 2, z: 2, intensity: 1, color: state.directColor },
    { x: -2, y: 2, z: 2, intensity: 1, color: state.directColor },
    { x: 0, y: 2, z: 3, intensity: 1, color: state.directColor },
    { x: 0, y: 0, z: -3.5, intensity: 1, color: state.directColor },
    { x: 2, y: 0, z: -3, intensity: 1, color: state.directColor },
    { x: -2, y: 0, z: -3, intensity: 1, color: state.directColor },
    { x: 2, y: 2, z: -2.5, intensity: 1, color: state.directColor },
    { x: -2, y: 2, z: -2.5, intensity: 1, color: state.directColor },
    { x: 0, y: 2, z: -3, intensity: 1, color: state.directColor },
  ];
  buildDirectionalLights(lights);

};

const buildDirectionalLights = ligths => {
  ligths.map(({ x, y, z, intensity, color }) => {
    let directionalLight = new THREE.DirectionalLight(color, intensity);
    directionalLight.position.set(x, y, z);
    //directionalLight.color.setHex(state.directColor);
    scene.add(directionalLight);

    let lightHelper = new THREE.DirectionalLightHelper(directionalLight, 1);
    //scene.add(lightHelper);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  init();
});