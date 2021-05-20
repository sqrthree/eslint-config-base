module.exports = {
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'import/prefer-default-export': 'off',
  },
}
