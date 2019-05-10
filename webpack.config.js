const path = require("path");
const webpack = require("webpack");

const baseConfig = {
  entry: "./app/index.tsx", // this is the point from which webpack starts building our dependency graph
  mode: "development", // you can set the mode to development, production, or none — this will set some default optimizations for your build: default configs here — https://webpack.js.org/configuration/mode/
  module: {
    // this section is where you tell webpack how to deal with different types of files — out of the box, it only understands JS
    rules: [
      {
        test: /\.(ts|tsx)$/, // which files should this loader / these loaders care about?
        loader: "awesome-typescript-loader", // what loader?
        exclude: /node_modules/ // where not to look
      },
      {
        test: /\.(css|scss)$/,
        use: ["style-loader", "css-loader", "sass-loader"] // executed bottom to top, right to left, wacky, fun!
      },
      {
        test: /\.(eot|woff)$/,
        use: {
          loader: "file-loader"
        }
      },
      {
        test: /\.gen\.js$/,
        use: [
          {
            loader: "tee-loader",
            options: {
              label: "after"
            }
          },
          "codegen-loader",
          {
            loader: "tee-loader",
            options: {
              label: "before"
            }
          }
        ]
      }
    ]
  },
  plugins: [], // empty because we have no plugins, yet. Also, webpack set some b/c our mode is development right now
  resolveLoader: {
    // where we get our loaders from, if not from node_modules
    alias: {
      "codegen-loader": path.resolve(__dirname, "./codegen-loader.js"), // aliasing them so we can reference them in this doc
      "tee-loader": path.resolve(__dirname, "./tee-loader.js")
    }
  },
  resolve: { extensions: ["*", ".ts", ".tsx", ".js", ".jsx"] }, // so we can do imports like import foo from '../foo'
  output: {
    path: path.resolve(__dirname, "dist/"), // where to put the file
    publicPath: "/dist/", // how the public will find the file
    filename: "bundle.js" // what to call the file
  }
};

// can export a function that takes in the environment that you set in the script i.e. webpack --env prod

module.exports = env => {
  console.log(`This is a ${env} build.`);
  if (env === "dev") {
    // devServer is great for fast development, seeing changes in real time
    // go to localhost://port/webpack-dev-server to see the files that are being served up
    baseConfig.devServer = {
      contentBase: path.join(__dirname, "public/"),
      port: 3000,
      publicPath: "http://localhost:3000/dist/",
      hotOnly: true // for hot module reloading
    };
    baseConfig.devtool = "source-map"; //for source mapping
    baseConfig.plugins = [
      new webpack.HotModuleReplacementPlugin() // for hot module reloading
      // {
      // apply(compiler) {
      //   compiler.plugin("done", function(params) {
      //     console.log(require("util").inspect(compiler.options));
      //   });
      // }
      // }
    ];
    //above is cool way to see all the configuration options of your webpack
  } else if (env === "prod") {
    baseConfig.mode = "production";
  }
  return baseConfig;
};
