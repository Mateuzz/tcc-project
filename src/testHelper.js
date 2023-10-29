import ProfilerController from "ProfilerController";
import { postJson } from "fetch";

export function makeStatsGui() {
    const gui = document.createElement("div");
    gui.classList.add("stats", "render-stats");
    gui.innerHTML = "<h2>Stats</h2>";
    document.documentElement.append(gui);
    return gui;
}

export function makeProfilerController({
    library,
    scene,
    initData,
    handleHighFps = true,
    profilingTimeInSeconds = 5,
}) {
    return new ProfilerController({
        profilingTimeInSeconds,
        onFinish: (performanceData) => {
            postJson({ library, scene, browser: BROWSER_NAME, performanceData });
            if (initData) {
                postJson({ library, scene, ...initData });
            }
            const stats = document.querySelector(".config-stats");
            stats.insertAdjacentHTML("beforeend", "<h3>Posted rendering data</h3>");
        },
        handleHighFps,
    });
}

export function makeConfigurationGui(callback) {
    const gui = document.createElement("div");
    gui.classList.add("stats", "config-stats");
    gui.id = "config-box";
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

        <fieldset class="flow" id="scene-options">
            <legend> Scene configuration </legend>
            <label for="scene">Name</label>
            <input type="text" name="scene" id="scene" autofocus required>

            <label for="path">Path</label>
            <input type="text" name="path" id="path" required>

            <label for="time">Profiling Time in seconds</label>
            <input type="number" name="time" id="time" value="12" required>

            <label for="many-lights">Many Lights</label>
            <input type="checkbox" name="config[]" id="many-lights" value="many-lights">

            <label for="fxaa">FXAA</label>
            <input type="checkbox" name="config[]" id="fxaa" value="fxaa">

            <label for="ssao">SSAO</label>
            <input type="checkbox" name="config[]" id="ssao" value="ssao">

            <label for="ssr">SSR</label>
            <input type="checkbox" name="config[]" id="ssr" value="ssr">

            <label for="colors">Color Curves (like pc)</label>
            <input type="checkbox" name="config[]" id="colors" value="colors">

            <label for="shadows">Shadows</label>
            <input type="checkbox" name="config[]" id="shadows" value="shadows">
        </fieldset>
        <button type"submit" class="init">Start Application</button>
    </form>
    `;

    const form = gui.querySelector("form");
    form.onsubmit = (e) => {
        e.preventDefault();
        callback();
    };

    document.body.insertAdjacentElement("afterbegin", gui);
}

export function getConfiguration() {
    return {
        options : document.querySelector(".options"),
        scene : options.querySelector("#scene").value,
        path : options.querySelector("#path").value,
        time : options.querySelector("#time").value,
        camerax : options.querySelector("#camera-x").value,
        cameray : options.querySelector("#camera-y").value,
        cameraz : options.querySelector("#camera-z").value,
        manyLights : options.querySelector("#many-lights").checked,
        fxaa : options.querySelector("#fxaa").checked,
        ssao : options.querySelector("#ssao").checked,
        ssr : options.querySelector("#ssr").checked,
        shadows : options.querySelector("#shadows").checked,
        colors : options.querySelector("#colors").checked,
    }
}

export function createSendInitDataButton(
    { library, scene },
    { startupTime, sceneLoadingTime }
) {
    const stats = document.querySelector(".config-stats");
    const button = document.createElement("button");
    button.innerText = "Post initialization data";
    button.onclick = () => {
        postJson({ library, scene, startupTime, sceneLoadingTime });
        button.remove();
    };

    stats.append(button);
}

export function createSendProfilingDatabutton({ library, scene }, performanceData) {
    const stats = document.querySelector(".config-stats");
    const button = document.createElement("button");

    button.innerText = "Post rendering data";
    button.onclick = () => {
        postJson({ library, scene, browser: BROWSER_NAME, performanceData });
        button.remove();
    };

    stats.appendChild(button);
}
