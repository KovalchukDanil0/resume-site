import "@fontsource/open-sans";
import type { LoaderFunctionArgs } from "@remix-run/node";
import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
  useRouteLoaderData,
} from "@remix-run/react";
import type { PropsWithChildren } from "react";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { twMerge } from "tailwind-merge";
import { themeSessionResolver } from "~/.server/sessions";
import { Loading, Navigation, ParticleBackground } from "~/components";
import "~/styles/main.css";

interface AppBodyProps extends PropsWithChildren {
  theme: Theme;
}

export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme() ?? Theme.DARK,
  };
}

function AppBody({ theme, children }: Readonly<AppBodyProps>) {
  const [currentTheme] = useTheme();

  return (
    <html
      className={twMerge(
        "min-h-full overflow-x-hidden",
        currentTheme === Theme.DARK ? "dark" : "",
      )}
      lang="en"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(theme)} />
        <Links />
      </head>
      <body
        className="size-auto bg-slate-300 dark:bg-slate-900"
        suppressHydrationWarning
      >
        <Navigation />

        <ParticleBackground />

        <main className="relative z-10 size-full p-8 md:p-20">{children}</main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: Readonly<PropsWithChildren>) {
  const { theme } = useRouteLoaderData<typeof loader>("root") ?? {
    theme: Theme.DARK,
  };

  return (
    <ThemeProvider specifiedTheme={theme} themeAction="/action/set-theme">
      <AppBody theme={theme}>{children}</AppBody>
    </ThemeProvider>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  return isRouteErrorResponse(error) ? (
    <div className="flex flex-col items-center justify-center gap-5 text-center">
      <h1 className="text-red-600">
        {error.status} {error.statusText}
      </h1>
      <p>{error.data}</p>

      <img
        className="size-64 object-cover md:size-96"
        alt="Cat Error"
        src="https://cataas.com/cat/gif"
      />
    </div>
  ) : (
    <h1>Unknown Error</h1>
  );
}

export function HydrateFallback() {
  return <Loading />;
}

export default function App() {
  return <Outlet />;
}
