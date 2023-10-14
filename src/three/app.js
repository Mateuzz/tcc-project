import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import { createSendInitDataButton, getConfiguration, makeConfigurationGui, makeProfilerController } from "testHelper.js";
import { addGltf, initLoaders } from "./Loader.js";

let scene;
let renderer;
let camera;
let controls;
let mixers = [];
let clock;

startScene();
initLoaders(renderer);
defaultClock.end();

const testInfo = {
    library: "Three",
};

makeConfigurationGui();
const button = document.querySelector(".init");
let profilerController;

button.onclick = () => {
    const config = getConfiguration();
    const modelPath = "models/" + config.path;

    testInfo.profilingTimeInSeconds = config.time;
    testInfo.scene = config.scene;

    camera.position.set(config.camerax, config.cameray, config.cameraz);

    defaultClock.begin("sceneLoadingTime");
    console.log("Date of scene beginning loading:", new Date());
    addGltf(modelPath, scene).then((gltf) => {
        defaultClock.end();

        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        }

        console.table(initData);

        if (config.scene.toLowerCase().includes("skull")) {
            const dirLight = new Three.DirectionalLight(0xffffff, 1);
            dirLight.rotation.set(0, 0.5, 1);
            scene.add(dirLight);

            console.log("Animations:", gltf.animations);
            const mixer = new Three.AnimationMixer(gltf.scene);
            const run = mixer.clipAction(gltf.animations[0]);
            run.play();

            mixers.push(mixer);
        }

        createSendInitDataButton(testInfo, initData);
        profilerController = makeProfilerController(testInfo);

        loop();
    });

    button.remove();
};

function startScene() {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const near = 0.1;
    const far = 1000;
    const fov = 55;

    scene = new Three.Scene();
    camera = new Three.PerspectiveCamera(fov, width / height, near, far);
    renderer = new Three.WebGLRenderer({ powerPreference: "high-performance" });
    controls = new OrbitControls(camera, renderer.domElement);
    clock = new Three.Clock();


    // renderer.shadowMap.enabled = true;

    renderer.setSize(width, height);
    document.body.appendChild(renderer.domElement);

    // dirLight.castShadow = true;
    // dirLight.shadow.mapSize.width = 1024;
    // dirLight.shadow.mapSize.height = 1024;

}

function loop() {
    const delta = clock.getDelta();

    for (const mixer of mixers)
        mixer.update(delta);

    controls.update(0.16);

    renderer.render(scene, camera);

    profilerController.update();

    requestAnimationFrame(loop);
}
