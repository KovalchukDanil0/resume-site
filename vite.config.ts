import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [remix(), tsconfigPaths(), ViteImageOptimizer()],
  esbuild: { legalComments: "none" },
});
