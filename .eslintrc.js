module.exports = {
  env: {
    node: true,
    es2021: true,
  },
  extends: ["airbnb"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: "module",
  },
  plugins: [],
  rules: {
    "linebreak-style": ["LF"],
  },
};
