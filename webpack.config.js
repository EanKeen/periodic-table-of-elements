// webpack.config.js

const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: "./src/main.js",
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/dist'
  },
  // Tells webpack what directories should be searched when resolving modules
  /*resolve: {
    modules: [
      path.join(__dirname, 'src'),
      'node_modules'
    ]
  },*/
   module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env']
            }
          }
        },
        {
         test: /\.vue$/,
         exclude: /node_modules/,
         loader: 'vue-loader',
         /*options: {
           loaders: {
             scss: {
               loader: 'sass-loader'
             }
           }
         }*/
       },
       {
         test: /\.(sa|sc)ss$/,
         //exclude: /node_modules/,
         use: [
           MiniCssExtractPlugin.loader,
           'css-loader',
           'sass-loader' // Loads a sass / scss file and compiles it to CSS
         ]
       },
       {
         test: /\.css$/,
         use: [
           MiniCssExtractPlugin.loader,
           'css-loader'
         ]
       },

       // File loader emits files in the output directory and (replaces url() and require() with a path that actually works in production also)
       {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          //exclude: /node_modules/,
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'assets'
          }
       },
     ]
   },
   resolve: {
      alias: {
        'vue$': 'vue/dist/vue.esm.js'
      },
      extensions: ['*', '.js', '.vue', '.json']
    },
    plugins: [
      new VueLoaderPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: 'bundle.css',
        chunckFilename: '[id].css'
      })
    ]
}