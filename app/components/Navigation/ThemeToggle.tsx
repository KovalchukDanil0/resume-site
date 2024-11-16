import { AnimationEvent, ComponentProps, ReactElement } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Theme, useTheme } from "remix-themes";
import { twMerge } from "tailwind-merge";
import useFirstRender from "~/hooks/useFirstRender";
import { EnumX } from "~/lib/utils";

type Props = ComponentProps<"button">;

const gg = (ev: AnimationEvent<SVGElement>) =>
  ev.currentTarget.classList.toggle("hover:rotate-y-180");

export default function ThemeToggle(props: Readonly<Props>): ReactElement {
  const [theme, setTheme] = useTheme();

  const firstRender = useFirstRender();

  return (
    <button
      {...props}
      className="size-6 text-orange-700 dark:text-slate-600"
      onClick={() => setTheme(EnumX(Theme, theme ?? Theme.DARK))}
    >
      {theme === Theme.LIGHT ? (
        <FaSun
          className={twMerge(
            "size-full transition-transform hover:rotate-90",
            !firstRender && "animate-shine",
          )}
        />
      ) : (
        <div className="hover:rotate-y-180 transition-transform duration-300">
          <FaMoon
            className={twMerge("size-full", !firstRender && "animate-rotate")}
          />
        </div>
      )}
    </button>
  );
}
