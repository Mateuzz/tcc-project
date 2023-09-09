import * as Babylon from 'babylonjs';
import {GLTFFileLoader} from 'babylonjs-loaders'
import { initStats } from 'webglStats';

initStats();

Babylon.SceneLoader.RegisterPlugin(new GLTFFileLoader());

const canvas = document.querySelector('#canvas');
const engine = new Babylon.Engine(canvas, true);

let elapsedDelta = 0;
let fps = 0;
let fpsAvg = 0;
let fpsMin = Infinity;
let fpxMax = 0;
let elapsedSinceAvgCalc = 0;
let framesSinceAvgCalc = 0;
const elapsedGoal = 1000 / 60;
const guiElement = document.querySelector("#count");

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
            <p>No-Instanced Renderized = ${info.hasNonInstaced}</p>
        <p>Instanced Renderized = ${info.hasInstanced}</p>
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


function createScene() {
    const scene = new Babylon.Scene(engine);
    const camera = new Babylon.ArcRotateCamera("camera", 0, 0, 10, new Babylon.Vector3(0, 0, 0), scene);
    camera.attachControl(canvas, true);
    camera.wheelPrecision = 10;

    const light = new Babylon.HemisphericLight("light", new Babylon.Vector3(0, 0, 0), scene);
    light.intensity = 1;
    
    // const sphere = Babylon.MeshBuilder.CreateSphere("sphere", { diameter: 2, segments: 16 }, scene);
    const material = new Babylon.StandardMaterial("material", scene);
    const texture = new Babylon.Texture("../../testModels/Assets/textures/Checker_albedo.png", scene);
    // Babylon.SceneLoader.Append("testModels/DamagedHelmet/glTF/", "DamagedHelmet.gltf", scene, (scene) => {
    // })

    // Babylon.SceneLoader.LoadAssetContainer("testModels/DamagedHelmet/glTF", "DamagedHelmet.gltf", scene, (container) => {
    //     const meshes = container.meshes;
    //     const materials = container.materials;
        
    //     container.addAllToScene();
    // })
    // Babylon.SceneLoader.LoadAssetContainer("testModels/Nefertiti/", "Nefertiti.glb", scene, (container) => {
    //     const meshes = container.meshes;
    //     const materials = container.materials;
        
    //     container.addAllToScene();
    // })

      // Babylon.SceneLoader.ImportMesh("", Assets.meshes.Yeti.rootUrl, Assets.meshes.Yeti.filename, scene, function(newMeshes){
      //     console.log(newMeshes);
      // })

    // Babylon.SceneLoader.Append("testModels/Nefertiti/", "Nefertiti.glb", scene, (scene) => {
    // })

    const positions = [];
    for (let i = 0; i < 20; ++i) {
        const x = Math.floor(i / 5);
        const y = i - x * 5;
        positions.push({
            x: x * 4,
            y: -20 + y * 4,
        })
    }
    for (let i = 0; i < 10; ++i) {
        (() => {
            Babylon.SceneLoader.ImportMesh(null, "testModels/DamagedHelmet/glTF/", "DamagedHelmet.gltf", scene, (meshes) => {
                for (const mesh of meshes) {
                    mesh.setAbsolutePosition(new Babylon.Vector3(positions[i].x, 0, positions[i].y));
                }
            })
        })();
    }
    // Babylon.SceneLoader.LoadAssetContainer("testModels/Assets/meshes/", "ExplodingBarrel.glb", scene, (assets) => {
        //     console.log(assets);

        //     assets.addAllToScene();
        // })
    // Babylon.SceneLoader.ImportMesh("", "testModels/Assets/meshes/Buildings/", "Gap.glb", scene, (meshes) => {
        // })

    material.diffuseTexture = texture;
    material.diffuseColor = Babylon.Color3.FromHexString("#55ff55");

    // sphere.position.y = 1;

    // const ground = Babylon.MeshBuilder.CreateGround("ground", { width: 10, height: 6 }, scene);
    // ground.material = material;

    return scene;
}

const scene = createScene();
const info = canvas.getContext("webgl2").info

engine.runRenderLoop(() => {
    info.vertCount = 0;
    info.primCount = [0, 0, 0];

    scene.render();

    requestIdleCallback(calcFps);
})

window.addEventListener('resize', () => engine.resize);

setInterval(() => {
    updateGui();
    calcFpsAvg();
}, 1000);

