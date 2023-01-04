const prettierConfig = `
{
    "singleQuote": true,
    "trailingComma": "all",
    "tabWidth": 2
  }
`;

const npmrcConfig = `
@total-services:registry=https://tgits-code.pkgs.visualstudio.com/total-services/_packaging/tms/npm/registry/
registry=https://registry.npmjs.org/
always-auth=true
`;

const eslintConfig = `module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: 'tsconfig.json',
      sourceType: 'module',
    },
    plugins: ['@typescript-eslint/eslint-plugin'],
    extends: [
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
    ],
    root: true,
    env: {
      node: true,
      jest: true,
    },
    ignorePatterns: ['.eslintrc.js'],
    rules: {
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/no-shadow': ['error'],
      'class-methods-use-this': 'off',
      'no-console': 'error',
      'no-restricted-syntax': [
        'error',
        'ForInStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'import/prefer-default-export': 'off',
      curly: 'error',
    },
  };
`;

const editorConfig = `
# Editor configuration, see http://editorconfig.org
root = true

[*]
charset = utf-8
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true

[*.md]
max_line_length = off
trim_trailing_whitespace = false
`;

module.exports = { editorConfig, eslintConfig, npmrcConfig, prettierConfig };
