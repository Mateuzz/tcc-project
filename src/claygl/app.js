import * as Clay from "claygl";
import ProfilerController from "profilerControler";

const canvas = document.getElementById("canvas");
const profilerElement = document.querySelector(".profiler-stats");
const profilerController = new ProfilerController(profilerElement);

/** @type {Clay.light.Directional} */
let light;
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
        shadow: true,
        tonemapping: true,
        linear: true,
    },

    init(app) {
        camera = app.createCamera([0, 2, 5], [0, 0, 0]);

        light = app.createDirectionalLight([1, -1, 0]);
        app.createPointLight([0, 10, 0], 4, "#00f", 0.5);
        app.createAmbientLight(null, 0.2);

        control = new Clay.plugin.OrbitControl({
            target: camera,
            domElement: app.container,
        });

        const model = app.loadModel("models/PirateFord/pirateFort.glb");
        model.then(result => {
            // for (let i = 0; i < 10; ++i) {
                //     const clone = app.cloneNode(result.rootNode);
                //     const row = Math.floor(i / 3);
                //     const col = i - row * 3;
                //     clone.position.set(col * 3, 0, +8 - row * 3);
                // }

            console.log("Finished loading");
        })

        return model;
    },

    loop(app) {
        control.update(app.frameTime);

        profilerController.update();
    }
})
