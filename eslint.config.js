const js = require("@eslint/js");
const globals = require("globals");

module.exports = [
  js.configs.recommended,
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: { ...globals.browser }
    },
    rules: {
      semi: ["error", "always"],
      "no-unused-vars": "error",
      quotes: ["error", "double"]
    }
  },
  {
    // El archivo de configuración corre en Node, no en el navegador
    files: ["eslint.config.js"],
    languageOptions: {
      sourceType: "commonjs",
      globals: { ...globals.node }
    }
  }
];