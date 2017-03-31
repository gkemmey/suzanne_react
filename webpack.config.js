const webpack = require("webpack");

let config = {
  entry: {
    babel: "babel-polyfill",
    application: __dirname + "/javascripts/index.jsx"
  },

  output: {
    path: __dirname + "/dist",
    filename: "[name]_bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: __dirname + "/javascripts",
        loader: "babel",
        query: {
          presets: ["es2015", "react", "stage-2"]
        }
      },
      {
        // handle stylesheets required from node packages
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};

module.exports = config;
