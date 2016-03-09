var express = require('express');
var app = express();
var request = require('request');
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({
    extended:true
}));
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
app.set("view engine", "ejs");

var url = "https://myapi.profstream.com/api/4f5011/wines"

app.get('/', function(req,res){
  request(url, function(error,response,body){
    res.render('index', {
      wines: JSON.parse(body)
    })
  })
})

app.get('/wines/:id/edit', function(req,res){
  request(url + "/" + req.params.id, function(error, response, body){
    res.render('edit', {
      wine: JSON.parse(body)
    })
  })
})

app.put('/wines/:id', function(req,res){
  request({
    method: "PUT",
    uri: url + "/" + req.params.id,
    formData: req.body.wine
  }, function(error, response,body){
    res.redirect("/")
  })
})

app.post('/wines', function(req,res){
  request({
    method: "POST",
    uri: url,
    formData: req.body.wine
  }, function(error,response,body){
    console.log(error)
    console.log(body)
    res.redirect("/")
  })
})
app.listen(3000)