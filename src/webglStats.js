let primMap;

function addCount(ctx, type, count) {
    const ctxInfo = ctx.info;
    const primInfo = primMap[type];
    ctxInfo.vertCount += count;
    ctxInfo.primCount[primInfo.ndx] += primInfo.fn(count);
}

function initStats() {
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
            if (ctx && type === "webgl2") {
                if (!primMap) {
                    primMap = {};
                    primMap[ctx.POINTS] = {ndx: 0, fn: count => count, };
                    primMap[ctx.LINE_LOOP] = {ndx: 1, fn: count => count, };
                    primMap[ctx.LINE_STRIP] = {ndx: 1, fn: count => count - 1, };
                    primMap[ctx.LINES] = {ndx: 1, fn: count => count / 2 | 0, };
                    primMap[ctx.TRIANGLE_STRIP] = {ndx: 2, fn: count => count - 2, };
                    primMap[ctx.TRIANGLE_FAN] = {ndx: 2, fn: count => count - 2, };
                    primMap[ctx.TRIANGLES] = {ndx: 2, fn: count => count / 3 | 0, };
                };
                ctx.info = {
                    vertCount: 0,
                    primCount: [0, 0, 0],
                };
            }
            return ctx;
        }
    }(HTMLCanvasElement.prototype.getContext));
}

export { initStats };
