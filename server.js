var express = require('express');
var app = express();


app.use(express.static(__dirname  +'/public'));
// Only load this in minddle ware in dev mode
if(app.get('env')==='development'){
var webpackMiddleware=require("webpack-dev-middleware");
var webpack=require('webpack');
var config=require('./webpack.config');
app.use(webpackMiddleware(webpack(config),{
  publicPath:"/build",
  headers:{"X-Custom-Webpack-Header":"yes"},
  stats:{colors:true}
}));
}
var server =app.listen(7000,function(){
  console.log('listening on port 7000');
});
