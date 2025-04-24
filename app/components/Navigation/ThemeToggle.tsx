import type { ComponentProps } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Theme, useTheme } from "remix-themes";
import { twMerge } from "tailwind-merge";
import { useFirstRender } from "~/hooks";
import { EnumX } from "~/lib/utils";

type Props = ComponentProps<"button">;

export default function ThemeToggle(props: Readonly<Props>) {
  const [theme, setTheme] = useTheme();

  const firstRender = useFirstRender();

  return (
    <button
      {...props}
      onClick={() => setTheme(EnumX(Theme, theme ?? Theme.DARK))}
      className="size-6 transition-transform"
      aria-label="Theme Toggle"
    >
      {theme === Theme.DARK ? (
        <div className="duration-300 hover:rotate-y-180">
          <FaMoon
            className={twMerge(
              "size-full text-slate-600",
              !firstRender && "animate-rotate",
            )}
            aria-label="Toggle Dark Theme"
          />
        </div>
      ) : (
        <FaSun
          className={twMerge(
            "size-full text-orange-700 hover:rotate-90",
            !firstRender && "animate-shine",
          )}
          aria-label="Toggle Light Theme"
        />
      )}
    </button>
  );
}
