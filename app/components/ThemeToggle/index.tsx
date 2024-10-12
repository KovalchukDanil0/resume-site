import { ComponentProps } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Theme, useTheme } from "remix-themes";
import { twMerge } from "tailwind-merge";
import useFirstRender from "~/hooks/useFirstRender";
import { EnumX } from "~/lib/utils";

export function ThemeToggle(props: ComponentProps<"button">) {
  const [theme, setTheme] = useTheme();

  const firstRender = useFirstRender();

  return (
    <button
      {...props}
      className="size-6 text-orange-700 dark:text-slate-600"
      onClick={() => setTheme(EnumX.of(Theme).next(theme ?? Theme.DARK))}
    >
      {theme === Theme.LIGHT ? (
        <FaSun
          className={twMerge("size-full", !firstRender && "animate-shine")}
        />
      ) : (
        <FaMoon
          className={twMerge("size-full", !firstRender && "animate-rotate")}
        />
      )}
    </button>
  );
}
