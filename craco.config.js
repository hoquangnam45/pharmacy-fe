const { CracoAliasPlugin } = require('react-app-alias');

// Allow alias path import for webpack build and jest unit test
// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: {},
    },
  ],
};
