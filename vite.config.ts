import mdx from "@mdx-js/rollup";
import { vitePlugin as remix } from "@remix-run/dev";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    mdx(),
    remix(),
    tailwindcss(),
    svgr(),
    ViteImageOptimizer(),
  ],
  esbuild: { legalComments: "none" },
});
