import { mixers, scene, camera, renderer, controls, clock, startScene } from "./global.js";
import { loadModels, addGltf, addFbx, initLoaders } from "./models.js"
// import { postResult, serializeResult } from "results/performanceSerializer.js";
// import ProfilerController from "profilerControler";

// const initializeData = {
//     startupTime: -1,
//     modelLoadTime: -1,
// };

// let begin = 0;

function loop() {
    // const delta = clock.getDelta();

    // for (const mixer of mixers)
    //     mixer.update(delta);

    controls.update(0.16);

    // renderGui.innerHTML = RenderStats.renderStatsHtml();
    // RenderStats.prepareInfoFrame();

    renderer.render(scene, camera);

    // profilerController.update();

    requestAnimationFrame(loop);
}

const gltfModels = [ "models/PirateFord/pirateFort.glb" ];

// const button = document.querySelector(".init");

// button.onclick = () => {
    // begin = performance.now();
    startScene();
    initLoaders();
    // initializeData.startupTime = performance.now() - begin;

    // begin = performance.now();
    addGltf(gltfModels[0]).then(_gltf => {
        // initializeData.modelLoadTime = performance.now() - begin;
    })

    loop();
// }

// const profilerController = new ProfilerController({
//     profilingTimeInSeconds: 2,
//     onFinish: async (stats) => {
//         const result = serializeResult({
//             libraryName: "Three",
//             sceneName: "PirateFord",
//             initializeData: initializeData,
//             performanceData: stats
//         });
//         const res = await postResult(result);
//         if (res) {
//             console.log("Result posted:\n", res);
//         } else {
//             console.error("Failed to post result");
//         }
//     },
//     handleHighFps: true,
// });
