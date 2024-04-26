import * as THREE from 'three';
import { RGBELoader } from 'https://unpkg.com/three@0.164.0/examples/jsm/loaders/RGBELoader.js';

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelector('a-scene').addEventListener("model-loaded", e => {
    const renderer=e.currentTarget.renderer;
    const scene=e.currentTarget.object3D;
    renderer._useLegacyLights=false;
    renderer.toneMapping=THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure=0.2;
    new RGBELoader().load('./resource/bg.hdr',function(texture){
      texture.mapping=THREE.EquirectangularReflectionMapping;
      scene.background=texture;
      scene.environment=texture;
      scene.backgroundIntensity=5;
    });
  });
});