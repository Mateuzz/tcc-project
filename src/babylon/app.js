import * as Babylon from "babylonjs";
import { GLTFFileLoader } from "babylonjs-loaders";
import { createSendInitDataButton, getConfiguration, makeConfigurationGui, makeProfilerController } from "testHelper";

Babylon.SceneLoader.RegisterPlugin(new GLTFFileLoader());

const canvas = document.querySelector("#canvas");
const engine = new Babylon.Engine(canvas, true);

let camera;
const scene = createScene();

defaultClock.end();

window.addEventListener("resize", () => engine.resize);

const testInfo = {
    library: "Babylon",
    animation: true,
};

const modelPath = "models/";
makeConfigurationGui();
const button = document.querySelector(".init");
let profilerController;

button.onclick = () => {
    const config = getConfiguration();
    const modelName = config.path;

    testInfo.profilingTimeInSeconds = config.time;
    testInfo.scene = config.scene;

    camera.setPosition(new Babylon.Vector3(config.camerax, config.cameray, config.cameraz));

    console.log(new Date());
    defaultClock.begin("sceneLoadingTime");
    Babylon.SceneLoader.ImportMesh("", modelPath, modelName, scene, (meshes, particles, skeletons, animations) => {
        defaultClock.end();

        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        }

        console.table(initData);

        if (config.scene.toLowerCase().includes("skull")) {
            new Babylon.DirectionalLight("light", new Babylon.Vector3(0, 0, -1), scene);
        }

        createSendInitDataButton(testInfo, initData);
        profilerController = makeProfilerController(testInfo);

        engine.runRenderLoop(() => {
            scene.render();
            profilerController.update();
        });
    });

    button.remove();
};

function createScene() {
    const scene = new Babylon.Scene(engine);

    camera = new Babylon.ArcRotateCamera(
        "camera",
        0,
        0,
        10,
        new Babylon.Vector3(0, 0, 0),
        scene
    );

    camera.fov = 0.95;

    camera.useBouncingBehavior = false;
    camera.attachControl(canvas, true);
    
    // const light = new Babylon.SpotLight("light", new Babylon.Vector3(0, 5, 0), new Babylon.Vector3(-0.4, -1, -0.5), 2, 2, scene);


    // const shadowGenerator = new Babylon.ShadowGenerator(1024, light);
    // shadowGenerator.usePoissonSampling = true;

    // Babylon.SceneLoader.ImportMesh("", "models/PirateFord/", "pirateFort.glb", scene, (meshes) => {
        // for (const mesh of meshes) {
            //     mesh.receiveShadows = true;
            //     shadowGenerator.addShadowCaster(mesh, false);
            // }
        // })

    return scene;
}
