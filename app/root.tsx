import { LoaderFunctionArgs } from "@remix-run/node";
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
import { ComponentProps, ReactElement, ReactNode } from "react";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";
import { themeSessionResolver } from "~/.server/sessions";
import Loading from "~/components/Loading";
import Navigation from "~/components/Navigation";
import "./index.scss";

type Props = ComponentProps<"body">;

type LoaderProps = { theme: Theme | null };

export async function loader({
  request,
}: LoaderFunctionArgs): Promise<LoaderProps> {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

type LayoutProps = { children: ReactNode };

export function Layout({ children }: Readonly<LayoutProps>): ReactElement {
  const data = useRouteLoaderData<typeof loader>("root");

  return (
    <ThemeProvider
      specifiedTheme={data?.theme ?? Theme.DARK}
      themeAction="/action/set-theme"
    >
      {children}
    </ThemeProvider>
  );
}

export default function App(): ReactElement {
  return (
    <AppBody>
      <Navigation />

      <main>
        <Outlet />
      </main>
      <ScrollRestoration />
      <Scripts />
    </AppBody>
  );
}

function AppBody({ children, ...props }: Readonly<Props>): ReactElement {
  const data = useRouteLoaderData<typeof loader>("root");
  const [theme] = useTheme();

  return (
    <html lang="en" className={theme === Theme.DARK ? "dark" : ""}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
        <Meta />
        <PreventFlashOnWrongTheme ssrTheme={Boolean(data?.theme)} />
        <Links />
      </head>
      <body {...props} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

export function ErrorBoundary(): ReactElement {
  const error = useRouteError();

  return (
    <AppBody className="flex flex-col items-center justify-center gap-5 text-center">
      {isRouteErrorResponse(error) ? (
        <>
          <h1 className="text-red-600">
            {error.status} {error.statusText}
          </h1>
          <p>{error.data}</p>
        </>
      ) : (
        <h1>Unknown Error</h1>
      )}

      <img
        className="size-64 object-cover md:size-96"
        alt="Cat Error"
        src="https://cataas.com/cat/gif"
      />
    </AppBody>
  );
}

export function HydrateFallback(): ReactElement {
  return <Loading />;
}
