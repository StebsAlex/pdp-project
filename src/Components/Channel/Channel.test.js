import React from "react";
import { shallow } from "enzyme";
import Channel from "../Channel/Channel"

const dummyData = {id: 1, name:"blah"};

const defaultProps = {
  channel: dummyData
}

describe("Channel component", () => {
  const render = props => shallow(<Channel {...defaultProps} {...props} />)

  test("clicking the button for a channel calls the addMe prop we give it", () => {
    const addMe = jest.fn();
    const wrapper = render({ addMe });
    const button = wrapper.find('button');

    expect(addMe).not.toHaveBeenCalled();
    button.simulate('click');
    expect(addMe).toHaveBeenCalledWith({ id: 1, name: "blah"});
  });
});
