import * as esbuild from "esbuild"
import logPlugin from 'log-plugin'
import config from "./esbuild-config.json" assert { type: "json" }

const ctx = await esbuild.context({
    ...config,
    plugins: [logPlugin()]
})

await ctx.watch()
