module.exports = {
 env: {
  browser: true,
  es2021: true,
 },
 extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react/recommended', 'prettier'],
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
  ecmaVersion: 'latest',
  sourceType: 'module',
 },
 plugins: ['@typescript-eslint', 'react'],
 rules: {
  indent: ['error', 1],
  'linebreak-style': ['error', 'unix'],
  quotes: ['error', 'single'],
  semi: ['error', 'always'],
  'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  'no-trailing-spaces': ['error', { skipBlankLines: true }],
  'no-multi-spaces': ['error', { ignoreEOLComments: false }],
  'react/react-in-jsx-scope': 'off',
  'arrow-spacing': ['error', { before: true, after: true }],
  'space-before-blocks': ['error', 'always'],
  '@typescript-eslint/type-annotation-spacing': [
   'warn',
   {
    before: false,
    after: true,
   },
  ],
 },
};
