import { ComponentProps, ReactElement } from "react";
import HomeIcon from "./HomeIcon";
import SecondaryNavigation from "./SecondaryNavigation";
import ThemeToggle from "./ThemeToggle";

type Props = ComponentProps<"nav">;

export default function Navigation(props: Readonly<Props>): ReactElement {
  return (
    <nav
      {...props}
      className="sticky top-0 z-50 flex flex-row items-center justify-end gap-5 bg-inherit p-6 opacity-75 backdrop-blur-xl backdrop-filter"
    >
      <HomeIcon />
      <SecondaryNavigation />
      <ThemeToggle value="dark" />
    </nav>
  );
}
