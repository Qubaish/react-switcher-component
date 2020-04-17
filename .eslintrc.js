module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "react/jsx-filename-extension": [
          1,
          {
            "extensions": [".js", ".jsx"]
          }
        ],
        "react/jsx-indent" : ["error", 4],
        "react/prop-types": 0,
        "no-underscore-dangle": 0,
        "semi": "error"
    }
};