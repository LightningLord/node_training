var http = require("http");

function openFile(req, res) {

  var fs = require("fs");

  var stream = fs.createReadStream("./wordsEn.txt");

  stream.on("data", function(data) {
    console.log("NEW DATA:");
    console.log(data);
    res.write(data)
  });

  stream.on("open", function(){
    console.log("Stream Started")
    res.writeHead(200, {"Content-Type": "text/plain"});
  })

  stream.on("end", function() {
    console.log("Stream has no more data");
    res.end()
  });
}

var server = http.createServer(openFile);

server.listen(3000);