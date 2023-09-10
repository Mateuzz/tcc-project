import { Profiler } from "./profiler";

export default class ProfilerController {
    profiler;

    constructor(element) {
        const button = element.querySelector(".profile-begin");

        button.addEventListener("click", () => {
            this.profiler = new Profiler((profiler) => {
                const { fps, fpsMin, fpsMax } = profiler.getFps();
                element.innerHTML = profileGui(fps, fpsMin, fpsMax);
            });

            setTimeout(() => {
                console.table(this.profiler.computerAllStats());
            }, 5 * 1000);
        }, { once: true });
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
