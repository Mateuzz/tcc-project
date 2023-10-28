import Clock from "./Clock.js";

window.defaultClock = new Clock();
window.DEBUG_MODE = 0;
window.PREFIX_PATH = "models/";
window.BROWSER_NAME = "Firefox";
defaultClock.begin("startupTime");

