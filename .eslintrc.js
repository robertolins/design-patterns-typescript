module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/no-floating-promises": ["error"],
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "ignoreRestSiblings": true,
        "varsIgnorePattern": "^_",
        "argsIgnorePattern": "^_"
      }
    ],
    "@typescript-eslint/default-param-last": [
      "error"
    ],
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none"
        }
      }
    ],
    "default-param-last": "error",
    "quotes": [
      "error",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "prefer-spread": "error",
    "no-class-assign": "off",
    "no-shadow": "error",
    "no-nested-ternary": "error",
    "no-redeclare": "error",
    "no-case-declarations": "off",
    "no-unused-expressions": 0,
    "require-await": "error",
    "eqeqeq": "error",
    "keyword-spacing": "error",
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "@typescript-eslint/no-explicit-any": "warn"
  },
};
