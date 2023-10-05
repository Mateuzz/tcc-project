import * as Clay from "claygl";
import {
    getConfiguration,
    makeProfilerController,
    createSendInitDataButton,
} from "testHelper";

const canvas = document.getElementById("canvas");
const button = document.querySelector(".init");
let firstLoop = true;
let profilerController;
const testInfo = {
    library: "claygl",
};

/** @type {Clay.light.Directional} */
let light;
/** */
let spots = [];
/** @type {Clay.Mesh} */
let cube;
/** @type {Clay.camera.Perspective} */
let camera;
/** @type {Clay.Mesh} */
let model;
/** @type {Clay.OrbitControl} */
let control;

Clay.application.create(canvas, {
    width: canvas.clientWidth,
    height: canvas.clientHeight,

    graphic: {
        shadow: false,
        tonemapping: false,
        linear: true,
    },

    init(app) {
        camera = app.createCamera([0, 2, 5], [0, 0, 0]);
        camera.near = 0.1;
        camera.far = 1000;
        // camera.position.set(8.3, 131, 372);
        camera.fov = 55;

        // light = app.createDirectionalLight([0.1, -1, 0]);
        // const l1 = app.createPointLight([2, 3, -4.5], 28, "#fff", 1);
        // const l2 = app.createPointLight([1, 4.5, -1.1], 28, "#fff", 1);

        // l1.castShadow = false;
        // l2.castShadow = false;
        // light.castShadow = false;
        // light = app.createAmbientLight("#fff", 1);
        // app.createPointLight([0, 10, 0], 4, "#00f", 0.5);
        // app.createAmbientLight(null, 0.2);

        control = new Clay.plugin.OrbitControl({
            target: camera,
            domElement: app.container,
        });

        // const model = app.loadModel("models/PirateFord/pirateFort.glb");
        // model.then(result => {
        //     // for (let i = 0; i < 10; ++i) {
        //         //     const clone = app.cloneNode(result.rootNode);
        //         //     const row = Math.floor(i / 3);
        //         //     const col = i - row * 3;
        //         //     clone.position.set(col * 3, 0, +8 - row * 3);
        //         // }

        //     // console.log("Finished loading");
        // })

        // return model;
    },

    loop(app) {
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

                app.loadModel(modelPath).then((model) => {
                    
                    const lights = [];
                    if (config.scene.includes("Pirate")) {
                        lights.push(
                            app.createPointLight([2, 3, -4.5], 28, "#fff", 1),
                            app.createPointLight([1, 4.5, -1.1], 28, "#fff", 1)
                        );
                        light = app.createDirectionalLight([0, 0, -1], "#fff", 1);
                    } else {
                        light = app.createDirectionalLight([-0.7, -0.2, 0.5], "#fff", 1);
                    }
                    lights.push(light);

                    lights.forEach(light => light.castShadow = false);

                    defaultClock.end();

                    const initData = {
                        startupTime: defaultClock.get("startupTime"),
                        sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
                    };

                    console.table(initData);

                    createSendInitDataButton(testInfo, initData);
                    profilerController = makeProfilerController(testInfo);
                    // createDirectionalLightControl();
                });

                button.remove();
            };
        }

        control.update(app.frameTime);

        profilerController?.update();
    },
});

// function createDirectionalLightControl() {
//     const form = document.createElement("div");
//     const stats = document.querySelector(".stats");

//     form.innerHTML = `
//         <input type="text" name="x" id="x">
//         <input type="text" name="y" id="y">
//         <input type="text" name="z" id="z">
//     `;

//     const x = form.querySelector("#x");
//     const y = form.querySelector("#y");
//     const z = form.querySelector("#z");

//     x.oninput = () => { light.rotation.x = Number(x.value); }
//     y.oninput = () => { light.rotation.y = Number(y.value); }
//     z.oninput = () => { light.rotation.z = Number(z.value); }

//     stats.append(form);
// }
