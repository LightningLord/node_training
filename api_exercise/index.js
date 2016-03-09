var express = require('express');
var app = express();
var request = require('request');
app.set("view engine", "ejs");
app.get('/', function(req,res){
  res.send("hello, world")
})
var request_and_render = function(template_name, res){
  var url = 'https://myapi.profstream.com/api/23afb1/persons'
  request(url, function(error, response, body){
    res.render(template_name, {
      users: JSON.parse(body)
    });
  })
}
app.get('/all', function(req, res) {
  request_and_render('all', res)
});
app.get('/first', function(res, res){
  request_and_render('first', res)
})
app.get('/last', function(res, res){
  request_and_render('last', res)
})

app.listen(3000)