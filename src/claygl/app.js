import * as Clay from "claygl";
import * as Stats from 'webglStats';

const canvas = document.getElementById("canvas");
let info = {};

let elapsedDelta = 0;
let fps = 0;
let fpsAvg = 0;
let fpsMin = Infinity;
let fpxMax = 0;
let elapsedSinceAvgCalc = 0;
let framesSinceAvgCalc = 0;
const elapsedGoal = 1000 / 60;
const guiElement = document.querySelector("#count");
let limitedElapsed = 0;
let now = 0;
let hasIdleCallbackCalledFrame = false;

Stats.initStats();

function updateGui() {
    guiElement.innerHTML = `
        <p>Time = ${elapsedDelta}ms</p>
        <p>Fps = ${fps}</p>
        <p>Fps (avg) = ${fpsAvg}</p>
        <p>Fps (min) = ${fpsMin}</p>
        <p>Fps (max) = ${fpxMax}</p>
        `
    guiElement.insertAdjacentHTML("beforeend", `
            <p>Triangles = ${info.primCount[2]}</p>
        `)
}

function calcFpsAvg() {
    fpsAvg = 1000 * framesSinceAvgCalc / elapsedSinceAvgCalc;
    framesSinceAvgCalc = 0;
    elapsedSinceAvgCalc = 0;
    fpsMin = Infinity;
    fpxMax = 0;
}

function setFps() {
    fps = 1000 / elapsedDelta;
    ++framesSinceAvgCalc;
    elapsedSinceAvgCalc += elapsedDelta;

    if (fps > fpxMax)
        fpxMax = fps
    if (fps < fpsMin)
        fpsMin = fps;
}

function calcFps(d) {
    hasIdleCallbackCalledFrame = true;
    elapsedDelta = elapsedGoal - d.timeRemaining();
    setFps();
}

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

        // cube = app.createCube({ color: "#00f", });

        light = app.createDirectionalLight([1, -1, 0]);
        app.createPointLight([0, 10, 0], 4, "#00f", 0.5);
        app.createAmbientLight(null, 0.2);

        control = new Clay.plugin.OrbitControl({
            target: camera,
            domElement: app.container,
        });


        // for (let i = 0; i < 15; ++i) {
            //     (() => {
                //         const row = Math.floor(i / 3);
                //         const col = i - row * 3;
                //         app.loadModel("glb/Damaged Helmet.glb").then(result => {
                    //             result.rootNode.position.set(col * 3, 0, +8 - row * 3);
                    //         })
                //     })();
            // }
        const model = app.loadModel("floresta/Demo_01.glb");
        model.then(result => {
                // for (let i = 0; i < 10; ++i) {
                    //     const clone = app.cloneNode(result.rootNode);
                    //     const row = Math.floor(i / 3);
                    //     const col = i - row * 3;
                    //     clone.position.set(col * 3, 0, +8 - row * 3);
                    // }

                console.log("Finished loading");
            })

        info = Stats.getInfo();

        return model;
    },

    loop(app) {
        limitedElapsed = performance.now() - now;
        now = performance.now();
        info.vertCount = 0;
        info.primCount = [0, 0, 0];

        control.update(app.frameTime);

        if (!hasIdleCallbackCalledFrame) {
            elapsedDelta = limitedElapsed;
            setFps();
        }

        hasIdleCallbackCalledFrame = false;
        requestIdleCallback(calcFps);
    }
})

setInterval(() => {
    updateGui();
    calcFpsAvg();
}, 1000);
