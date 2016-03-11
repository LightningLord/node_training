var Greeting = require("./greeting.js")

var greeting = new Greeting("Jason")
greeting.sayHello()
greeting.sayBye()

var arrayHelpers = require("./array.js")

var helper = new arrayHelpers([8,9])


console.log(helper.getLast())

console.log(helper.shovel(6))

console.log(helper.reverse())

console.log(helper.sort())