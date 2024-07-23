module.exports = {
    parser: 'babel-eslint',
    extends: [
      'eslint:recommended',
      'plugin:react/recommended',
      'plugin:prettier/recommended'
    ],
    plugins: ['prettier'], // Add this line
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true
    },
    rules: {
      // Possible Errors
      'no-console': 'warn', // Warn on console.log usage
      'no-debugger': 'error', // Disallow the use of debugger
  
      // Best Practices
      'eqeqeq': ['error', 'always'], // Enforce the use of === and !==
      'curly': 'error', // Require following curly brace conventions
  
      // Variables
      'no-unused-vars': 'warn', // Warn on unused variables
      'no-var': 'error', // Require let or const instead of var
      'prefer-const': 'error', // Prefer const over let when variable is not reassigned
  
      // Stylistic Issues
      'indent': ['error', 2], // Enforce consistent indentation (2 spaces)
      'quotes': ['error', 'single'], // Enforce single quotes
      'semi': ['error', 'always'], // Require semicolons
  
      // React Specific
      'react/prop-types': 'off', // Disable prop-types as we are using TypeScript
      'react/jsx-uses-react': 'off', // React 17+ doesn't need React in scope
      'react/react-in-jsx-scope': 'off', // React 17+ doesn't need React in scope
    },
    settings: {
      react: {
        version: 'detect'
      }
    }
  };
  