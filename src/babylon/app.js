import * as Babylon from "babylonjs";
import { GLTFFileLoader } from "babylonjs-loaders";
import { createSendInitDataButton, getConfiguration, makeConfigurationGui, makeProfilerController } from "testHelper";

Babylon.SceneLoader.RegisterPlugin(new GLTFFileLoader());

const canvas = document.querySelector("#canvas");
const engine = new Babylon.Engine(canvas, false, {
    antialias: false,
    powerPreference: "high-performance",
    alpha: false,
    preserveDrawingBuffer: false,
});

let camera;
const scene = createScene();

defaultClock.end();

window.addEventListener("resize", () => engine.resize);

const testInfo = {
    library: "Babylon",
};

makeConfigurationGui(onStartScene);

const modelPath = PREFIX_PATH;
const button = document.querySelector(".init");
const options = document.querySelector(".options");
let profilerController;

function onStartScene() {
    button.disabled = true;
    const config = getConfiguration();
    const modelName = config.path;

    testInfo.profilingTimeInSeconds = config.time;
    testInfo.scene = config.scene;

    camera.setPosition(new Babylon.Vector3(config.camerax, config.cameray, config.cameraz));

    console.log(new Date());
    defaultClock.begin("sceneLoadingTime");

    Babylon.SceneLoader.ImportMesh("", modelPath, modelName, scene, (meshes, particles, skeletons, animation) => {
        if (!config.animation)
            animation.forEach(anim => anim.stop());

        defaultClock.end();

        button.remove();
        options.remove();

        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        }

        const sceneName = config.scene.toLowerCase();

        if (config.colors) {
            // scene.imageProcessingConfiguration.toneMappingEnabled = true;
            // scene.imageProcessingConfiguration.toneMappingType = Babylon.ImageProcessingConfiguration.TONEMAPPING_ACES;

            const post = new Babylon.ImageProcessingPostProcess("imageProcessing", 1.0, camera);
            post.colorCurvesEnabled = true;
            post.toneMappingType = Babylon.ImageProcessingConfiguration.TONEMAPPING_ACES;
            post.toneMappingEnabled = true;
            post.colorCurves.globalSaturation = 1.5;

            // scene.imageProcessingConfiguration.exposure = 2;
            // scene.imageProcessingConfiguration.colorCurves.globalExposure = 2;
            // scene.imageProcessingConfiguration.colorCurves.globalHue = 0;
            // scene.imageProcessingConfiguration.colorGradingEnabled = true;
            // scene.imageProcessingConfiguration.colorCurvesEnabled = true;
            // scene.imageProcessingConfiguration.isEnabled = true;
        }


        if (config.ssao) {
            new Babylon.SSAORenderingPipeline("ssao", scene, 1.0, [camera]);
        }

        if (config.ssr) {
            const ssr = new Babylon.SSRRenderingPipeline("ssr", scene, [camera], false);
            if (DEBUG_MODE) 
                ssr.debug = true;
        }


        if (config.fxaa) {
            new Babylon.FxaaPostProcess("fxaa", 1.0, camera);
        }

        function makeDesertLights() {
            const positions = [
                [120, 30, 120],
                [-120, 30, 120],
                [-120, 30, -120],
                [120, 30, -120],
            ];

            positions.forEach(pos => {
                const point = new Babylon.PointLight("light", new Babylon.Vector3(...pos), scene);
                point.range = 1000;
                point.intensity = 100;
            });

            const ambient = new Babylon.HemisphericLight("light", new Babylon.Vector3(0, 0, -1), scene);
            ambient.diffuse = new Babylon.Color3(0, 0, 1);
        }

        let shadowLight;

        if (sceneName.includes("skull")) {
            new Babylon.DirectionalLight("light", new Babylon.Vector3(0.2, 0.8, -1), scene);
        } else if (sceneName.includes("desert")) {
            if (config.manyLights) {
                makeDesertLights();
            } else {
                shadowLight = new Babylon.DirectionalLight("light", new Babylon.Vector3(0.3, -0.5, -0.2), scene);
                shadowLight.position.set(150, 150, 150);
            }
        } else if (sceneName.includes("florest") && config.shadows) {
            shadowLight = new Babylon.DirectionalLight("light", new Babylon.Vector3(0.3, -0.5, -0.2), scene);
            shadowLight.position.set(150, 150, 150);
        } else if (/ion|dragon/.test(sceneName)) {
            const dir = new Babylon.DirectionalLight("light", new Babylon.Vector3(0, 0, -1), scene);
        } else if (sceneName.includes("sponza")) {
            const point = new Babylon.PointLight("light", Babylon.Vector3.Zero(), scene);
            point.range = 1000;
        }

        if (config.shadows) {
            let shadowGenerator = new Babylon.ShadowGenerator(512, shadowLight);
            shadowGenerator.normalBias = 1;
            shadowGenerator.useExponentialShadowMap = false;
            shadowGenerator.usePercentageCloserFiltering = true;
            shadowGenerator.useBlurExponentialShadowMap = false;
            shadowGenerator.usePoissonSampling = false;
            shadowGenerator.useKernelBlur = false;
            shadowGenerator.useContactHardeningShadow = false;
            shadowGenerator.useCloseExponentialShadowMap = false;
            shadowGenerator.useBlurCloseExponentialShadowMap = false;
            shadowGenerator.useOpacityTextureForTransparentShadow = false;
            shadowGenerator.filteringQuality = Babylon.ShadowGenerator.QUALITY_MEDIUM;
            meshes.forEach(mesh => {
                shadowGenerator.getShadowMap().renderList.push(mesh);
                mesh.receiveShadows = true;
            })
        }

        console.table(initData);
        createSendInitDataButton(testInfo, initData);
        console.table(initData);
        // testInfo.initData = initData;
        profilerController = makeProfilerController(testInfo);

        engine.runRenderLoop(() => {
            scene.render();
            profilerController.update();
        });
    }, undefined, (scene, message, exception) => {
        alert(message);
        button.disabled = false;
    });
}

function createScene() {
    const scene = new Babylon.Scene(engine);
    scene.imageProcessingConfiguration.toneMappingEnabled = false;
    scene.imageProcessingConfiguration.exposure = 1;
    scene.imageProcessingConfiguration.colorGradingEnabled = false;
    scene.imageProcessingConfiguration.colorCurvesEnabled = false;
    scene.imageProcessingConfiguration.ditheringEnabled = false;
    scene.imageProcessingConfiguration.vignetteEnabled = false;
    scene.imageProcessingConfiguration.isEnabled = false;

    camera = new Babylon.ArcRotateCamera( "camera", 0, 0, 10, new Babylon.Vector3(0, 0, 0), scene);

    camera.fov = 0.95;

    camera.useBouncingBehavior = false;
    camera.attachControl(canvas, true);

    return scene;
}
