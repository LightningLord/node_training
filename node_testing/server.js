// server.js
// var http = require("http");

// function greet(req, res) {
//     res.writeHead(200, {"Content-Type": "text/plain"});
//     res.write("Hello World");
//     res.end();
// }

// var server = http.createServer(greet);

// //localhost:3000
// server.listen(3000);

var express = require('express');
var app = express();

app.set("view engine", "ejs");

app.get('/', function(req, res) {
    res.render("index", {
        greeting: "Hello World! Jason is really awesome!"
    });
});

// app.get("/greet/:name/:lastname", function(req, res) {
//     res.send("<h1>Hello " + req.params.name + " " + req.params.lastname + "</h1>");
// });

app.get("/greet/:name/:lastname", function(req, res) {
    res.render("greet", {
      name: req.params.name,
      lastname: req.params.lastname
    });
});


app.listen(3000)
// var server = app.listen(3000, function () {
//     var host = server.address().address;
//     var port = server.address().port;

//     console.log('Example app listening at http://%s:%s', host, port);
// });