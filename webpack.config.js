var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
//引入glob
var glob = require('glob')


// 动态获取js文件
function entries() {
  var newEntries = {};
  var jsFiles = glob.sync('./source_code/pages/*/*.js');
  jsFiles.forEach(function (file) {
    var name = /.*\/(.*)\//.exec(file)[1];//得到最后一级目录名
    newEntries[name + '.js'] = file;
  });
  return newEntries;
}

// 动态获取html文件
function getPlugins() {
  var pages = [];
  var htmlFiles = glob.sync('./source_code/pages/*/*.js');
  htmlFiles.forEach(function (file) {
    var name = /.*\/(.*)\//.exec(file)[1];//得到最后一级目录名
    pages.push(
      new HtmlWebpackPlugin(
        {
          inject: false,
          jsfile: name + ".js",
          filename: name + ".html",
          template: getHtmlFile(name)
        }
      )
    );
  });
  return pages;
}

// 动态获取html文件
function getHtmlFile(pageDir) {
  var htmlFiles = glob.sync('./source_code/pages/' + pageDir + '/*.html');
  
  var template = "source_code/pages/template.html";
  htmlFiles.forEach((file)=>{
    template = file;
  });

  return template;
}

module.exports = {
  entry: entries(),
  output: {
    path: path.resolve(__dirname, './release'),
    publicPath: '',
    filename: 'scripts/[name]'
  },
  module: {
    rules: [
      {
        test: /\.(vue)$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|jpeg|bmp)$/,
        loader: 'file-loader',
        options: {
          //name: 'assets/[name].[ext]?[hash]'
          name: 'assets/[hash].[ext]'
        }
      },
      {
        test: /\.(woff|ttf|woff2|eot)$/,
        loader: 'url-loader?limit=8192',
        options: {
          //name: 'assets/[name].[ext]?[hash]'
          name: 'assets/[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  plugins: getPlugins(),
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map';
  // http://vue-loader.vuejs.org/en/workflow/production.html

  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      },
      '__CONFIGS__': JSON.stringify({
        API: "http://112.74.26.122:8080/seo/",
        WEBSOCKET: "ws://112.74.26.122:8080/seo/"
      }),
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
else {
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      '__CONFIGS__': JSON.stringify({
        API: "http://10.20.10.249/seo/",
        WEBSOCKET: "ws://10.20.10.249/seo/"
      })
    })
  ]);
}