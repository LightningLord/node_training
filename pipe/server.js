var fs = require("fs");




var copyFile = function(fileName){
  var rd = fs.createReadStream("./wordsEn.txt");
  var wr = fs.createWriteStream(fileName);
  rd.pipe(wr);

  wr.on("error", function(){
    console.log("write error")
  })

  rd.on("error", function(){
    console.log("read error")
  })

  wr.on("finish", function() {
      console.log("Write operation finished");
  });
}


copyFile("./copy.txt")