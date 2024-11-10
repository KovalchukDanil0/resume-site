import { useLocation } from "@remix-run/react";
import { ComponentProps } from "react";
import { Link, ThemeToggle } from "~/components";

type Props = ComponentProps<"nav">;

export default function Navigation(props: Readonly<Props>) {
  const { pathname } = useLocation();

  return (
    <nav
      {...props}
      className="sticky top-0 z-50 flex flex-row items-center justify-end gap-5 bg-inherit p-6 opacity-75 backdrop-blur-xl backdrop-filter"
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
