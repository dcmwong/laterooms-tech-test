import chai from "chai";
chai.should();
var model = require("../../lib/client/hotels/model.js");
import R from "ramda";
import React from "react";
import SearchInstructions from "../../lib/client/hotels/SearchInstructions.js";
import sinon from "sinon";
import Task from "data.task";
import Either from "data.either";

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

describe("Given I have searched for hotels with no results", function() {
  it("should give me instructions", function() {

    const result = model.searchHotels("");
    const either = result.fork(R.identity, R.identity);
    const instructions = either.cata({ Left: R.identity });

    instructions.should.deep.equal(<SearchInstructions/>);
  })
});

describe("Given I have searched for hotels with results", function() {
  it("should give me data", function() {

    const data = {"items":[{"id":6,"Name":"hotel6","StarRating":3,"Facilities":["pool"]}]};

    const t1 = Task.of(Either.Right(data)); 
    const t2 = R.map(R.map(model.toHotels))(t1); 

    const either = t2.fork(R.identity, R.identity);
    const hotels = either.cata({ Right: R.identity });

    hotels[0].Name.should.equal("hotel6");
  })
});

