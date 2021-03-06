module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb-typescript',
    'airbnb-typescript',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:jest/recommended'
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jest'],
  env: {
    jest: true,
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    },
    project: './tsconfig.json',
    createDefaultProgram: true
  },
  settings: {
    react: {
      version: require('./package.json').dependencies.react
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    }
  },
  rules: {
    'max-len': ['error', { code: 80 }],
    indent: [
      2,
      2,
      {
        SwitchCase: 1
      }
    ],
    'comma-dangle': ['error', 'never'],
    'object-curly-newline': ['error', {
      'ObjectExpression': { 'consistent': true },
      'ObjectPattern': { 'multiline': true },
      // 'ImportDeclaration': 'never',
      'ExportDeclaration': { 'multiline': true, 'minProperties': 3 }
    }],
    'no-unused-vars': 2,
    'arrow-body-style': [2, 'as-needed'],
    'arrow-parens': ['error', 'always'],
    'jest/no-large-snapshots': ['warn', { 'maxSize': 16, 'inlineMaxSize': 8 }],
    'jsx-a11y/label-has-associated-control': 0,
    // 'import/no-named-as-default': 0,
    'import/no-extraneous-dependencies': ['error', { 'devDependencies': true }],
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'never', { 'svg': 'always' }],
    // 'react/jsx-closing-bracket-location': [1, 'line-aligned'],
    'react/jsx-uses-vars': 2,
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/sort-comp': 0,
    'react/destructuring-assignment': 0,
    'react/jsx-fragments': [2, 'element'],
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true
      }
    ]
  }
};
