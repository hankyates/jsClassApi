var express = require('express');
var app = express();

var content = {
  'home': '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus</p>',
  'articles': '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>',
  'portfolio': '<p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>'
}

app.get('/content', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.json(content);
});

app.get('/content/home', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.json(content['home']);
});

app.get('/content/articles', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.json(content['articles']);
});

app.get('/content/portfolio', function(req, res){
  res.header("Access-Control-Allow-Origin", "*");
  res.json(content['portfolio']);
});

app.listen(3000);
