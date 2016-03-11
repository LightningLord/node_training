function arrayHelpers(arr){
  this.arr = arr
}

arrayHelpers.prototype.getLast = function(){

  return this.arr[this.arr.length - 1]
}

arrayHelpers.prototype.shovel = function(elt){
  this.arr.push(elt)
  return this.arr
}

arrayHelpers.prototype.reverse = function(){
  return this.arr.reverse()
}

arrayHelpers.prototype.sort = function(){
  return this.arr.sort()
}
module.exports = arrayHelpers