import ProfilerController from "ProfilerController";
import { postJson } from "fetch";

export function makeProfilerController({
    library,
    scene,
    handleHighFps = true,
    profilingTimeInSeconds = 5,
}) {
    return new ProfilerController({
        profilingTimeInSeconds,
        onFinish: (performanceData) => {
            createSendProfilingDatabutton({ library, scene }, performanceData);
        },
        handleHighFps,
    });
}

export function getConfiguration() {
    const options = document.querySelector(".options");
    let scene = options.querySelector("#scene");
    let path = options.querySelector("#path");
    let time = options.querySelector("#time");

    scene = scene.value;
    path = path.value;
    time = parseInt(time.value);

    options.remove();

    return { scene, path, time };
}

export function createSendInitDataButton(
    { library, scene },
    { startupTime, sceneLoadingTime }
) {
    const stats = document.querySelector(".stats");
    const button = document.createElement("button");
    button.innerText = "Post initialization Data";
    button.onclick = () => {
        postJson({ library, scene, startupTime, sceneLoadingTime });
        button.remove();
    };

    stats.append(button);
}

export function createSendProfilingDatabutton({ library, scene }, performanceData) {
    const stats = document.querySelector(".stats");
    const button = document.createElement("button");

    button.innerText = "Post Profiler Data";
    button.onclick = () => {
        console.log("Inside on click");
        postJson({ library, scene, performanceData });
        button.remove();
    };

    stats.appendChild(button);
}
