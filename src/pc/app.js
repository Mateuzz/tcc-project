import * as pc from "playcanvas";
import { makeProfilerController, getConfiguration, createSendInitDataButton } from "testHelper";

const testInfo = {
    library: "pc",
};

window.INPUT_SETTINGS = {
    useKeyboard: true,
    useMouse: true,
    useGamepads: false,
    useTouch: false,
};

window.CONTEXT_OPTIONS = {
    antialias: true,
    alpha: false,
    preserveDrawingBuffer: false,
    preferWebGl2: true,
    powerPreference: "high-performance",
};

const canvas = document.querySelector("#canvas");
const button = document.querySelector(".init");

const devices = createInputDevices(canvas);
const app = new pc.Application(canvas, {
    elementInput: devices.elementInput,
    keyboard: devices.keyboard,
    mouse: devices.mouse,
    graphicsDeviceOptions: window.CONTEXT_OPTIONS,
});

let profilerController;
let firstLoop = true;

window.pc = pc;
window.app = app;

app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

window.addEventListener("resize", () => app.resizeCanvas());

app.assets.loadFromUrl("models/OrbitCamera.js", "script", (err) => {
    const camera = new pc.Entity("camera");
    camera.addComponent("camera", { clearColor: new pc.Color(0.1, 0.1, 0.1) });

    camera.addComponent("script");
    camera.script.create("orbitCamera", {});
    camera.script.create("orbitCameraInputMouse", {});

    app.root.addChild(camera);
    camera.setPosition(0, 0, 3);

    app.on("update", (_dt) => {
        if (firstLoop) {
            firstLoop = false;
            defaultClock.end();

            button.onclick = () => {
                const config = getConfiguration();
                const modelPath = "models/" + config.path;

                testInfo.profilingTimeInSeconds = config.time;
                testInfo.scene = config.scene;

                console.log(new Date());
                defaultClock.begin("sceneLoadingTime");

                app.assets.loadFromUrl(modelPath, "container", (_err, asset) => {
                    const scene = asset.resource.instantiateRenderEntity();
                    app.root.addChild(scene);

                    const lights = scene.findComponents("light");
                    lights.forEach(light => {
                        light.enabled = true;
                        light.castShadows = false;
                    });

                    defaultClock.end();

                    const initData = {
                        startupTime: defaultClock.get("startupTime"),
                        sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
                    }

                    console.table(initData);

                    createSendInitDataButton(testInfo, initData);
                    profilerController = makeProfilerController(testInfo);
                });

                button.remove();
            };
        }

        profilerController?.update();
    });

    app.start();
});

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
