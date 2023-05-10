module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended", // Checks rules of Hooks
  ],
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: ["plugin:@typescript-eslint/recommended"],
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parserOptions: {
      project: "./tsconfig.json",
    },
  },
  plugins: ["react", "@typescript-eslint", "simple-import-sort", "autofix"], // autofix is a custom plugin that allows for auto fixing unused variables
  rules: {
    "@typescript-eslint/naming-convention": [
      "error",
      { selector: "default", format: ["camelCase"] },
    ],
    "@typescript-eslint/strict-boolean-expressions": "error",
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "as-needed"],
    "no-console": "error", // disallow console.log in production
    "react/self-closing-comp": ["error", { component: true, html: true }],
    "no-empty-function": "off",
    "no-empty-pattern": "error",
    "brace-style": ["error", "1tbs", { allowSingleLine: true }],
    "autofix/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_", // allow unused args that start with _
        ignoreRestSiblings: true, // allow unused rest siblings
        destructuredArrayIgnorePattern: "^_", // allow unused destructured args that start with _
      },
    ],
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        prefer: "type-imports",
      },
    ],
    "prettier/prettier": "error",
  },
};
