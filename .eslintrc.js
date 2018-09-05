module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": ["babel"],
  "rules": {
    "babel/no-invalid-this": 1,
    "no-underscore-dangle": [
      "error",
      { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] },
    ],
  },
};
