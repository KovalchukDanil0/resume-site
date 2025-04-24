import { createCookieSessionStorage } from "@remix-run/node";
import { createThemeSessionResolver } from "remix-themes";

const secret = import.meta.env.SESSION_SECRET;
if (!secret) {
  console.warn("cookies in unsecure mode!!!");
}

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__remix-themes",
    domain: import.meta.env.VITE_DOMAIN,
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secrets: [secret ?? ""],
    secure: true,
  },
});

console.log(import.meta.env.VITE_DOMAIN);

export const themeSessionResolver = createThemeSessionResolver(sessionStorage);
