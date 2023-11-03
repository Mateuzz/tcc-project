export function mean(array) {
    return array.reduce((prev, cur,) => prev += cur) / array.length;
}

export function truncatedMean(array, coveragePercent) {
    const low = Math.floor(array.length * ((100 - coveragePercent) / 200));
    const high = array.length - low;
    const count = (high - low);
    let total = 0;

    for (let i = low; i < high; ++i) {
        total += array[i];
    }

    return total / count;
}
