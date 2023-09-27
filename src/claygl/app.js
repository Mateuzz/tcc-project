import * as Clay from "claygl";
import ProfilerController from "profilerControler";
// import * as RenderStats from "webglStats";

// RenderStats.initStats();

const canvas = document.getElementById("canvas");
// const profilerController = new ProfilerController(4);
// const renderStatsElement = document.querySelector(".render-stats");

/** @type {Clay.light.Directional} */
let light;
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
        shadow: true,
        tonemapping: true,
        linear: true,
    },

    init(app) {
        camera = app.createCamera([0, 2, 5], [0, 0, 0]);
        camera.near = 0.1;
        camera.far = 1000;
        // camera.position.set(8.3, 131, 372);
        camera.fov = 55;

        // light = app.createDirectionalLight([0.1, -1, 0]);
        const l1 = app.createPointLight([2, 3, -4.5], 28, "#fff", 1);
        const l2 = app.createPointLight([1, 4.5, -1.1], 28, "#fff", 1);

        l1.castShadow = false;
        l2.castShadow = false;
        // light.castShadow = false;
        // light = app.createAmbientLight("#fff", 1);
        // app.createPointLight([0, 10, 0], 4, "#00f", 0.5);
        // app.createAmbientLight(null, 0.2);

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

            // console.log("Finished loading");
        })

        return model;
    },

    loop(app) {
        // renderStatsElement.innerHTML = RenderStats.renderStatsHtml();
        // RenderStats.prepareInfoFrame();

        control.update(app.frameTime);

        // profilerController.update();
}
})
