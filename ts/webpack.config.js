module.exports = {
  // ソースマップ有効(productionで無効)
  mode: "development",

  entry: "./src/index.ts",

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  // importの際に.tsを見るように
  resolve: {
    extensions: [".ts"]
  }
};
