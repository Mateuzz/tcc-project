import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import { KTX2Loader } from "three/examples/jsm/loaders/KTX2Loader.js";

let loader;
let draco;
let ktx2Loader;

export function initLoaders(renderer) {
    loader = new GLTFLoader();
    draco = new DRACOLoader();
    ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath("node_modules/three/examples/jsm/libs/");
    ktx2Loader.detectSupport(renderer);

    draco.setDecoderPath("node_modules/three/examples/jsm/libs/draco/");
    draco.preload();
    loader.setDRACOLoader(draco);
    loader.setKTX2Loader(ktx2Loader);
}

export function addGltf(path, scene) {
    let number = 0;
    return new Promise((resolve, reject) => {
        loader.load(
            path,
            (gltf) => {
                gltf.scene.traverse((node) => {
                    if (node.isMesh) {
                        ++number;
                    }
                });
                console.log("Number of objects =", number);
                scene.add(gltf.scene);
                resolve(gltf);
            },
            undefined,
            (error) => {
                reject(error);
            }
        );
    });
}
