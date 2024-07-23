module.exports = {
    parser: 'babel-eslint',
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended', // Add this line
    ],
    plugins: ['prettier'], // Add this line
    env: {
        browser: true,
        es6: true,
    },
    rules: {
        'prettier/prettier': 'error', // Add this line
        // Customize your rules here
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
