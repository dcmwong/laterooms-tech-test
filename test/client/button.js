var chai = require("chai");
chai.should();
// import {mount, render, shallow} from 'enzyme';

var CarParkButton = require("../../lib/client/hotels/buttons/CarPark.js");

describe.skip("<CarParkButton />", function() {
  it("should toggle between on and off states", function() {

    const wrapper = shallow(<Checkbox />);

    wrapper.find('CarPark').props()['color'].should.equal("white");

    wrapper.find('a').simulate('click');

    wrapper.find('CarPark').props()['color'].should.equal("red");
  })
});

