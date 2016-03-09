var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs");
app.get('/', function(req,res){
  res.send("hello, world")
})
app.get('/all', function(req, res) {
  var url = 'https://myapi.profstream.com/api/23afb1/persons'
    request(url, function(error, response, body){
      console.log(body)
      res.render("all", {
        users: JSON.parse(body)
      });
    })
});

app.listen(3000)