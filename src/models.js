import * as Three from "three";
import { scene, mixers } from './global.js'

import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader.js';
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader.js';
import {OBJLoader} from 'three/examples/jsm/loaders/OBJLoader.js';

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

export { loadModels };
