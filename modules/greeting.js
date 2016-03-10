var testModule = {}

testModule.sayHello = function(){
  console.log("Hello world!")
}

testModule.sayBye = function(){
  console.log("goodbye")
}


//allows use of require in other files
// module.exports = testModule;

//another implementation

function Greeting(name){
  this.name = name
}

Greeting.prototype.sayHello = function(){
  console.log("Hello " + this.name)
}

Greeting.prototype.sayBye = function(){
  console.log("Bye " + this.name)
}

module.exports = Greeting