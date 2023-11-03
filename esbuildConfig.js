import * as esbuild from "esbuild";
import * as Path from "node:path";
import { argv } from "node:process";

// function getEntries(list, path, entryName) {
//     const files = Fs.readdirSync(path)
//     files.forEach(file => {
//         const full = Path.resolve(path, file);
//         if (Fs.statSync(full).isDirectory()) {
//             getEntries(list, full, entryName);
//         }
//         if (file === entryName) {
//             list.push(full);
//         }
//     })
// }

// const entries = [];
// const entryName = "app.js"
// getEntries(entries, "./src", entryName);

const entries = [];
const srcDir = "src";
const entryName = "app.js";

for (let i = 2; i < argv.length; ++i) {
  entries.push(Path.join(srcDir, argv[i], entryName));
}

/**
 * @type {esbuild.BuildOptions}
 */
let esbuildConfig = {
  entryPoints: entries,
  bundle: true,
  minify: true,
  outbase: "src",
  nodePaths: ["src"],
  platform: "browser",
  outdir: "dist",
  format: "esm",
};

export default esbuildConfig;
