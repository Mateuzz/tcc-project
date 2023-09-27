export default class Clock {
    times;
    currentTimePoint;

    constructor() {

    }

    begin(timePoint) {
        this.currentTimePoint = timePoint;
        if (this.times[timePoint] !== undefined) 
            return false;
        this.times[timePoint] = performance.now();
    }

    end() {
        if (!this.currentTimePoint) 
            return -1;
        return this.times[this.currentTimePoint] = performance.now() - this.times[this.currentTimePoint];
    }
}
