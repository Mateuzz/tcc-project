export function serializeResult({libraryName, sceneName, initializeData, performanceData}) {
    const obj = {
        libraryName,
        sceneName,

        data: {
            startUpTest: {
                sceneStartupMS: initializeData.startupTime,
                modelLoadingMS: initializeData.modelLoadTime,
            },

            renderingTest: {
                totalMS: performanceData.profilingTime,
                totalFrames: performanceData.totalFrames,
                fpsAVG: performanceData.fpsMean,
                fpsTruncatedAVG: performanceData.fpsTruncatedMean,
                fpsMaxAVG: performanceData.fpsMaxMean,
                fpsMinAVG: performanceData.fpsMinMean,
                fps1Low: performanceData.fps1Low,
            }
        }
    }

    return obj;
}

export async function postResult(result) {
    const data = new FormData();

    data.append("library", result.libraryName);
    data.append("scene", result.sceneName);
    data.append("data", JSON.stringify(result, undefined, 4));

    try {
        const res = await fetch("http://localhost:8000", {
            method: "POST",
            body: data,
        });

        if (!res.ok)
            throw new Error(res.statusText);

        return res.text();
    } catch (e) {
        console.error(e);
        return false;
    }
}
