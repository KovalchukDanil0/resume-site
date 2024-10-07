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
      className="size-6 text-slate-600 dark:text-orange-300"
      onClick={() => setTheme(EnumX.of(Theme).next(theme ?? Theme.LIGHT))}
    >
      {theme === Theme.LIGHT ? (
        <FaMoon
          className={twMerge(
            "size-full",
            !firstRender && "animate-slightly-rotate",
          )}
        />
      ) : (
        <FaSun
          className={twMerge("size-full", !firstRender && "animate-shine")}
        />
      )}
    </button>
  );
}
