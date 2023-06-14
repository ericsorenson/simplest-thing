module.exports = {
    "root": true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'prettier',
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": { "project": ["./tsconfig.json"] },
    "plugins": [
        "@typescript-eslint", 'react', 'prettier',
    ],
    "rules": {
    },
    "ignorePatterns": [],
    settings: {
        react: {
          version: 'detect',
        },
      },
}
