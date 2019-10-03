module.exports = {
  env: {
      es6: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
      ecmaVersion: 6,
      sourceType: 'module',
      ecmaFeatures: {
          jsx: true
      },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint'
  ],
  plugins: [
    '@typescript-eslint',
    'react'
  ],
  rules: {
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/explicit-member-accessibility': ['error', {
        accessibility: 'explicit',
        overrides: {
          constructors: 'no-public'
        }
      }],
      '@typescript-eslint/no-unused-vars': 'off',
      'array-bracket-spacing': ['error', 'always', { 'singleValue': false }],
      'arrow-spacing': 'error',
      'comma-dangle': ['error', 'always-multiline'],
      'comma-spacing': 'error',
      'computed-property-spacing': ['error', 'always'],
      'eol-last': ['error', 'always'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'jsx-quotes': ['error', 'prefer-double'],
      'key-spacing': 'error',
      'max-len': ['error', { 'code': 100 }],
      'no-console': 'error',
      'no-duplicate-imports': 'error',
      'no-multi-spaces': 'error',
      'no-multiple-empty-lines': 'error',
      'no-trailing-spaces': 'error',
      'no-undef': 'off',
      'object-curly-spacing': ['error', 'always'],
      'quotes': ['error', 'single'],
      'react/jsx-uses-react': 1,
      'semi': 'error',
      'sort-imports': 'error',
      'space-infix-ops': 'error',
      'space-before-function-paren': 'error',
      'space-in-parens': ['error', 'never'],
      'template-curly-spacing': ['error', 'always'],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
      },
    },
    {
      files: ['*.spec.*', '*.test.*', 'test.setup.*'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
      },
    },
  ],
}