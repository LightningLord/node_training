var Library = require("./../library.js")


var expect = require("chai").expect;

describe("library", function(){
  it("increments the book count", function(done){
    var library = new Library()
    library.add("hp1")
    library.add("got1")
    expect(library.book_count).equal(2)
    done()
  })
  it("adds a book object", function(done){
    var library = new Library()
    library.add("ender's game")
    expect(library.library[0].book).equal("ender's game")
    done()
  })
  it("returns the entire library", function(done){
    var library = new Library()
    library.add("hunger games")
    expect(library.all()).equal(library.library)
    done()
  })
  it("removes a book", function(done){
    var library = new Library()
    library.add("divergent")
    library.remove(1)
    expect(library.book_count).equal(0)
    done()
  })
  it("returns the proper book by id", function(done){
    var library = new Library()
    library.add("freakonomics")
    library.add("mockingjay")
    expect(library.show(2).book).equal("mockingjay")
    done()
  })
})