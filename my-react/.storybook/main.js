// Storybookの設定（CommonJS形式）
module.exports = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-create-react-app",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-webpack5", // React Webpack 5を使用
    options: {},
  },
  docs: {
    autodocs: "tag", // 自動ドキュメントをタグで管理
  },
  staticDirs: ["../public"], // 静的ファイルの配置
  core: {
    builder: 'webpack5', // Webpack5を使用
  },
};