module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'standard',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended', 
    'plugin:@typescript-eslint/recommended-requiring-type-checking',    
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: __dirname,  
    project: ['./tsconfig.json'],
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    quotes: "off",  // For TypeScript
    "@typescript-eslint/quotes": ["error", "double"],  // Use double quotes.
    semi: ["error", "always"],  // Always add a semicolon at the end statements.
    indent: ["error", 2],  // Indentation is two spaces.
    "no-console": "error"  // Avoid using methods on `console` in the code.
  }
}
