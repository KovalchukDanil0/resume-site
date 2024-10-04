import { useLocation } from "@remix-run/react";
import { ComponentProps } from "react";
import { ThemeToggle } from "../ThemeToggle";

export default function Navigation({
  ...props
}: Readonly<ComponentProps<"nav">>) {
  const { pathname } = useLocation();

  return (
    <nav
      {...props}
      className="m-6 flex flex-row items-center justify-end gap-5"
    >
      <a href="/" className="mr-auto">
        Home
      </a>

      {pathname !== "/about" && <a href="about">About</a>}
      {pathname !== "/projects" && <a href="projects">Projects</a>}
      {pathname !== "/contact" && <a href="contact">Contact</a>}

      <ThemeToggle />
    </nav>
  );
}
