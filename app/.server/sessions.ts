import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const secret = process.env.SESSION_SECRET;
if (!secret) {
  console.warn("cookies in unsecure mode!!!");
}

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    // domain: 'remix.run',
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: [secret ?? ""],
    // secure: true,
  },
});

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);