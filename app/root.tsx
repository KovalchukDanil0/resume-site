import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError,
} from "@remix-run/react";
import { ReactNode } from "react";
import Loading from "./components/Loading";
import Navigation from "./components/Navigation";
import "./index.scss";

type LayoutType = { children: ReactNode };

export function Layout({ children }: Readonly<LayoutType>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <Meta />
        <Links />
      </head>
      <body suppressHydrationWarning>
        <Navigation />
        <main>{children}</main>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  const error = useRouteError();

  return (
    <div className="flex flex-col items-center justify-center gap-5">
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
    </div>
  );
}

export function HydrateFallback() {
  return <Loading />;
}
