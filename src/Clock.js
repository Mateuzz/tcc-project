export default class Clock {
    times = {};
    currentTimePoint;

    constructor() {
    }

    get(timePoint) {
        if (!this.times[timePoint])
            return -1;

        return this.times[timePoint];
    }

    has(timePoint) {
        return this.times[timePoint] !== undefined;
    }

    begin(timePoint) {
        this.currentTimePoint = timePoint;
        this.times[timePoint] = performance.now();
    }

    end() {
        if (!this.currentTimePoint)
            return -1;
        return this.times[this.currentTimePoint] = performance.now() - this.times[this.currentTimePoint];
    }
}
