var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    //插件项
    plugins: [
        //提公用js到common.js文件中
        commonsPlugin,
        //将样式统一发布到styles.css中
        new ExtractTextPlugin("[name].css")
    ],
    //页面入口文件配置
    entry: {
        home: './src/js/home.js',
        list: './src/js/list.js',
        login: './src/js/login.js',
        regist: './src/js/regist.js'
    },
    //入口文件输出配置
    output: {
        path: 'dist/page/',
        filename: '[name].js'
    },
    watch: true,
    module: { 
     loaders: [ 
        { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader","css-loader") } 
        
     ] 
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
          'node_modules'
        ]        
    }
};
