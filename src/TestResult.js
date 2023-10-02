export class TestResult {
    constructor(library, scene) {
        this.library = library;
        this.scene = scene;
    }

    addInitializationEntry(ms) {
        this.startupTime = ms;
    }

    addSceneLoadingEntry(ms) {
        this.sceneLoadingTime = ms;
    }

    addRenderingEntry(performanceData) {
        this.performanceData = performanceData;
    }

    async postResult() {
        if (!this.startupTime | !this.sceneLoadingTime | !this.performanceData)
            return false;

        const data = new FormData();
        data.append("data", JSON.stringify(this, undefined, 4));

        try {
            const res = await fetch("http://localhost:8000", {
                method: "POST",
                data: data,
            });

            if (!res.ok)
                throw new Error(res.statusText);

            return res.text();
        } catch (error) {
            console.error(error);
            return false;
        }
    }
}
