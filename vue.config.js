// vue.config.js
const webpack = require('webpack');
const packageJson = require('./package.json');

module.exports = {
  configureWebpack: {
    entry: {
      app: "/src/frontend/main.js",
    },
    resolve: {
      alias: {
        "@": "/src/frontend",
        SHARE: "/src/shared",
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env": {
          VUE_APP_VERSION: JSON.stringify(packageJson.version),
        },
      }),
    ],
  },
  pluginOptions: {
    electronBuilder: {
      // preload: "src/preload.js",
      mainProcessWatch: ["src/backend"],
      nodeIntegration: true,
      chainWebpackMainProcess: (config) => {
        config.resolve.alias.set("@", "/src/backend")
        config.resolve.alias.set("SHARE", "/src/shared")
        config.resolve.alias.set("PYTHON", "/src/python")
        config.module
          .rule("js")
          .test(/\.(js)$/)
          .exclude.add((filepath) => {
            return filepath.includes("node_modules")
          })
          .end()
          .use("babel-loader")
          .loader("babel-loader")
          .end()
        config.module
          .rule("js-all")
          .test(/\.(cjs|mjs)$/)
          .type("javascript/auto")
          .use("babel-loader")
          .loader("babel-loader")
          .end()
      },
    },
  },
  devServer: {
    port: 8080,
  },
}
