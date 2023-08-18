import * as esbuild from "esbuild"
import config from "./esbuild-config.json" assert { type: "json" }

esbuild.build({
    ...config,
})

