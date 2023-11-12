const webpack = require("webpack");
const path = require("path");
const package = require("./package.json");


//Build meta banner
const pluginConfig = {
  'name': package["pretty-name"],
  'author': package.author,
  'description': package.description,
  'version': package.version,
};
const meta = (() => {
  const lines = ["/**"];
  for (const key in pluginConfig) {
    lines.push(` * @${key} ${pluginConfig[key]}`);
  }
  lines.push(" */");
  return lines.join("\n");
})();


//Webpack config
module.exports = {
  mode: "development",
  target: "node",
  devtool: false,
  entry: package.main,
  output: {
    filename: "LaTeX.plugin.js",
    path: path.join(__dirname, "dist"),
    libraryTarget: "commonjs2",
    libraryExport: "default",
    compareBeforeEmit: false
  },
  resolve: {
    extensions: [".js"],
  },
  plugins: [
    new webpack.BannerPlugin({raw: true, banner: meta}),
  ]
};