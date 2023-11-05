import * as Clay from "claygl";
import ClayAdvancedRenderer from "claygl-advanced-renderer";

import {
    getConfiguration,
    makeProfilerController,
    createSendInitDataButton,
    makeConfigurationGui,
} from "testHelper";

const canvas = document.getElementById("canvas");
let profilerController;
let firstLoop = true;

const testInfo = {
    library: "claygl",
};

let camera;
let control;
let button;
let options;
let shadowMap;
let advancedRenderer;

Clay.application.create(canvas, {
    width: canvas.clientWidth,
    height: canvas.clientHeight,

    graphic: {
        shadow: false,
        tonemapping: false,
        linear: false,
    },

    autoRender: false,

    init(app) {
        app.renderer.antialias = false;
        app.renderer.preserveDrawingBuffer = false;

        camera = app.createCamera([0, 2, 5], [0, 0, 0]);
        camera.near = 0.1;
        camera.far = 1000;
        camera.fov = 55;

        control = new Clay.plugin.OrbitControl({
            target: camera,
            domElement: app.container,
        });
    },

    loop(app) {
        if (firstLoop) {
            firstLoop = false;
            defaultClock.end();

            makeConfigurationGui(() => { onStartScene(app); });
            button = document.querySelector(".init");
            options = document.querySelector(".options");
        }

        control.update(app.frameTime);

        if (advancedRenderer) {
            advancedRenderer.render();
        } else {
            shadowMap?.render(app.renderer, app.scene, camera);
            app.renderer.render(app.scene, camera);
        }

        profilerController?.update();

    },
});

function add28FlorestLights(app) {
  const positions = [
    [ 0, 47.5852554372089, 0 ],
    [ 54.43538583264144, 47.58525466918945, 0 ],
    [ 120.40039416674719, 47.58525466918945, 0 ],
    [ 0, 47.58525466918945, 107.03662536374355 ],
    [ -63.248902516513255, 47.58525466918945, 0 ],
    [ 47.55635070800781, 40.06177048285609, 42.58427047729492 ],
    [ 0, 47.58525466918945, -62.14128344926246 ],
    [ 45.09953407601924, 47.58525466918945, -52.97587966918945 ],
    [ -106.76774712251805, 47.58525466918945, 0 ],
    [ -75.3006362915039, 47.58525466918945, -55.822744880605825 ],
    [ -58.39474498589749, 47.58525466918945, 67.37708282470703 ],
    [ 0, 47.58525466918945, 55.17573325304343 ],
    [ 37.914924484598075, 47.58525466918945, 105.27346801757812 ],
    [ 145.86279296875, 47.58525466918945, 60.28359656713195 ],
    [ 0, 47.58525466918945, 138.9700335426588 ],
    [ 45.283735505038706, 47.58525466918945, 125.35922241210938 ],
    [ 93.21713361421502, 47.58525466918945, 0 ],
    [ 91.60084533691406, 47.58525466918945, 47.693679817220556 ],
    [ 90.56462860107422, 47.58525466918945, 98.37080806051804 ],
    [ -42.306660226212074, 47.58525466918945, 109.48323059082031 ],
    [ 0, 47.58525466918945, -20.41872005578216 ],
    [ 0, 47.58525466918945, -108.70984171467686 ],
    [ 0, 47.58525466918945, -116.33483987575855 ]
  ];

    for (const pos of positions) {
        const light = app.createPointLight([pos[0], pos[1], pos[2]], 80, "#fff", 1);
        light.castShadow = false;
    }
}

