import autoprefixer from "autoprefixer";
import type { Config } from "postcss-load-config";
import tailwindcss from "tailwindcss";

export default {
  plugins: [autoprefixer(), tailwindcss()],
} satisfies Config;
