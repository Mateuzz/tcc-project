import * as Pc from "playcanvas"

const canvas = document.querySelector("#canvas");
const app = new Pc.Application(canvas);

app.setCanvasFillMode(Pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(Pc.RESOLUTION_AUTO);

window.addEventListener("resize", () => app.resizeCanvas());

const box = new Pc.Entity("cube");
box.addComponent("model", {
    type: "box"
});

app.root.addChild(box);

const camera = new Pc.Entity("camera");
camera.addComponent("camera", {
    clearColor: new Pc.Color(0.1, 0.1, 0.1)
});

app.root.addChild(camera);
camera.setPosition(0, 0, 3);

const light = Pc.Entity("light");
light.addComponent("light");
app.root.addChild(light);
light.setEulerAngles(45 , 0, 0);

app.on("update", dt => {
    box.rotate(10 * dt, 20 * dt, 30 * dt);
});

app.start();
