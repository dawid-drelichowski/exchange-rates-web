module.exports = {
  globals: {
    server: true,
  },
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    semi: [2, 'never'],
    'object-curly-spacing': [2, 'never']
  }
};
