import Clock from "./Clock.js";

window.defaultClock = new Clock();
window.DEBUG_MODE = 0;
window.PREFIX_PATH = "new/";
defaultClock.begin("startupTime");

