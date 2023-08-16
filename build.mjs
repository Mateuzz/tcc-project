import * as esbuild from "esbuild"

esbuild.build({
    entryPoints: ['./appThree.mjs'],
    bundle: true,
    minify: true,
    outdir: "dist",
})

