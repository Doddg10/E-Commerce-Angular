module.exports = [
  {
    ignores: ["node_modules", "dist"],
  },
  {
    files: ["**/*.ts", "**/*.js"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": "warn",
      "semi": ["error", "always"],
      "quotes": ["error", "single"],
    },
  },
];
