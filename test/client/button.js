import chai from "chai"; 
chai.should();
import {mount, render, shallow} from "enzyme";
import React from "react";
import CarPark from "react-icons/lib/md/directions-car";
import CarParkButton from "../../lib/client/hotels/buttons/CarPark.js";
import sinon from "sinon";

describe("<CarParkButton />", function() {
  it("should toggle between on and off states", function() {

    const addAndSubmitFn = sinon.spy(); 
    const negateAndSubmitFn = sinon.spy(); 

    const wrapper = shallow(<CarParkButton 
      addAndSubmit={addAndSubmitFn} 
      negateAndSubmit={negateAndSubmitFn} />);

    wrapper.find("a").simulate("click");
    wrapper.find(CarPark).props().color.should.equal("gold");
    addAndSubmitFn.calledOnce.should.equal(true);

    wrapper.find("a").simulate("click");
    wrapper.find(CarPark).props().color.should.equal("white");
    negateAndSubmitFn.calledOnce.should.equal(true);
  })
});

