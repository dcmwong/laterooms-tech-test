var chai = require("chai");
chai.should();
var model = require("../../lib/client/hotels/model.js");

describe("Given I have a one filter and sort ascending", function() {
  it("should create a query with one facility and sort ascending", function() {

    const result = model.makeQuery(["Pool"], 1);

    result.should.equal("?facilities=Pool&sort=1");
  
  })
});
describe("Given I have a two filters and sort ascending", function() {
  it("should create a query with two facilities and sort ascending", function() {

    const result = model.makeQuery(["Pool", "Car+Park"], 1);

    result.should.equal("?facilities=Pool&facilities=Car+Park&sort=1");
  
  })
});

