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

    ".animate-cubic-bezier": {
      "animation-timing-function": "cubic-bezier(0.11, 0, 0.5, 0)",
    },

    ".animate-once": {
      "animation-iteration-count": "1",
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

        scale: {
          to: {
            transform: "scale(1)",
          },
        },

        "slightly-rotate": {
          to: {
            transform: "rotate(360deg)",
          },
        },

        shine: {
          "50%": {
            filter:
              "drop-shadow(0 0 20px #ffdd50) drop-shadow(0 0 60px #ffdd50) drop-shadow(0 0 250px #ffdd50)",
          },
        },
      },

      animation: {
        "fade-in": "3s ease 0s normal forwards 1 fadeIn",

        scale: "scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1)",

        "slightly-rotate": "slightly-rotate .5s ease-in-out 1",

        shine: "shine 1s ease-in-out 1",
      },
    },
  },

  plugins: [extraPlugin],
} satisfies Config;
