module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: '20',
    sourceType: 'module',
    project: 'tsconfig.json',
    extraFileExtensions: ['.css'],
  },
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'linebreak-style': 0,
    'react/react-in-jsx-scope': 0,
    'import/prefer-default-export': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'react/require-default-props': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
  ignorePatterns: ['.eslintrc.cjs', 'vite.config.ts'],
};
