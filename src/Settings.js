import Clock from "./Clock.js";

window.defaultClock = new Clock();
window.DEBUG_MODE = 1;
window.PREFIX_PATH = "models/";
defaultClock.begin("startupTime");

