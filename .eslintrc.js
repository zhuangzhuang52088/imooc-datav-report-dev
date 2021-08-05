module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-unused-vars": 1,
    "generator-star-spacing": 0,
    "vue/no-parsing-error": [2, { "x-invalid-end-tag": false }],
    "no-undef": "off",
    "no-multi-str": "error",
    "no-var": "off",
    "no-eval": 1,
    "handle-callback-err": [2, "^(err|error)$"],
    "prefer-const": 2,
    "object-shorthand": 2,
    eqeqeq: "off",
    indent: ["error", 4],
    //"prettier/prettier": "error",//https://github.com/prettier/eslint-plugin-prettier#options  配合 .prettierrc工作
  },
  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        jest: true,
      },
    },
  ],
}
