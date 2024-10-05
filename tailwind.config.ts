import type { Config } from "tailwindcss";
import tailwindAnimate from "tailwindcss-animate";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  plugins: [tailwindAnimate],
} satisfies Config;
