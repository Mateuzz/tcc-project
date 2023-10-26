import * as Clay from "claygl";
// import ClayAdvancedRenderer from "claygl-advanced-renderer";

import {
    getConfiguration,
    makeProfilerController,
    createSendInitDataButton,
    makeConfigurationGui,
} from "testHelper";

const canvas = document.getElementById("canvas");
let firstLoop = true;
let profilerController;
const testInfo = {
    library: "claygl",
};

/** @type {Clay.light.Directional} */
let light;
/** @type {Clay.camera.Perspective} */
let camera;
/** @type {Clay.OrbitControl} */
let control;

/** @type {HTMLButtonElement} */
let button;

/** @type {HTMLFormElement} */
let options;

let shadowMap;

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

        // this.advancedRenderer = new ClayAdvancedRenderer(app.renderer, app.scene, app.timeline, {
        //     postEffect: {
        //         enable: true,
        //         FXAA: { enable: false },

        //         bloom: { enable: false },
        //         colorCorrection: { enable: true,
        //             exposure: 1,
        //         },
        //     }
        // });


        // this.dRenderer = new Clay.deferred.Renderer({
        //     shadowMapPass: this.shadowMap,
        // })


        camera = app.createCamera([0, 2, 5], [0, 0, 0]);
        camera.near = 0.1;
        camera.far = 1000;
        camera.fov = 55;


        // light = app.createDirectionalLight([0.1, -1, 0]);
        // const l1 = app.createPointLight([2, 3, -4.5], 28, "#fff", 1);
        // const l2 = app.createPointLight([1, 4.5, -1.1], 28, "#fff", 1);

        // l1.castShadow = false;
        // l2.castShadow = false;
        // light.castShadow = false;
        // light = app.createAmbientLight("#fff", 1);
        // app.createPointLight([0, 10, 0], 4, "#00f", 0.5);
        // app.createAmbientLight(null, 0.2);

        control = new Clay.plugin.OrbitControl({
            target: camera,
            domElement: app.container,
        });

        // const model = app.loadModel("models/PirateFord/pirateFort.glb");
        // model.then(result => {
        //     // for (let i = 0; i < 10; ++i) {
        //         //     const clone = app.cloneNode(result.rootNode);
        //         //     const row = Math.floor(i / 3);
        //         //     const col = i - row * 3;
        //         //     clone.position.set(col * 3, 0, +8 - row * 3);
        //         // }

        //     // console.log("Finished loading");
        // })

        // return model;
    },

    loop(app) {
        if (firstLoop) {
            firstLoop = false;
            defaultClock.end();

            makeConfigurationGui(() => {
                onStartScene(app);
            });
            button = document.querySelector(".init");
            options = document.querySelector(".options");
        }

        control.update(app.frameTime);

        // this.advancedRenderer.render();
        // this.dRenderer.render(app.renderer, app.scene, camera);

        // shadowMap?.render(app.renderer, app.scene, camera);
        app.renderer.render(app.scene, camera);

        profilerController?.update();

    },
});

function addLights(app) {
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

    app.loadModel(modelPath).then((model) => {
        defaultClock.end();

        button.remove();
        options.remove();

        const lights = [];

        if (config.manyLights) {
            addLights(app);
        } else if (config.scene.includes("pirate")) {
            lights.push(
                app.createPointLight([2, 3, -4.5], 28, "#fff", 1),
                app.createPointLight([1, 4.5, -1.1], 28, "#fff", 1)
            );
            light = app.createDirectionalLight([0, 0, -1], "#fff", 1);
            lights.push(light);
        } else if (config.scene.includes("florest")) {
            light = app.createDirectionalLight([0.3, -0.5, -0.2], "#fff", 1);
            if (config.shadows) {
                shadowMap = new Clay.prePass.ShadowMap({
                    softShadow: Clay.prePass.ShadowMap.PCF,
                });

                light.castShadow = true;
                light.shadowResolution = 512;
                model.meshes.forEach(mesh => {
                    mesh.castShadow = true;
                    mesh.receiveShadow = true;
                })
            }
            lights.push(light);
        } else if (/skull|desert/i.test(config.scene)) {
            const light = app.createDirectionalLight([0, 0, -1], "#fff", 2);
            lights.push(light);
        }

        if (!config.shadows) 
            lights.forEach(light => light.castShadow = false);

        const initData = {
            startupTime: defaultClock.get("startupTime"),
            sceneLoadingTime: defaultClock.get("sceneLoadingTime"),
        };

        console.table(initData);

        createSendInitDataButton(testInfo, initData);
        profilerController = makeProfilerController(testInfo);
    }).catch(err => {
        alert(err);
        button.disabled = false;
    });
}
