// every "it" is it's own test.
// all Mocha tests use a callback
// all tests return true or false, whether the test passed or not
//
// e.g.
//
//
// require: chai's expect function
var expect = require('chai').expect;

describe('Mocha and Chai',function(){
  it('truthiness', function() {
    expect(false).to.be.false;
  });
});

//example of an async test using 'done' 
it('arrays have length', function(done) {
  var array = [1,2,3];
  setTimeout(function(){
    expect(array.length).to.exist;
    done();
  }, 0)

});

describe('Hello Woooorld!', function(){
  it('hello should return world', function(){
    var hello = require('../helloWorld.js');
    expect(hello()).to.equal('world');
  });
});
