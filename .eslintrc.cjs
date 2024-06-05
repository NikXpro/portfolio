module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      Node: {
        extensions: [".js", ".ts", ".jsx", ".tsx"],
        map: [
          ["@hooks", "./src/hooks"],
          ["@utils", "./src/utils"],
          ["@assets", "./src/assets"],
          ["@providers", "./src/providers"],
          ["@components", "./src/components"],
          ["@shared", "./src/components/shared"],
          ["@ui", "./src/components/ui"],
          ["@pages", "./src/pages"],
          ["@public", "./public/"],
          ["@", "./src"],
        ],
      },
    },
  },
};
