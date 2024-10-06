import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const extraPlugin: PluginCreator = ({ addUtilities }) =>
  addUtilities({
    ".animate-delay-0": {
      "animation-delay": "0s",
    },

    ".animate-delay-75": {
      "animation-delay": ".075s",
    },

    ".animate-delay-100": {
      "animation-delay": ".1s",
    },

    ".animate-delay-150": {
      "animation-delay": ".15s",
    },

    ".animate-delay-200": {
      "animation-delay": ".2s",
    },

    ".animate-delay-300": {
      "animation-delay": ".3s",
    },

    ".animate-delay-500": {
      "animation-delay": ".5s",
    },

    ".animate-delay-700": {
      "animation-delay": ".7s",
    },

    ".animate-delay-1000": {
      "animation-delay": "1s",
    },
  });

export default {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: "0", "user-select": "none" },
          to: { opacity: "1", filter: "blur(0)" },
        },
      },

      animation: {
        "fade-in": "3s ease 0s normal forwards 1 fadeIn",
      },
    },
  },

  plugins: [extraPlugin],
} satisfies Config;
