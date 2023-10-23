import * as pc from "playcanvas";
import { makeProfilerController, getConfiguration, createSendInitDataButton, makeConfigurationGui } from "testHelper";

const testInfo = {
    library: "pc",
    animation: true,
};

window.INPUT_SETTINGS = {
    useKeyboard: true,
    useMouse: true,
    useGamepads: false,
    useTouch: false,
};

window.CONTEXT_OPTIONS = {
    antialias: false,
    alpha: false,
    preserveDrawingBuffer: false,
    preferWebGl2: true,
    powerPreference: "high-performance",
};

const canvas = document.querySelector("#canvas");
const devices = createInputDevices(canvas);

const app = new pc.Application(canvas, {
    elementInput: devices.elementInput,
    keyboard: devices.keyboard,
    mouse: devices.mouse,
    graphicsDeviceOptions: window.CONTEXT_OPTIONS,
});

let profilerController;
let firstLoop = true;
let button;
let options;
let camera;

window.pc = pc;
window.app = app;

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

window.addEventListener("resize", () => app.resizeCanvas());

function promisify(thisArg, fn) {
    return function result(...args) {
        return new Promise((resolve, reject) => {
            fn.call(thisArg, ...args, (err, asset) => {
                if (err) reject(err)
                else resolve(asset);
            })
        })
    }
}

app.assets.loadFromUrl("models/OrbitCamera.js", "script", (err) => {
    camera = new pc.Entity("camera");
    camera.addComponent("camera", {
        clearColor: new pc.Color(0.1, 0.1, 0.1),
        farClip: 1000,
        nearClip: 0.1,
        fov: 55,
    });

    camera.addComponent("script");
    camera.script.create("orbitCamera", {});
    camera.script.create("orbitCameraInputMouse", {});
    app.root.addChild(camera);

    app.on("update", (_dt) => {
        if (firstLoop) {
            defaultClock.end();

            firstLoop = false;

            makeConfigurationGui(onStartScene);
            button = document.querySelector(".init");
            options = document.querySelector(".options");
        }

        profilerController?.update();
    });

    app.start();
});

function onStartScene() {
    button.disabled = true;

    const config = getConfiguration();
    const modelPath = PREFIX_PATH + config.path;

    testInfo.profilingTimeInSeconds = config.time;
    testInfo.scene = config.scene;

    camera.setPosition(config.camerax, config.cameray, config.cameraz);

    console.log(new Date());
    defaultClock.begin("sceneLoadingTime");

    app.assets.loadFromUrl(modelPath, "container", (error, asset) => {
        if (error) {
            alert(error);
            button.disabled = false;
            return;
        }

        const scene = asset.resource.instantiateRenderEntity();
        app.root.addChild(scene);

        defaultClock.end();

        if (config.scene.toLowerCase().includes("skull")) {
            const animation = asset.resource.animations[0];
            scene.addComponent("anim");
            scene.anim.assignAnimation("Initial State", animation._resources[0]);

            const light = new pc.Entity("dirlight");
            light.addComponent("light", {
                type: "directional",
                color: new pc.Color(1, 1, 1),
            });

            app.root.addChild(light);
        } else {
            const lights = scene.findComponents("light");
            lights.forEach(light => {
                // light.shadowDistance = 160;
                light.isStatic = true;
                light.enabled = true;
                light.castShadows = false;
                // light.shadowBias = 0.1;
            });
        }

        if (config.shadows) {
            const lightSettings = app.scene.lighting;
            lightSettings.shadowsEnabled = true;
            lightSettings.shadowAtlasResolution = 512;
            lightSettings.shadowType = pc.SHADOW_PCF3;

            const light = new pc.Entity("dirlight"); 
            light.addComponent("light", {
                type: "directional",
                color: new pc.Color(1, 1, 1),
                isStatic: true,
                castShadows: true,
                shadowDistance: 500,
                shadowBias: 0.1,
            });
            light.setPosition(150, 150, 150);
            app.root.addChild(light);
        }


        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        }

        console.table(initData);

        createSendInitDataButton(testInfo, initData);
        profilerController = makeProfilerController(testInfo);

        button.remove();
        options.remove();
    });

}

function createInputDevices(canvas) {
    var devices = {
        elementInput: new pc.ElementInput(canvas, {
            useMouse: INPUT_SETTINGS.useMouse,
            useTouch: INPUT_SETTINGS.useTouch,
        }),
        keyboard: INPUT_SETTINGS.useKeyboard ? new pc.Keyboard(window) : null,
        mouse: INPUT_SETTINGS.useMouse ? new pc.Mouse(canvas) : null,
        gamepads: INPUT_SETTINGS.useGamepads ? new pc.GamePads() : null,
        touch:
        INPUT_SETTINGS.useTouch && pc.platform.touch
        ? new pc.TouchDevice(canvas)
        : null,
    };

    return devices;
}
