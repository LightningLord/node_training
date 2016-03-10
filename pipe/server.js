var fs = require("fs");




var copyFile = function(file, destination){
  var rd = fs.createReadStream(file);
  var wr = fs.createWriteStream(destination);
  rd.pipe(wr);

  wr.on("error", function(){
    console.log("write error")
    return false
  })

  rd.on("error", function(){
    console.log("read error")
    return false
  })

  wr.on("finish", function() {
    console.log("Write operation finished");
    return true
  });
}


copyFile("./wordsEn.txt","./copy.txt")