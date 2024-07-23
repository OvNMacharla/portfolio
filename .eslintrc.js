module.exports = {
  parser: '@babel/eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended'
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parserOptions: {
    requireConfigFile: false, // This line tells babel-eslint to not require a babel config file
    babelOptions: {
      presets: ['@babel/preset-env', '@babel/preset-react']
    }
  },
  rules: {
    'no-console': 'warn',
    'no-debugger': 'error',
    'eqeqeq': ['error', 'always'],
    'curly': 'error',
    'no-unused-vars': 'warn',
    'no-var': 'error',
    'prefer-const': 'error',
    'indent': ['error', 2],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
