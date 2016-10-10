var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var buildPageConfig = require('./buildPageConfig.js');
var pageConfig = buildPageConfig();
console.log(pageConfig)

module.exports = {
    //插件项
    plugins: [
        //将样式统一发布到styles.css中
        new ExtractTextPlugin("[name].css")
    ],
    //页面入口文件配置
    entry: pageConfig,
    //入口文件输出配置
    output: {
        path: 'dist/',
        filename: '[name].js'
    },
    watch: true,
    module: { 
     loaders: [ 
        { 
            test: /\.css$/, 
            loader: ExtractTextPlugin.extract("style-loader","css-loader") },
        {
            test:/\.(png)|(jpg)$/,
            loader: "url?limit=50000"
        }         
     ] 
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modulesDirectories: [
          'node_modules'
        ]        
    }
};
