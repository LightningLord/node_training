var express = require('express');
var app = express();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended:true
}));
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use(express.static('public'));
var pg = require("pg");
var models = require("./models/index.js");
app.get('/', function(req,res){
  models.User.findAll().then(function(users, error) {
    res.render("index", {
        users: users
    });
  });
})

app.get('/users/:id/edit', function(req,res){
  // res.render('edit')
  models.User.findById(req.params.id).then(function(user, error) {
    res.render("edit", {
        user: user
    });
  });
})

app.post('/users', function(req,res){
  //create a user
  models.User.create(req.body.user).then(function(data, error) {
      res.redirect("/");
  });
})

app.put('/users/:id', function(req,res){
  console.log("putting!")
  models.User.findById(req.params.id).then(function(user, error) {
    user.updateAttributes(req.body.user).then(function() {
        res.redirect("/");
    });
  });
})

app.delete('/users/:id', function(req,res){
  models.User.findById(req.params.id).then(function(user, error) {
      user.destroy().then(function() {
          res.redirect("/");
      });
  });
})

app.listen(3000)