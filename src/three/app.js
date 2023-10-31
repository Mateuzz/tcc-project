import * as Three from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { FXAAShader } from "three/examples/jsm/shaders/FXAAShader.js";
import { ExposureShader } from "three/examples/jsm/shaders/ExposureShader.js"
import { SSAOPass } from "three/examples/jsm/postprocessing/SSAOPass.js"
import { SSRPass } from "three/examples/jsm/postprocessing/SSRPass.js"

import { createSendInitDataButton, getConfiguration, makeConfigurationGui, makeProfilerController, makeStatsGui } from "testHelper.js";
import { addGltf, initLoaders } from "./Loader.js";
import {getInfo, initStats, prepareInfoFrame, renderStatsHtml} from "webglStats.js";

let scene;
let renderer;
let camera;
let controls;
let mixers = [];
let clock;
let width;
let height;
let composer;

initStats();

startScene();
initLoaders(renderer);
defaultClock.end();

const testInfo = {
    library: "Three",
};

// const statsGui = makeStatsGui();
// const info = getInfo();
// initStats();

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

    console.log(new Date());
    defaultClock.begin("sceneLoadingTime");

    addGltf(modelPath, scene).then((gltf) => {
        defaultClock.end();

        button.remove();
        options.remove();

        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        }

        function enableShadows() {
            renderer.shadowMap.enabled = true;
            renderer.shadowMap.type = Three.PCFSoftShadowMap;

            gltf.scene.traverse(node => {
                if (node.isMesh) {
                    node.castShadow = true;
                    node.receiveShadow = true;
                }
            });
        }

        function lightConfigShadow(light, d) {
            light.castShadow = true;
            light.shadow.mapSize.width = 512;
            light.shadow.mapSize.height = 512;
            light.shadow.camera.near = 1;
            light.shadow.camera.far = 1000;
            light.shadow.normalBias = 1;

            if (d) {
                light.shadow.camera.top = d;
                light.shadow.camera.right = d;
                light.shadow.camera.left = -d;
                light.shadow.camera.bottom = -d;
            }
        }

        if (config.shadows) 
            enableShadows();

        function makeDesertLights() {
            const positions = [
                [120, 30, 120],
                [-120, 30, 120],
                [-120, 30, -120],
                [120, 30, -120],
            ];

            positions.forEach(pos => {
                const light = new Three.PointLight(0xffffff, 1, 1000, 0);
                light.position.set(...pos);
                if (config.shadows)
                    lightConfigShadow(light);
                scene.add(light);
            })

            const ambient = new Three.AmbientLight(0x0000ff, 1);
            scene.add(ambient);
        }

        const sceneName = config.scene.toLowerCase();

        if (sceneName.includes("florest")) {
            if (config.shadows) {
                const dir = new Three.DirectionalLight(0xffffff, 1);
                dir.position.set(150, 150, 150);
                lightConfigShadow(dir, 150);
                scene.add(dir);
            }
        } else if (sceneName.includes("skull")) {
            const light = new Three.AmbientLight(0xffffff, 1);
            scene.add(light);

            const mixer = new Three.AnimationMixer(gltf.scene);
            const run = mixer.clipAction(gltf.animations[0]);
            run.play();

            mixers.push(mixer);
        } else if (sceneName.includes("desert")) {
            if (config.manyLights) {
                makeDesertLights();
            } else {
                const dir = new Three.DirectionalLight(0xffffff, 1);
                dir.position.set(150, 150, 150);
                scene.add(dir);
                if (config.shadows) 
                    lightConfigShadow(dir, 230);
            }
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

        if (config.ssao) {
            composer = composer || createComposer();

            const ssao = new SSAOPass(scene, camera, width, height);
            composer.addPass(ssao);
        }

        if (config.ssr) {
            composer = composer || createComposer();

            const ssr = new SSRPass({ renderer, scene, camera, width, height, isPerspectiveCamera: true, isBouncing: false });
            composer.addPass(ssr);
        }

        if (config.fxaa) {
            composer = composer || createComposer();

            const fxaa = new ShaderPass(FXAAShader);

            const pixelRatio = renderer.getPixelRatio();
            fxaa.material.uniforms["resolution"].value.x = 1 / (width * pixelRatio);
            fxaa.material.uniforms["resolution"].value.y = 1 / (height * pixelRatio);

            composer.addPass(fxaa);
        }

        testInfo.initData = initData;

        // createSendInitDataButton(testInfo, initData);
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

    // prepareInfoFrame();

    for (const mixer of mixers)
        mixer.update(delta);

    controls.update(0.16);

    if (composer) 
        composer.render()
    else
        renderer.render(scene, camera);

    profilerController.update();

    // statsGui.innerHTML = renderStatsHtml();

    requestAnimationFrame(loop);
}
