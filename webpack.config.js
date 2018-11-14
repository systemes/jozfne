
let ExtractTextPlugin = require('extract-text-webpack-plugin');
//多JS文件输出
const path = require('path');
let cssExtractor = new ExtractTextPlugin('style/[name].css');
let lessExtractor = new ExtractTextPlugin('style/[name].less');
module.exports={
    //入口文件的配置项
    entry:{
        a:'./src/index.js'
    },
    //出口文件的配置项
    output:{
        //输出的路径，用了Node语法
        path:path.resolve(__dirname,'dist'),
        //输出的文件名称
        filename:'ubm.js'
        //filename: '[name]-[hash].js',
    },
    //模块：例如解读CSS,图片如何转换，压缩
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
        //{ test: /\.(jpg|png|jpeg|gif)$/, loader: "url-loader?limit=8192" },
        //{test: /\.scss$/i, use: cssExtractor.extract(['css','sass'])},
        //{test: /\.less$/i, use: lessExtractor.extract(['css','less'])},
        {test: /\.css$/i, use: cssExtractor.extract(['css-loader?minimize'])}
        //{ test: /\.css$/,use: ['style-loader', 'css-loader?minimize']}
      ]
    },
    //插件，用于生产模版和各项功能
    plugins:[
      cssExtractor,
      lessExtractor
    ],
    //配置webpack开发服务功能
    devServer:{}
}
