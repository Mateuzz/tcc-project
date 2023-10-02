import * as Babylon from 'babylonjs';
import {GLTFFileLoader} from 'babylonjs-loaders'
// import ProfilerController from 'profilerControler';

// initStats();

Babylon.SceneLoader.RegisterPlugin(new GLTFFileLoader());

const canvas = document.querySelector('#canvas');
const engine = new Babylon.Engine(canvas, true);

// const profilerController = new ProfilerController(5);


Babylon.MeshBuilder

function createScene() {
    const scene = new Babylon.Scene(engine);
    const camera = new Babylon.ArcRotateCamera("camera", 0, 0, 10, new Babylon.Vector3(0, 0, 0), scene);
    camera.useBouncingBehavior = false;
    camera.attachControl(canvas, true);

    // const light = new Babylon.SpotLight("light", new Babylon.Vector3(0, 5, 0), new Babylon.Vector3(-0.4, -1, -0.5), 2, 2, scene);

    // const light = new Babylon.DirectionalLight("light", new Babylon.Vector3(0, 5, 0), scene);

    const shadowGenerator = new Babylon.ShadowGenerator(1024, light);
    // shadowGenerator.usePoissonSampling = true;
    
    Babylon.SceneLoader.ImportMesh("", "models/PirateFord/", "pirateFort.glb", scene, (meshes) => {
        // for (const mesh of meshes) {
        //     mesh.receiveShadows = true;
        //     shadowGenerator.addShadowCaster(mesh, false);
        // }
    })

    return scene;
}

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render();

//     profilerController.update();
})

window.addEventListener('resize', () => engine.resize);
