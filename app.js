var express = require('express');
var app = express();
var router = express.Router();
var path = require('path');

app.set('view engine','pug');
app.set('views', path.join(__dirname,'views'));
app.set('port', (process.env.PORT || 5000));

app.use(express.static(path.join(__dirname, 'public')));

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.render('index');
});

router.get("/work",function(req,res){
  res.render('work');
});

router.get("/about",function(req,res){
  res.render('about');
});

router.get("/visuals",function(req,res){
  res.render('visuals');
});

router.get("/renders",function(req,res){
  res.render('renders');
});

router.get("/motion",function(req,res){
  res.render('motion');
});

router.get("/installations",function(req,res){
  res.render('installations');
});

router.get("/coding", function(req,res){
  res.render('coding');
});

app.use("/",router);

app.use("*",function(req,res){
  res.render('404');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
