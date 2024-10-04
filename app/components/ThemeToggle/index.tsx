import { saveTheme } from "~/lib/theme";

export function ThemeToggle() {
  return (
    <ul>
      <li>
        <button>
          <p className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <p className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </li>
      <ul>
        <button onClick={() => saveTheme("light")}>Light</button>
        <button onClick={() => saveTheme("dark")}>Dark</button>
        <button onClick={() => saveTheme("system")}>System</button>
      </ul>
    </ul>
  );
}
