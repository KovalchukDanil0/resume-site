import { themeSessionResolver } from "@server/sessions";
import { createThemeAction } from "remix-themes";

export const action = createThemeAction(themeSessionResolver);
