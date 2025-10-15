import js from "@eslint/js";
import nextPlugin from "@next/eslint-plugin-next";
import eslintImport from "eslint-plugin-import";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  {
    ignores: ["dist", ".next", "postcss.config.cjs"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      sourceType: "module",
    },
    plugins: {
      "@next/next": nextPlugin,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      "simple-import-sort": simpleImportSort,
      import: eslintImport,
    },
    settings: {
      "import/resolver": {
        typescript: {
          project: "./tsconfig.json",
          alwaysTryTypes: true,
        },
      },
    },
    rules: {
      ...nextPlugin.configs["core-web-vitals"].rules,

      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],

      "import/extensions": [
        "error",
        "ignorePackages",
        {
          ts: "never",
          tsx: "never",
          js: "never",
          jsx: "never",
        },
      ],
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error",

      "no-multiple-empty-lines": ["error", { max: 1 }],
      indent: ["error", 2, { SwitchCase: 1 }],
      "no-mixed-spaces-and-tabs": "error",
      "space-before-blocks": ["error", "always"],
      "space-before-function-paren": ["error", "never"],
      "space-in-parens": ["error", "never"],
      "space-infix-ops": "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "array-bracket-spacing": ["error", "never"],
      quotes: ["error", "double", { avoidEscape: true }],
      "max-len": [
        "error",
        {
          code: 80,
          ignoreComments: true,
          ignoreTrailingComments: true,
          ignoreUrls: true,
          ignorePattern: "^(?!import).*",
        },
      ],
    },
  },
];
