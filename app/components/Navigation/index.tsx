import { useLocation } from "@remix-run/react";
import { ComponentProps } from "react";
import Link from "~/components/Link";
import { ThemeToggle } from "~/components/ThemeToggle";

export default function Navigation({
  ...props
}: Readonly<ComponentProps<"nav">>) {
  const { pathname } = useLocation();

  return (
    <nav
      {...props}
      className="sticky top-0 z-50 flex flex-row items-center justify-end gap-5 p-6 opacity-75 bg-inherit backdrop-blur-xl backdrop-filter"
    >
      <Link href="/" className="mr-auto">
        Home
      </Link>

      {pathname !== "/about" && <Link href="about">About</Link>}
      {pathname !== "/projects" && <Link href="projects">Projects</Link>}
      {pathname !== "/contact" && <Link href="contact">Contact</Link>}

      <ThemeToggle value="dark" />
    </nav>
  );
}
