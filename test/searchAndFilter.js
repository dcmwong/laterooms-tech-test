var chai = require("chai");
chai.should();
var searchAndFilter = require("../lib/server/searchAndFilter.js");
var data = require("../lib/server/data.js");

  describe("Given a user has selected one filter", function() {
    it("should return only hotels with one facility", function() {

      var query = {
        Sort: 0,
        Facilities: ["gym"]  
      }
      
      var expected = {
        items : [
          {
            id: 5,
            Name: "hotel5",
            StarRating: 5,
            Facilities : ["gym"]
          }
        ]
      };

      const result = { items : searchAndFilter(data, query)};

      result.should.deep.equal(expected);
    })
  });
  describe("Given a user has selected two filters", function() {
    it("should return only hotels with two facilities", function() {

      var query = {
        Sort: 0,
        Facilities: ["car park", "pool"]  
      }
      
      var expected = {
        items : [
          {
            id: 1,
            Name: "hotel1",
            StarRating: 1,
            Facilities : ["car park", "pool"]
          }
        ]
      };

      const result = { items : searchAndFilter(data, query)};

      result.should.deep.equal(expected);
    })
  });

  describe("Given user has made no filter selection", function() {
    it("should return all hotels", function() {

      var query = {
        Sort: 0,
        Facilities: []  
      }

      const result = { items : searchAndFilter(data, query)};

      result.should.deep.equal(data);
    });
  });

  describe("Given user has chosen two filters", function() {
    it("should return hotels with those two facilities", function() {

      var query = {
        Sort: 0,
        Facilities: ["car park", "pool"]  
      }

      var expected = {
        items : [
          {
            id: 1,
            Name: "hotel1",
            StarRating: 1,
            "Facilities": ["car park", "pool"]
          }
        ]
      };

      const result = { items : searchAndFilter(data, query)};

      result.should.deep.equal(expected);
    })
  });
  describe("Given user has sorted descending", function() {
    it("should return hotels in descending order based on StarRating", function() {

      var query = {
        Sort: 2,
        Facilities: []  
      }

      var data = {
        items : [
          {
            id: 1,
            Name: "hotel1",
            StarRating: 1,
            "Facilities": ["car park", "pool"]
          },
          {
            id: 2,
            Name: "hotel2",
            StarRating: 2,
            "Facilities": ["car park", "gym"]
          }, 
          {
            id: 3,
            Name: "hotel3",
            StarRating: 3,
            "Facilities": []
          }]
      }

      var expected = {
        items : [
          {
            id: 3,
            Name: "hotel3",
            StarRating: 3,
            "Facilities": []
          }, 
          {
            id: 2,
            Name: "hotel2",
            StarRating: 2,
            "Facilities": ["car park", "gym"]
          }, 
          {
            id: 1,
            Name: "hotel1",
            StarRating: 1,
            "Facilities": ["car park", "pool"]
          },
        ]
      };

      const result = { items : searchAndFilter(data, query)};

      result.should.deep.equal(expected);
    })
  });

