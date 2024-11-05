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

    ".animate-duration-050": {
      "animation-duration": ".5s",
    },

    ".animate-duration-100": {
      "animation-duration": "1s",
    },

    ".animate-duration-200": {
      "animation-duration": "2s",
    },

    ".animate-duration-300": {
      "animation-duration": "3s",
    },

    ".animate-duration-400": {
      "animation-duration": "4s",
    },

    ".animate-duration-500": {
      "animation-duration": "5s",
    },

    ".animate-paused": {
      "animation-play-state": "paused",
    },

    ".animate-running": {
      "animation-play-state": "running",
    },

    ".animate-cubic-bezier": {
      "animation-timing-function": "cubic-bezier(0.11, 0, 0.5, 0)",
    },

    ".animate-once": {
      "animation-iteration-count": "1",
    },

    ".animate-direction-reverse": {
      "animation-direction": "reverse",
    },

    ".animate-direction-alternate-reverse": {
      "animation-direction": "alternate-reverse",
    },
  });

export default {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "fade-in": {
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
              "drop-shadow(0 0 20px #c2410c) drop-shadow(0 0 60px #c2410c) drop-shadow(0 0 250px #c2410c)",
          },
        },

        fall: {
          to: {
            transform: "translate3d(-30em, 0, 0)",
          },
        },

        "tail-fade": {
          "0%": {},
          "50%": {
            opacity: "1",
            width: "var(--star-tail-length)",
          },

          "70%": {},
          "80%": {
            opacity: "0.05",
            width: "0",
          },

          "100%": {
            opacity: "0",
            width: "0",
          },
        },

        blink: {
          "50%": {
            opacity: "0.6",
          },
        },

        "appear-right": {
          from: {
            transform: "translateX(100vw)",
          },
        },

        "appear-left": {
          from: {
            transform: "translateX(-100vw)",
          },
        },

        expand: {
          from: {
            "max-height": "0",
          },

          to: {
            "max-height": "200vh",
          },
        },

        "slide-background": {
          "50%": {
            "background-position": "100% 50%",
          },
        },
      },

      animation: {
        "fade-in": "3s ease 0s normal forwards 1 fade-in",

        scale: "scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1)",

        rotate: "slightly-rotate .5s ease-in-out 1",

        shine: "shine 1s ease-in-out 1",

        star: "fall var(--fall-duration) var(--fall-delay) linear infinite,tail-fade var(--tail-fade-duration) var(--fall-delay) ease-out infinite",

        blink: "blink 2s linear infinite",

        "appear-right": "1s ease-in-out 0s 1 alternate appear-right",
        "appear-left": "1s ease-in-out 0s 1 alternate appear-left",

        expand: "expand 1.5s 1 ease-out forwards",

        "slide-background": "slide-background 20s infinite ease-in-out both",
      },

      backgroundImage: {
        "radial-gradient":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [extraPlugin],
} satisfies Config;
