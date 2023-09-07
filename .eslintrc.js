module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['standard-with-typescript', 'plugin:react/recommended'],
    overrides: [
        {
            env: {
                node: true
            },
            files: ['.eslintrc.{js,cjs}'],
            parserOptions: {
                sourceType: 'script'
            }
        }
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'react/react-in-jsx-scope': 'off',
        'comma-dangle': 'off',
        '@typescript-eslint/comma-dangle': 'error',
        '@typescript-eslint/consistent-type-imports': 'warn'
    }
}
