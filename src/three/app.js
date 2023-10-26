import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";
import { ExposureShader } from "three/examples/jsm/shaders/ExposureShader.js"

import { createSendInitDataButton, getConfiguration, makeConfigurationGui, makeProfilerController } from "testHelper.js";
import { addGltf, initLoaders } from "./Loader.js";

let scene;
let renderer;
let camera;
let controls;
let mixers = [];
let clock;
let width;
let height;
let composer;

startScene();
initLoaders(renderer);
defaultClock.end();

const testInfo = {
    library: "Three",
};

makeConfigurationGui(onStartScene);
const button = document.querySelector(".init");
const options = document.querySelector(".options");
let profilerController;

function onStartScene() {
    button.disabled = true;
    const config = getConfiguration();
    const modelPath = PREFIX_PATH + config.path;

    testInfo.profilingTimeInSeconds = config.time;
    testInfo.scene = config.scene;

    camera.position.set(config.camerax, config.cameray, config.cameraz);

    console.log("Date of scene beginning loading:", new Date());
    defaultClock.begin("sceneLoadingTime");

    addGltf(modelPath, scene).then((gltf) => {
        defaultClock.end();

        button.remove();
        options.remove();

        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        }

        console.table(initData);

        if (config.shadows) {
            // const pointLight = new Three.PointLight(0xffffff, 5, 200, 0);
            // pointLight.position.set(40, 40, 40);
            // pointLight.castShadow = true;
            // pointLight.shadow.camera.near = 0.5;
            // pointLight.shadow.camera.far = 500;
            // pointLight.shadow.mapSize.width = 512;
            // pointLight.shadow.mapSize.height = 512;
            // scene.add(pointLight);
            //
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = Three.PCFSoftShadowMap;

            const dirLight = new Three.DirectionalLight(0xffffff, 1);
            dirLight.castShadow = true;
            dirLight.shadow.mapSize.width = 512;
            dirLight.shadow.mapSize.height = 512;
            dirLight.shadow.camera.near = 1;
            dirLight.shadow.camera.far = 600;
            dirLight.shadow.camera.left = -150;
            dirLight.shadow.camera.right = 150;
            dirLight.shadow.camera.top = 150;
            dirLight.shadow.camera.bottom = -150;
            dirLight.position.set(150, 150, 150);
            scene.add(dirLight);

            gltf.scene.traverse(node => {
                // if (node.isLight) {
                //     node.castShadow = true;
                //     node.shadow.mapSize.width = 2048;
                //     node.shadow.mapSize.height = 2048;
                //     node.shadow.camera.near = 0.1;
                //     node.shadow.camera.far = 1000;
                // }
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });

        }

        function createComposer() {
            const composer = new EffectComposer(renderer);
            composer.addPass(new RenderPass(scene, camera));
            return composer;
        }

        if (config.colors) {
            composer = createComposer();
            renderer.toneMapping = Three.ACESFilmicToneMapping;
            renderer.toneMappingExposure = 2;
            const exposure = new ShaderPass(ExposureShader);

            composer.addPass(exposure);
        }

        if (config.postProcessing) {
            composer = composer || createComposer();

            const fxaa = new ShaderPass(FXAAShader);

            const pixelRatio = renderer.getPixelRatio();
            fxaa.material.uniforms["resolution"].value.x = 1 / (width * pixelRatio);
            fxaa.material.uniforms["resolution"].value.y = 1 / (height * pixelRatio);

            composer.addPass(fxaa);
        }

        if (config.scene.toLowerCase().includes("skull")) {
            const light = new Three.AmbientLight(0xffffff, 1);
            scene.add(light);
            // const dirLight = new Three.DirectionalLight(0xffffff, 1);
            // dirLight.rotation.set(0, 0.5, 1);
            // scene.add(dirLight);

            console.log("Animations:", gltf.animations);
            const mixer = new Three.AnimationMixer(gltf.scene);
            const run = mixer.clipAction(gltf.animations[0]);
            run.play();

            mixers.push(mixer);
        }

        createSendInitDataButton(testInfo, initData);
        profilerController = makeProfilerController(testInfo);

        loop();

    }).catch((error) => {
        button.disabled = false;
        alert(error);
    });
}

function startScene() {
    width = document.documentElement.clientWidth;
    height = document.documentElement.clientHeight;
    const near = 0.1;
    const far = 1000;
    const fov = 55;

    scene = new Three.Scene();
    camera = new Three.PerspectiveCamera(fov, width / height, near, far);
    renderer = new Three.WebGLRenderer({ powerPreference: "high-performance", antialias: false });
    controls = new OrbitControls(camera, renderer.domElement);
    clock = new Three.Clock();

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

    if (composer) 
        composer.render()
    else
        renderer.render(scene, camera);

    profilerController.update();

    requestAnimationFrame(loop);
}
