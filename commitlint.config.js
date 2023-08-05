module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-case': [2, 'always', 'lower-case'],
    'scope-enum': [2, 'always', ['global', 'api-gateway']],
    'scope-empty': [2, 'never'],
  },
};
