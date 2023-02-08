const path = require('path');

module.exports = {
  entry: {
    client: path.join(__dirname, '../src', 'client', 'index.js'),
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name]-bundle.js',
    publicPath: '/',
  },
  
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      // chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        // use: {
        //   loader: "babel-loader",
        //   options: {
        //     presets: ["@babel/preset-react", "@babel/preset-env"],
        //     plugins: [
        //       ["@babel/plugin-transform-runtime"],
        //       [
        //         "@babel/plugin-transform-react-jsx",
        //         {
        //           pragma: "h",
        //           pragmaFrag: "Fragment",
        //         },
        //       ],
        //       [
        //         "import",
        //         {
        //           libraryName: "antd",
        //           style: true,
        //         },
        //       ],
        //     ],
        //   },
        // },
      },
      {
        test: /\.css$/,
        use: [
          'css-loader',
          'style-loader',
        ],
      },
      {
        test: /\.(png|jpe?g|gif|woff2?|svg|eot|ttf)$/i,
        loader: 'file-loader',
      },
    ],
  },
};
const preact = {
  
  resolve: { 
    "alias": { 
      "react": "preact/compat",
      "react-dom/test-utils": "preact/test-utils",
      "react-dom": "preact/compat",     // Must be below test-utils
      "react/jsx-runtime": "preact/jsx-runtime"
    },
  }
};






