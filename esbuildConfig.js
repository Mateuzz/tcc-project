import * as esbuild from 'esbuild';
import logPlugin from 'log-plugin';
import * as Fs from 'node:fs'
import * as Path from 'node:path'

function getEntries(list, path, entryName) {
    const files = Fs.readdirSync(path)
    files.forEach(file => {
        const full = Path.resolve(path, file);
        if (Fs.statSync(full).isDirectory()) {
            getEntries(list, full, entryName);
        }
        if (file === entryName) {
            list.push(full);
        }
    })
}

const entries = [];
const entryName = "app.js"
getEntries(entries, "./src", entryName);

/** 
* @type {esbuild.BuildOptions} 
*/
let esbuildConfig =  {
    entryPoints: entries,
    bundle: true,
    minify: true,
    outbase: "src",
    nodePaths: ["src"],
    platform: "browser",
    outdir: "dist",
    format: "esm",
    plugins: [ logPlugin(entries) ]
};


export default esbuildConfig;
