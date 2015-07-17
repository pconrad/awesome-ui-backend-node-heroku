var expect = require("chai").expect;
var QuizDescriptor = require('../../../models/QuizDescriptor.js');


describe('QuizDescriptor Model', function(){

  var validDescriptors = ["foo"];

  var invalidDescriptors = ["bar"];
 
  var isValid = new QuizDescriptor().isValid;

  it('should know that valid QuizDescriptors are valid', function(){
	  validDescriptors.forEach( function (s) {
		  expect(isValid(s)).to.be.true;
	      });
  });

  it('should know that invalid QuizDescriptors are valid', function(){
	  invalidDescriptors.forEach( function (s) {
		  expect(isValid(s)).to.be.false;
	      });
  });
   

});



// Mocha cheatsheet
/*
describe('test suite', function () {
  beforeEach(function() { 
  	// ...
  });
  afterEach(function() { 
  	// ...
  });

  before(function() { 
  	// ...
  });
  after(function() { 
  	// ...
  });

  it('a basic test', function() { 
  	// ...
  });

  it('a test with a promise', function() {
    return somePromiseObject; });

  it('an asynchronous test', function(next) {
    if (success) { next(); } else { next(error); }
  });

  xit('use "xit" for pending tests', function() { 
  	// ...
  });
});
*/

// Chai cheatsheet
/*
expect(3).to.eql(2);

expect(obj).to.be.a('string');
expect(obj).to.be.null;
expect(obj).to.be.true;
expect(obj).to.be.false;
expect(obj).to.be.undefined;

expect(list).to.include("item");
expect(list).to.have.length(3);
expect(list).to.have.length.gt(0);
*/


