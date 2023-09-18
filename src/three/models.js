import * as Three from "three";
import {scene, mixers, renderer} from './global.js'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {DRACOLoader} from "three/examples/jsm/loaders/DRACOLoader.js";
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js'
import {KTX2Loader} from "three/examples/jsm/loaders/KTX2Loader.js";

let loader;
let fbxLoader;
let draco;
let ktx2Loader;
let defaultMaterial;
let textureLoader;

function initLoaders() {
    loader = new GLTFLoader();
    fbxLoader = new FBXLoader();
    draco = new DRACOLoader();
    ktx2Loader = new KTX2Loader();
    ktx2Loader.setTranscoderPath("node_modules/three/examples/jsm/libs/")
    ktx2Loader.detectSupport(renderer);

    draco.setDecoderPath("node_modules/three/examples/jsm/libs/draco/");
    draco.preload();
    loader.setDRACOLoader(draco);
    loader.setKTX2Loader(ktx2Loader);
    
    // textureLoader = new Three.TextureLoader();
    // const texture = textureLoader.load("../testModels/plane/textures/gltf_embedded_0.png");
    // texture.colorSpace = Three.SRGBColorSpace;

    // defaultMaterial = new Three.MeshStandardMaterial({
    //     map: texture,
    //     color: 0xffffff,
    //     metalness: 1.0,
    //     roughness: 1,
    //     emissiveIntensity: 1,
    //     flatShading: true
    // });
}

function loadModels() {
    const pathModel = [
        "../models/gltf/Soldier.glb"
    ]

    const loader = new GLTFLoader();

    for (const path of pathModel) {
        for (let i = 0; i < 20; ++i) {

            loader.load(path, gltf => {
                const model = gltf.scene;
                scene.add(model);

                model.traverse(obj => {
                    if (obj.isMesh)
                        obj.castShadow = true;
                });

                const row = Math.floor(i / 7);
                const col = i - row * 7;
                model.position.x = -5 + col * 2.0;
                model.position.z = 0 + row * 2.0;

                const skeleton = new Three.SkeletonHelper(model);
                skeleton.visible = true;
                scene.add(skeleton);

                const mixer = new Three.AnimationMixer(model);
                const run = mixer.clipAction(gltf.animations[3])
                run.play();

                mixers.push(mixer);
            });
        }
    }
}

function addFbx(path) {
    fbxLoader.load(path, fbx => {
        console.log(fbx);
        scene.add(fbx);
    });
}

function addGltf(path) {
    return new Promise((resolve, reject) => {
        loader.load(path, gltf => {
            const model = gltf.scene;
            scene.add(model);
            resolve(gltf);
        }, undefined, error => {
            reject(error);
        })
    })
}

export { initLoaders, loadModels, addGltf, addFbx };
