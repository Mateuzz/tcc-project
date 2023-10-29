// let primMap;

let info = {};

export function getInfo() {
    return info;
}

export function prepareInfoFrame() {
    info.primCount = [0, 0, 0];
    info.vertCount = 0;
}

export function statsGui() {
    const div = document.createElement("div");
    div.classList.add("stats", "webgl-stats");
    document.documentElement.append(div);
    return div;
}

export function renderStatsHtml() {
    return `
        <h2>Render Stats</h2>
        <p>Polygons: ${info.vertCount}</p>
        <p>Triangles: ${info.primCount[2]}</p>
        <p>Lines: ${info.primCount[1]}</p>
        <p>Points: ${info.primCount[0]}</p>
    `;
}

export function initStats() {
    WebGL2RenderingContext.prototype.drawArrays = (function (oldFn) {
        return function (type, offset, count) {
            addCount(this, type, count);
            oldFn.call(this, type, offset, count);
        };
    }(WebGL2RenderingContext.prototype.drawArrays));

    WebGL2RenderingContext.prototype.drawArraysInstanced = (function (oldFn) {
        return function (mode, first, count, instanceCount) {
            addCount(this, mode, count);
            oldFn.call(this, mode, first, count, instanceCount);
        };
    })(WebGL2RenderingContext.prototype.drawArraysInstanced);

    WebGL2RenderingContext.prototype.drawElements = (function (oldFn) {
        return function (type, count, indexType, offset) {
            addCount(this, type, count);
            oldFn.call(this, type, count, indexType, offset);
        };
    }(WebGL2RenderingContext.prototype.drawElements));

    HTMLCanvasElement.prototype.getContext = (function (oldFn) {
        return function (type, ...args) {
            const ctx = oldFn.call(this, type, args);

            if (ctx && (type === "webgl2" || type == "webgl")) {
                // if (!prmMap) {
                    // primMap = {};
                    // primMap[ctx.POINTS] = {ndx: 0, fn: count => count, };
                    // primMap[ctx.LINE_LOOP] = {ndx: 1, fn: count => count, };
                    // primMap[ctx.LINE_STRIP] = {ndx: 1, fn: count => count - 1, };
                    // primMap[ctx.LINES] = {ndx: 1, fn: count => count / 2 | 0, };
                    // primMap[ctx.TRIANGLE_STRIP] = {ndx: 2, fn: count => count - 2, };
                    // primMap[ctx.TRIANGLE_FAN] = {ndx: 2, fn: count => count - 2, };
                    // primMap[ctx.TRIANGLES] = {ndx: 2, fn: count => count / 3 | 0, };
                // };
                info = ctx.info = {
                    vertCount: 0,
                    primCount: [0, 0, 0],
                };
            }

            return ctx;
        }
    }(HTMLCanvasElement.prototype.getContext));

    WebGLRenderingContext.prototype.drawArrays = (function (oldFn) {
        return function (type, offset, count) {
            addCount(this, type, count);
            oldFn.call(this, type, offset, count);
        };
    }(WebGLRenderingContext.prototype.drawArrays));

    WebGLRenderingContext.prototype.drawArraysInstanced = (function (oldFn) {
        return function (mode, first, count, instanceCount) {
            addCount(this, mode, count);
            this.info.hasInstanced = true;
            oldFn.call(this, mode, first, count, instanceCount);
        };
    })(WebGLRenderingContext.prototype.drawArraysInstanced);

    WebGLRenderingContext.prototype.drawElements = (function (oldFn) {
        return function (type, count, indexType, offset) {
            addCount(this, type, count);
            oldFn.call(this, type, count, indexType, offset);
        };
    }(WebGLRenderingContext.prototype.drawElements));
}

function addCount(ctx, type, count) {
    const ctxInfo = ctx.info;
    // const primInfo = primMap[type];
    ctxInfo.vertCount += count;
    // ctxInfo.primCount[primInfo.ndx] += primInfo.fn(count);

    switch (type) {
        case ctx.POINTS:
        ctxInfo.primCount[0] += count;
        break;
    case ctx.TRIANGLES:
        ctxInfo.primCount[2] += count / 3 | 0;
        break;
    case ctx.TRIANGLE_STRIP:
    case ctx.TRIANGLE_FAN:
        ctxInfo.primCount[2] += count - 2;
        ctxInfo.primCount[2] += count
        break;
    case ctx.LINES:
        ctxInfo.primCount[1] += count / 2 | 0;
        break;
    case ctx.LINE_STRIP:
        ctxInfo.primCount[1] += count - 1;
        break;
    case ctx.LINE_LOOP:
        ctxInfo.primCount[1] += count;
        break;
    }
}
