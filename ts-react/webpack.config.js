module.exports = {
  mode: "development",

  entry: "./src/index.tsx",

  module: {
    rules: [
      {
        // .ts or .tsx
        test: /\.tsx?$/,
        use: "ts-loader"
      }
    ]
  },

  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  devServer: {
    port: 3000,
    contentBase: path.join(__dirname, 'public'),
    openPage: "index.html",
    watchContentBase: true,
    // ブラウザを自動で開く
    open: true,
  }
};
