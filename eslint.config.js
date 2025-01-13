// @ts-check

import { default as eslint } from "@eslint/js";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

// @ts-expect-error no declaration file
import reactHooks from "eslint-plugin-react-hooks";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  { ignores: ["dist"] },
  {
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  },
);
