import { defineConfig } from "eslint/config";
import "eslint-config-next/index.js";

export default defineConfig({
  extends: [
    "plugin:@next/next/core-web-vitals",
    "plugin:@typescript-eslint/recommended",
  ],
  ignorePatterns: [".next/**", "out/**", "build/**", "next-env.d.ts"],
  rules: {
    "@typescript-eslint/no-unused-vars": 1,
    "@typescript-eslint/no-unused-expressions": 1,
  },
});
