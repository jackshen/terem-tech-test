import eslint from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintPluginImportX from "eslint-plugin-import-x";
import eslintPluginPerfectionist from "eslint-plugin-perfectionist";
import tseslint from "typescript-eslint";

export default [
  {
    ignores: ["node_modules/", "dist/"],
  },
  {
    files: ["**/*.ts", "./eslint.config.mjs"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  eslintPluginPerfectionist.configs["recommended-alphabetical"],
  {
    plugins: {
      import: eslintPluginImportX,
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        {
          prefer: "type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": "warn",
      "id-denylist": ["warn", "cb", "e", "err"],
      "import/first": "warn",
      "no-undef": "off",
      "no-useless-escape": "off",
      "perfectionist/sort-classes": [
        "warn",
        {
          partitionByComment: "PARTITION:",
        },
      ],
      "perfectionist/sort-imports": [
        "warn",
        {
          customGroups: {
            type: {},
            value: {},
          },
          environment: "node",
          groups: [
            ["builtin", "builtin-type", "external", "external-type"],
            ["internal", "internal-type"],
            ["index", "index-type", "parent", "parent-type", "sibling", "sibling-type", "style"],
            "object",
            ["side-effect", "side-effect-style"],
            "unknown",
          ],
          ignoreCase: true,
          internalPattern: ["^(@rouge|src).+"],
          newlinesBetween: "always",
          order: "asc",
          partitionByComment: false,
          partitionByNewLine: false,
          specialCharacters: "keep",
          type: "alphabetical",
        },
      ],
      "perfectionist/sort-modules": [
        "warn",
        {
          groups: [
            "declare-enum",
            "export-enum",
            "enum",
            ["declare-interface", "declare-type"],
            ["interface", "type"],
            ["export-interface", "export-type"],
            "declare-class",
            "class",
            "export-class",
            "declare-function",
            "export-function",
            "function",
          ],
          partitionByComment: "PARTITION:",
        },
      ],
      "perfectionist/sort-union-types": [
        "warn",
        {
          groups: ["unknown", "nullish"],
        },
      ],
    },
  },
];
