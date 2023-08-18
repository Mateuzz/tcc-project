import * as Three from 'three';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

let scene;
let renderer;
let camera;
let controls;
let mixers = [];
let clock;

function startScene() {
    const fov = 75;
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const near = 0.1;
    const far = 1000;

    scene = new Three.Scene();
    camera = new Three.PerspectiveCamera(fov, width / height, near, far);
    renderer = new Three.WebGLRenderer();
    controls = new OrbitControls(camera, renderer.domElement);
    clock = new Three.Clock();

    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);
    camera.position.z = 5;

    const light = new Three.AmbientLight(0xffffff, 2.5);
    scene.add(light);

    const dirLight = new Three.DirectionalLight(0xffffff, 10, 5);
    scene.add(dirLight);

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
