module.exports = {
  env: {
      es6: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
      ecmaVersion: 6,
      sourceType: "module",
      ecmaFeatures: {
          jsx: true
      },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "prettier/@typescript-eslint"
  ],
  plugins: [
    "@typescript-eslint",
    "react"
  ],
  rules: {
      // indent: ["error", 2],
      "@typescript-eslint/ban-ts-ignore": "off",
      "@typescript-eslint/no-explicit-any": "error",
      "@typescript-eslint/explicit-function-return-type": "error",
      "@typescript-eslint/explicit-member-accessibility": ["error", {
        accessibility: "explicit",
        overrides: {
          constructors: "no-public"
        }
      }],
      "array-bracket-spacing": ["error", "always", { "singleValue": false }],
      "arrow-spacing": "error",
      "comma-spacing": "error",
      "computed-property-spacing": ["error", "always"],
      "key-spacing": "error",
      "no-duplicate-imports": "error",
      "no-multi-spaces": "error",
      "no-undef": "off",
      "object-curly-spacing": ["error", "always"],
      "react/jsx-uses-react": 1,
      "sort-imports": "error",
      "space-before-function-paren": "error",
      "template-curly-spacing": ["error", "always"],
      "@typescript-eslint/no-unused-vars": "off",
  }
}