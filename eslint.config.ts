import typescript from "@typescript-eslint/eslint-plugin";
import playwright from "eslint-plugin-playwright";
const typescriptParser = require("@typescript-eslint/parser");

export default [
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": typescript,
      "playwright": playwright
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        project: ["tsconfig.json"],
        ecmaVersion: "latest",
        sourceType: "module"
      }
    },
    rules: {
      ...typescript.configs.recommended.rules,
      ...playwright.configs['flat/recommended'].rules,
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-floating-promises": "error",
      "@typescript-eslint/explicit-function-return-type": "error"
    }
  }
];