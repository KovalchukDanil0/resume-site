import { ComponentProps } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { Theme, useTheme } from "remix-themes";

class EnumX {
  static of<T extends object>(e: T) {
    const values = Object.values(e);
    return {
      next: <K extends keyof T>(v: T[K]) =>
        values[(values.indexOf(v) + 1) % values.length],
    };
  }
}

export function ThemeToggle(props: ComponentProps<"button">) {
  const [theme, setTheme] = useTheme();

  return (
    <button
      {...props}
      className="size-6 text-black dark:text-white"
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
