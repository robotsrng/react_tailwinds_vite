// const path = require('path');
// const tailwindConfigPath = path.join(__dirname, '../tailwind.config.cjs'); // or your own config file
// require('storybook-tailwind-foundations/initialize.js').default(tailwindConfigPath);
const tsconfigPaths = require("vite-tsconfig-paths");

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  features: {
    storyStoreV7: true,
  },
  async viteFinal(config) {
    return {
      ...config,
      plugins: [...config.plugins, tsconfigPaths.default()],
    };
  },
};
