import type { Config } from "tailwindcss";
import { PluginCreator } from "tailwindcss/types/config";

const extraPlugin: PluginCreator = ({
  addUtilities,
  addComponents,
  matchUtilities,
  theme,
}) => {
  addComponents({
    ".button": {
      color: "white",
      backgroundColor: theme("backgroundColor.cyan.800"),
      fontWeight: theme("fontWeight.bold"),
      padding: ` ${theme("padding.2")} ${theme("padding.10")}`,
      borderRadius: theme("borderRadius.3xl"),

      "&:hover": {
        backgroundColor: theme("backgroundColor.cyan.900"),
      },

      "&:is(.dark *)": {
        backgroundColor: theme("backgroundColor.cyan.900"),

        "&:hover": {
          backgroundColor: theme("backgroundColor.cyan.800"),
        },
      },
    },
  });

  matchUtilities(
    {
      "animate-delay": (value) => ({
        animationDelay: value,
      }),

      "animate-duration": (value) => ({
        animationDuration: value,
      }),
    },
    { values: theme("secondsMap") },
  );

  addUtilities({
    ".animate-paused": {
      animationPlayState: "paused",
    },

    ".animate-running": {
      animationPlayState: "running",
    },

    ".animate-cubic-bezier": {
      animationTimingFunction: "cubic-bezier(0.11, 0, 0.5, 0)",
    },

    ".animate-once": {
      animationIterationCount: "1",
    },

    ".animate-direction-reverse": {
      animationDirection: "reverse",
    },

    ".animate-direction-alternate-reverse": {
      animationDirection: "alternate-reverse",
    },
  });
};

export default {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    secondsMap: {
      0: "0s",
      50: ".050s",
      75: ".075s",
      100: ".1s",
      150: ".15s",
      200: ".2s",
      300: ".3s",
      400: ".4s",
      500: ".5s",
      700: ".7s",
      1000: "1s",
    },

    extend: {
      keyframes: {
        fadeIn: {
          from: { opacity: "0", userSelect: "none" },
          to: { opacity: "1", filter: "blur(0)" },
        },

        scale: {
          to: {
            transform: "scale(1)",
          },
        },

        slightlyRotate: {
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

        tailFade: {
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

        appearRight: {
          from: {
            transform: "translateX(100vw)",
          },
        },

        appearLeft: {
          from: {
            transform: "translateX(-100vw)",
          },
        },

        slideBackground: {
          "50%": {
            backgroundPosition: "100% 50%",
          },
        },
      },

      animation: {
        "fade-in": "3s ease 0s normal forwards 1 fadeIn",

        scale: "scale 3s forwards cubic-bezier(0.5, 1, 0.89, 1)",

        rotate: "slightlyRotate .5s ease-in-out 1",

        shine: "shine 1s ease-in-out 1",

        star: "fall var(--fall-duration) var(--fall-delay) linear infinite,tailFade var(--tail-fade-duration) var(--fall-delay) ease-out infinite",

        blink: "blink 2s linear infinite",

        "appear-right": "1s ease-in-out 0s 1 alternate appearRight",
        "appear-left": "1s ease-in-out 0s 1 alternate appearLeft",

        "slide-background": "slideBackground 20s infinite ease-in-out both",
      },

      backgroundImage: {
        "radial-gradient":
          "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
      },
    },
  },

  plugins: [extraPlugin],
} satisfies Config;
