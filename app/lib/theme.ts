export type ThemeType = "dark" | "light" | "system";

export const getTheme = () => localStorage.getItem("theme");

export async function saveTheme(theme: ThemeType) {
  localStorage.setItem("theme", theme);
  setTheme(theme);
}

export function setTheme(theme: ThemeType) {
  const documentClass = document.documentElement.classList;

  switch (theme) {
    case "dark":
      documentClass.add("dark");
      break;
    case "light":
      documentClass.remove("dark");
      break;
    case "system": {
      const { matches: preferDark } = matchMedia(
        "(prefers-color-scheme: dark)",
      );
      if (preferDark) {
        documentClass.add("dark");
      } else {
        documentClass.remove("dark");
      }

      break;
    }
  }
}
