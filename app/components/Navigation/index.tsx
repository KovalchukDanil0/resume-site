import { ComponentProps } from "react";
import { FaAddressBook } from "react-icons/fa6";
import { Link, ThemeToggle } from "~/components";
import SecondaryNavigation from "./SecondaryNavigation";

type Props = ComponentProps<"nav">;

export default function Navigation(props: Readonly<Props>) {
  return (
    <nav
      {...props}
      className="sticky top-0 z-50 flex flex-row items-center justify-end gap-5 bg-inherit p-6 opacity-75 backdrop-blur-xl backdrop-filter"
    >
      <Link to="/" className="mr-auto size-6">
        <FaAddressBook className="size-full text-black dark:text-white" />
      </Link>

      <SecondaryNavigation />

      <ThemeToggle value="dark" />
    </nav>
  );
}
