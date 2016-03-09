var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Calculate Something!');
});
var calc = function(req, res){
  var first = parseInt(req.params.first)
  var second = parseInt(req.params.second)
  var operation = req.params.operation
  console.log(req.params)
  var url = require('url');
  var url_parts = url.parse(req.url, true);
  var query = url_parts.query;
  console.log(query)
  console.log(operation)
  if (operation == 'add'){
    var result = first + second
    var operator = '+'
  } else if (operation == 'subtract'){
    var result = first - second
    var operator = '-'
  } else if (operation == 'multiply') {
    var result = first * second
    var operator = '*'
  } else if (operation == 'divide') {
    var result = first / second
    var operator = '/'
  } else {
    res.send("invalid operator")
  }
  res.send(first + operator + second + '=' + result)
}
app.get('/:operation/:first/:second', calc)
app.listen(3000)