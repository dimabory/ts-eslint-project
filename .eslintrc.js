module.exports = {
  'env':           {
    'node': true,
    'es6':  true
  },
  'parser':        '@typescript-eslint/parser',
  'extends':       [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  'parserOptions': {
    'ecmaVersion': 2015,
    'sourceType':  'module',
    'project':     './tsconfig.json'
  },
  'rules':         {}
}
