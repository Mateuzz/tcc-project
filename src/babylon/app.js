import * as Babylon from "babylonjs";
import { GLTFFileLoader } from "babylonjs-loaders";
import { createSendInitDataButton, getConfiguration, makeConfigurationGui, makeProfilerController } from "testHelper";

Babylon.SceneLoader.RegisterPlugin(new GLTFFileLoader());

const canvas = document.querySelector("#canvas");
const engine = new Babylon.Engine(canvas, false, {
    antialias: false,
    powerPreference: "high-performance",
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

    Babylon.SceneLoader.ImportMesh("", modelPath, modelName, scene, (meshes, particles, skeletons, animations) => {
        defaultClock.end();

        button.remove();
        options.remove();

        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        }

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

        if (config.shadows) {
            const light = new Babylon.DirectionalLight("light", new Babylon.Vector3(0.3, -0.5, -0.2), scene);
            light.position.set(150, 150, 150);
            let shadowGenerator = new Babylon.ShadowGenerator(512, light);
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

        if (config.scene.toLowerCase().includes("skull")) {
            new Babylon.HemisphericLight("light", new Babylon.Vector3(0, 0, 0), scene);
        }

        createSendInitDataButton(testInfo, initData);
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
