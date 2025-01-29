import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,ts}"]},
  {files: ["**/*.js"], languageOptions: {sourceType: "commonjs"}},
  {languageOptions: { globals: globals.node }},
  {
    rules: {
      "no-unused-vars": "error",
      "@typescript-eslint/explicit-function-return-type": "error"
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];