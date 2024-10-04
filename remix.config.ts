import { AppConfig } from "@remix-run/dev";

export default {
  ignoredRouteFiles: ["**/*.{scss,css}"],
  appDirectory: "app",
} satisfies AppConfig;
