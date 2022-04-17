const path = require(`path`);
const alias = require(`./aliases`);

const SRC = `./src`;
const aliases = alias(SRC);

const resolvedAliases = Object.fromEntries(
  Object.entries(aliases).map(([key, value]) => [key, path.resolve(__dirname, value)])
);

module.exports = {
  style: {
    postcssOptions: {},
  },
  webpack: {
    alias: resolvedAliases,
    configure: {
      ignoreWarnings: [{ message: /Failed to parse source map/ }],
    },
  },
};
