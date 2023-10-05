import { Profiler } from "./Profiler";

export default class ProfilerController {
    profiler;
    gui;
    button;

    #createElements() {
        const gui = document.createElement("div");
        const button = document.createElement("button");
        gui.classList.add("stats", "profiler-stats");
        button.innerText = "Start Profiling";

        gui.append(button);
        document.body.append(gui);

        this.gui = gui;
        this.button = button;
    }

    #activateButton({ onFinish, handleHighFps, profilingTimeInSeconds }) {
        const [gui, button] = [this.gui, this.button];
        button.addEventListener(
            "click",
            () => {
                if (DEBUG_MODE === 1) {
                    this.profiler = new Profiler(
                        (profiler) => {
                            const { fps, fpsMin, fpsMax } = profiler.getFps();
                            gui.innerHTML = profileGui(fps, fpsMin, fpsMax);
                        },
                        { handleHighFps }
                    );
                } else {
                    this.profiler = new Profiler(undefined, { handleHighFps });
                }

                gui.innerHTML = `<h2>Profiling (${profilingTimeInSeconds} sec)...</h2>`;

                setTimeout(() => {
                    const stats = this.profiler.computerAllStats();
                    if (typeof onFinish == "function") {
                        onFinish(stats);
                    }
                    gui.innerHTML = "<h2>Finished</h2>";
                    this.profiler.destroy();
                    this.profiler = undefined;
                }, profilingTimeInSeconds * 1000);
            },
            { once: true }
        );
    }

    activate({ profilingTimeInSeconds, handleHighFps, onFinish }) {
        if (!this.gui) {
            this.#createElements();
        }
        this.#activateButton({ profilingTimeInSeconds, handleHighFps, onFinish });
    }

    constructor({ onFinish, profilingTimeInSeconds, handleHighFps = true }) {
        this.activate({ onFinish, profilingTimeInSeconds, handleHighFps });
    }

    update() {
        this.profiler?.update();
    }
}

function profileGui(fps, fpsMin, fpsMax) {
    return `
        <h2> Profiling </h2>
        <p>Fps: ${fps}</p>
        <p>Fps (min): ${fpsMin}</p>
        <p>Fps (max): ${fpsMax}</p>
        `;
}
