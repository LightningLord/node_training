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
app.get('/', function(req,res){
  res.send("hello, world")
})
var url = 'https://myapi.profstream.com/api/23afb1/persons'
var request_and_render = function(template_name, res){
  request(url, function(error, response, body){
    res.render(template_name, {
      users: JSON.parse(body)
    });
  })
}
app.get('/all', function(req, res) {
  request_and_render('all', res)
});
app.get('/first', function(req, res){
  request_and_render('first', res)
})
app.get('/last', function(req, res){
  request_and_render('last', res)
})

app.get('/new', function(req, res){
  res.render('new')
})


app.post("/users", function(req, res) {
  console.log(req.body)
  request({
      method: "POST",
      uri: url,
      formData: req.body.user
  }, function(error, response, body) {
      if(error){
        //do something
      }
      res.redirect("/all");
  });
});

app.get("/users/:id/edit", function(req, res){
  request(url +"/" + req.params.id, function(error, response, body){
    res.render("edit", {
      user: JSON.parse(body)
    })
  })
})

app.put("/users/:id", function(req, res){
  request({
      method: "PUT",
      uri: url + "/" + req.params.id,
      formData: req.body.user
  }, function(error, response, body) {
      if(error){
        //do something
      }
      res.redirect("/all");
  });
})

app.listen(3000)