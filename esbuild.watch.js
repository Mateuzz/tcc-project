import * as esbuild from "esbuild"
import esbuildConfig from "./esbuildConfig.js"

const ctx = await esbuild.context(esbuildConfig);

await ctx.watch()
