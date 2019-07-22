module.exports = {
  "parser": "babel-eslint",
  "extends": "standard",
  "rules": {
    "semi": ["error", "always"],
    "comma-dangle": ["error", "always-multiline"],
    "indent": ["error", 2],
    "no-unused-vars": ["off", { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }],
    "camelcase": [0, { "properties": "never" }]
  },
  "env": {
    "browser": true,
    "node": true
  },
  "parserOptions": {
    "ecmaVersion": "2018",
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "modules": true
    }
  },
  env: {
    browser: true,
    es6: true,
  }
};