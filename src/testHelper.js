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

export function makeConfigurationGui() {
    const gui = document.createElement("div");
    gui.classList.add("stats");
    gui.innerHTML = `
    <form class="options flow" id="options">
        <fieldset class="flow">
            <legend> Camera position </legend>
            <label for="camera-x"> x </label>
            <input type="number" name="camera-x" id="camera-x" value="0">

            <label for="camera-y"> y </label>
            <input type="number" name="camera-y" id="camera-y" value="0">

            <label for="camera-z"> z </label>
            <input type="number" name="camera-z" id="camera-z" value="5">
        </fieldset>

        <fieldset class="flow">
            <legend> Scene configuration </legend>
            <label for="scene">Name</label>
            <input type="text" name="scene" id="scene">

            <label for="scene">Path</label>
            <input type="text" name="path" id="path">

            <label for="scene">Profiling Time in seconds</label>
            <input type="number" name="time" id="time" value="30">
        </fieldset>
        <button type"submit" class="init">Start Application</button>
    </form>
    `;

    const form = gui.querySelector("form");
    form.addEventListener("submit", e => e.preventDefault());

    document.body.insertAdjacentElement("afterbegin", gui);
}

export function getConfiguration() {
    const options = document.querySelector(".options");
    let scene = options.querySelector("#scene");
    let path = options.querySelector("#path");
    let time = options.querySelector("#time");
    let camerax = options.querySelector("#camera-x");
    let cameray = options.querySelector("#camera-y");
    let cameraz = options.querySelector("#camera-z");

    scene = scene.value;
    path = path.value;
    time = time.value;
    camerax = camerax.value;
    cameray = cameray.value;
    cameraz = cameraz.value;

    options.remove();

    return { scene, path, time, camerax, cameray, cameraz };
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
