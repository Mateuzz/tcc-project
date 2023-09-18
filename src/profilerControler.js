import { Profiler } from "./profiler";

export default class ProfilerController {
    profiler;

    constructor({ profilingTimeInSeconds = 5, onFinish, handleHighFps = true}) {
        const gui = document.createElement("div");
        const button = document.createElement("button");
        const profilingTime = profilingTimeInSeconds * 1000;

        gui.classList.add("stats", "profiler-stats");

        console.log("Profiler Controler Created");

        button.innerText = "Start Profiling";
        button.addEventListener("click", () => {
            this.profiler = new Profiler((profiler) => {
                const { fps, fpsMin, fpsMax } = profiler.getFps();
                gui.innerHTML = profileGui(fps, fpsMin, fpsMax);
            }, { handleHighFps });

            console.log("Profiling...");

            setTimeout(() => {
                const stats = this.profiler.computerAllStats();
                if (typeof onFinish == "function") {
                    onFinish(stats);
                }
            }, profilingTime);
        }, { once: true });

        gui.append(button);
        document.body.append(gui);
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
        `
}
