import {mixers, scene, camera, renderer, controls, clock, startScene} from "./global.js";
import {loadModels, addGltf, addFbx, initLoaders} from "./models.js"
import {initStats} from "./webglStats.js";

function updateGui() {
    guiElement.innerHTML = `
        <p>Vertices = ${info.vertCount}</p>
        <p>Points = ${info.primCount[0]}</p>
        <p>Lines = ${info.primCount[1]}</p>
        <p>Triangles = ${info.primCount[2]}</p>
        <p>Time = ${elapsedDelta}ms</p>
        <p>Fps = ${fps}</p>
        <p>Fps (avg) = ${fpsAvg}</p>
        <p>Fps (min) = ${fpsMin}</p>
        <p>Fps (max) = ${fpxMax}</p>
        `
}

function calcFpsAvg() {
    fpsAvg = 1000 * framesSinceAvgCalc / elapsedSinceAvgCalc;
    framesSinceAvgCalc = 0;
    elapsedSinceAvgCalc = 0;
    fpsMin = Infinity;
    fpxMax = 0;
}

function calcFps(d) {
    elapsedDelta = elapsedGoal - d.timeRemaining();
    fps = 1000 / elapsedDelta;
    ++framesSinceAvgCalc;
    elapsedSinceAvgCalc += elapsedDelta;

    if (fps > fpxMax)
        fpxMax = fps
    if (fps < fpsMin)
        fpsMin = fps;
}

function loop() {
    const delta = clock.getDelta();

    for (const mixer of mixers)
        mixer.update(delta);

    controls.update(0.16);

    info.vertCount = 0;
    info.primCount = [0, 0, 0];

    renderer.render(scene, camera);

    requestIdleCallback(calcFps);
    requestAnimationFrame(loop);
}

const gltfModels = [
    "../testModels/plane/source/model.gltf"
];


startScene();
initStats();
initLoaders();

// loadModels();
gltfModels.forEach(model => addGltf(model));

const guiElement = document.querySelector('#count');
const info = renderer.domElement.getContext('webgl2').info;

const elapsedGoal = 1000 / 60;

let elapsedDelta = 0;
let fps = 0;
let fpsAvg = 0;
let fpsMin = Infinity;
let fpxMax = 0;

let elapsedSinceAvgCalc = 0;
let framesSinceAvgCalc = 0;

setInterval(updateGui, 1000);
setInterval(calcFpsAvg, 1000);
loop();
