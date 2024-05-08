import Clock from "./Clock.js";

window.defaultClock = new Clock();
window.DEBUG_MODE = 1;
window.PREFIX_PATH = "nup-models/";
window.BROWSER_NAME = "chrome";
window.MONITOR_HZ = 60;
defaultClock.begin("startupTime");

