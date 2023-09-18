import * as Three from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let scene;
let renderer;
let camera;
let controls;
let mixers = [];
let clock;

function startScene() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const near = 0.1;
    const far = 1000;
    const fov = 55;

    scene = new Three.Scene();
    camera = new Three.PerspectiveCamera(fov, width / height, near, far);
    renderer = new Three.WebGLRenderer();
    controls = new OrbitControls(camera, renderer.domElement);
    clock = new Three.Clock();

    camera.position.set(8.3, 131, 372);

    // renderer.shadowMap.enabled = true;

    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    // const dirLight = new Three.DirectionalLight(0xffffff, 1);
    // dirLight.castShadow = true;
    // dirLight.shadow.mapSize.width = 1024;
    // dirLight.shadow.mapSize.height = 1024;
    // scene.add(dirLight);
}

export {
    startScene,
    scene,
    renderer,
    camera,
    controls,
    mixers,
    clock,
};
