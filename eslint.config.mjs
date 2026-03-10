import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
  // This helps prevent circular references by providing the base JS config
  recommendedConfig: js.configs.recommended,
});

const eslintConfig = [
  // 1. Core JS Recommended
  js.configs.recommended,

  // 2. Next.js & TS Compat
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // 3. Custom Rules & Ignores
  {
    rules: {
      // Add any specific rule overrides here if needed
      "@typescript-eslint/no-explicit-any": "off", // Example: allows 'any'
    },
  },
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/out/**",
      "**/build/**",
      "next-env.d.ts",
      "**/sanity-js-sdk/**" // Common source of circular issues in Sanity projects
    ],
  },
];

export default eslintConfig;