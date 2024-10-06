import { ComponentProps } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Theme, useTheme } from "remix-themes";
import { EnumX } from "~/lib/utils";

export function ThemeToggle(props: ComponentProps<"button">) {
  const [theme, setTheme] = useTheme();

  return (
    <button
      {...props}
      className="size-6 text-slate-600 dark:text-orange-300"
      onClick={() => setTheme(EnumX.of(Theme).next(theme ?? Theme.LIGHT))}
    >
      {theme === Theme.LIGHT ? (
        <FaMoon className="size-full" />
      ) : (
        <FaSun className="size-full" />
      )}
    </button>
  );
}
