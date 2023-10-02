import {mean, truncatedMean} from "./util";

export class Profiler {
    delta;
    deltaList;
    startTime;
    timestamp;
    elapsedGoal;
    deltaMin;
    deltaMax;
    deltaMinList;
    deltaMaxList;
    onCalcMeanCallback;
    handleHighFps;

    constructor(onCalcMeanCallback, { handleHighFps = true }) {
        this.onCalcMeanCallback = onCalcMeanCallback;
        this.delta = 0;
        this.deltaList = [];
        this.deltaMinList = [];
        this.deltaMaxList = [];
        this.elapsedGoal = 1000 / 60;
        this.startTime = performance.now();
        this.timestamp = this.startTime;
        this.deltaMin = Infinity;
        this.deltaMax = 0;
        this.hasIdleCallbackCalledFrame = false;
        this.handleHighFps = handleHighFps;
        setInterval(() => {
            this.addDeltaMinMaxMean();
        }, 1000);
    }

    addDeltaMinMaxMean() {
        this.onCalcMeanCallback(this);
        this.deltaMinList.push(this.deltaMin);
        this.deltaMaxList.push(this.deltaMax);
        this.deltaMin = Infinity;
        this.deltaMax = 0;
    }

    getFps() {
        return {
            fps: 1000 / this.delta,
            fpsMax: 1000 / this.deltaMin,
            fpsMin: 1000 / this.deltaMax,
        };
    }

    #updatePerformanceData(delta) {
        if (delta > this.deltaMax) 
            this.deltaMax = delta;
        else if (delta < this.deltaMin)
            this.deltaMin = delta;

        this.deltaList.push(delta);
    }

    idleCallbackUpdate(d) { 
        this.delta = this.elapsedGoal - d.timeRemaining();
        this.hasIdleCallbackCalledFrame = true;
        this.#updatePerformanceData(this.delta);
    }

    update() {
        const delta = performance.now() - this.timestamp;
        this.timestamp = performance.now();

        if (!this.handleHighFps) {
            this.delta = delta;
            this.#updatePerformanceData(delta);
        } else {
            if (!this.hasIdleCallbackCalledFrame) {
                this.delta = delta;
                this.#updatePerformanceData(delta);
            }

            this.hasIdleCallbackCalledFrame = false;
            requestIdleCallback(Profiler.prototype.idleCallbackUpdate.bind(this));
        }
    }

    computerAllStats() {
        const profilingTime = performance.now() - this.startTime;
        const fpsAVG = 1000 / mean(this.deltaList);
        const fpsMaxAVG = 1000 / mean(this.deltaMinList);
        const fpsMinAVG = 1000 / mean(this.deltaMaxList);
        const totalFrames = this.deltaList.length
        const fpsTruncatedAVG = 1000 / truncatedMean(this.deltaList, 80);

        const fps1Low = (() => {
            const count = this.deltaList.length * 0.01;
            let total = 0;

            for (let i = 0; i < count; ++i) {
                total += this.deltaList[i];
            }

            return total / count;
        })();

        return { 
            profilingTime,
            totalFrames,
            fpsAVG,
            fpsTruncatedAVG,
            fps1Low,
            fpsMaxAVG,
            fpsMinAVG,
        }
    }
}