function onStartScene(app) {
    button.disabled = true;

    const config = getConfiguration();
    const modelPath = PREFIX_PATH + config.path;

    testInfo.profilingTimeInSeconds = config.time;
    testInfo.scene = config.scene;

    camera.position.set(config.camerax, config.cameray, config.cameraz);

    console.log(new Date());
    defaultClock.begin("sceneLoadingTime");

    app.loadModel(modelPath, { 
        autoPlayAnimation: config.animation
    }).then((model) => {
        defaultClock.end();

        button.remove();
        options.remove();

        const lights = [];
        const sceneName = config.scene.toLowerCase();

        function makeDesertLights() {
            const positions = [
                [120, 30, 120],
                [-120, 30, 120],
                [-120, 30, -120],
                [120, 30, -120],
            ];

            positions.forEach(pos => {
                const light = app.createPointLight(pos, 1000, "#fff", 1);
                lights.push(light);
            })

            lights.push(app.createAmbientLight("#00f", 1));
        }

        function makeLight(info) {
            let light;

            switch (info.type) {
            case "omni": 
                light = app.createPointLight([info.pos.x, info.pos.y, info.pos.y], info.range, "#fff", info.intensity)
                break;
            }

            if (light) lights.push(light);
        }

        function makeUnity1Lights() {
            // const info = [{"intensity":1.79070783,"range":9999,"pos":{"x":0,"y":6.190000057220459,"z":-1.899999976158142}},{"intensity":2,"range":5.51,"pos":{"x":11.899999618530273,"y":2.7982592582702637,"z":-5.590000152587891}},{"intensity":2,"range":5.51,"pos":{"x":11.899999618530273,"y":2.7982592582702637,"z":-11.390000343322754}},{"intensity":2,"range":8.528391,"pos":{"x":-15.86496639251709,"y":1.851745367050171,"z":4.526785850524902}},{"intensity":2,"range":5.51,"pos":{"x":11.899999618530273,"y":2.7982592582702637,"z":-0.5877537727355957}},{"intensity":2,"range":7.740295,"pos":{"x":-12.219869613647461,"y":2.7413454055786133,"z":-0.07446928322315216}},{"intensity":2,"range":8.528391,"pos":{"x":-15.784964561462402,"y":1.851745367050171,"z":-4.491087436676025}},{"intensity":2,"range":13.6133184,"pos":{"x":-11.513349533081055,"y":2.79825496673584,"z":0.06958034634590149}},{"intensity":2,"range":8.528391,"pos":{"x":-7.78000020980835,"y":1.851745367050171,"z":-4.491087436676025}},{"intensity":2,"range":8.528391,"pos":{"x":-7.860002517700195,"y":1.851745367050171,"z":4.526785850524902}},{"intensity":2,"range":13.6133184,"pos":{"x":0.689267098903656,"y":2.7879436016082764,"z":-0.0635664314031601}},{"intensity":2,"range":8.528391,"pos":{"x":-4.667327404022217,"y":1.7700001001358032,"z":-2.8502309322357178}},{"intensity":2,"range":8.528391,"pos":{"x":1.7576282024383545,"y":1.8600000143051147,"z":-4.749517440795898}},{"intensity":2,"range":8.528391,"pos":{"x":7.509692668914795,"y":1.8600000143051147,"z":-13.816478729248047}},{"intensity":2,"range":8.528391,"pos":{"x":1.350000023841858,"y":1.8600000143051147,"z":-13.816478729248047}}];
            // info.forEach(info => makeLight(info));
        }

        function makeUnity2Lights() {
            // const info = [{"intensity":2,"range":9999,"pos":{"x":16.540002822875977,"y":40.80000305175781,"z":-11.920000076293945},"type":"directional"}]
            // info.forEach(info => makeLight(info));
        }

        if (sceneName.includes("pirate")) {
            lights.push(
                app.createPointLight([2, 3, -4.5], 28, "#fff", 1),
                app.createPointLight([1, 4.5, -1.1], 28, "#fff", 1)
            );
            const light = app.createDirectionalLight([0, 0, -1], "#fff", 1);
            lights.push(light);
        } else if (sceneName.includes("florest")) {
            if (config.manyLights) {
                add28FlorestLights(app);
            } else {
                const light = app.createDirectionalLight([0.3, -0.5, -0.2], "#fff", 1);
                lights.push(light);
            }
        } else if (sceneName.includes("skull")) {
            lights.push(app.createAmbientLight("#fff", 1));
        } else if (sceneName.includes("desert")) {
            if (config.manyLights) {
                makeDesertLights();
            } else {
                lights.push(app.createDirectionalLight([0, 0, 1], "#fff", 1));
            }
        } else if (sceneName.includes("unity1")) {
            makeUnity1Lights();
            const light = app.createDirectionalLight([0.3, -0.5, -0.2], "#fff", 1);
            lights.push(light);
        } else if (sceneName.includes("unity2")) {
            const light = app.createDirectionalLight([0.3, -0.5, -0.2], "#fff", 1);
            lights.push(light);
        } else if (/ion|dragon/.test(sceneName)) {
            const light = app.createDirectionalLight([0.3, -0.5, -0.2], "#fff", 1);
            lights.push(light);
        }


        function makeAdvancedRenderer() {
            return new ClayAdvancedRenderer(app.renderer, app.scene, app.timeline, {
                postEffect: {
                    enable: true,
                    bloom: { enable: false },
                    shadow: { enable: config.shadows },
                    FXAA: { enable: config.fxaa },
                    colorCorrection: { enable: config.colors, exposure: 1, },
                    screenSpaceAmbientOcclusion: { enable: config.ssao, },
                    screenSpaceReflection: { enable: config.ssr, }
                }
            })
        }

        if (config.ssao || config.ssr || config.fxaa || config.colors) {
            advancedRenderer = makeAdvancedRenderer();
        }

        if (!config.shadows)  {
            lights.forEach(light => light.castShadow = false);
        }
        else {
            if (!advancedRenderer)
                shadowMap = new Clay.prePass.ShadowMap({
                    softShadow: Clay.prePass.ShadowMap.PCF,
                });

            model.meshes.forEach(mesh => {
                mesh.castShadow = true;
                mesh.receiveShadow = true;
            })

            lights.forEach(light => {
                light.castShadow = true;
                light.shadowResolution = 512;
            });
        }

        console.log(lights);
        console.log(lights.length);

        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        };

        console.table(initData);
        createSendInitDataButton(testInfo, initData);
        console.table(initData);
        // testInfo.initData = initData;
        profilerController = makeProfilerController(testInfo);
    }).catch(err => {
        alert(err);
        button.disabled = false;
    });
}
