module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',  
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    quotes: ["error", "double"],  // Use double quotes.
    semi: ["error", "always"],  // Always add a semicolon at the end statements.
    indent: ["error", 2],  // Indentation is two spaces.
    "no-console": "error"  // Avoid using methods on `console` in the code.
  }
}
