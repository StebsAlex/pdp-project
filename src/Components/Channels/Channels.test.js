import React from "react";
import { shallow } from "enzyme";
import Channels from "./Channels";
import Channel from "../Channel/Channel";

const defaultProps = {
  channels: [{ id: 1, name: "blah" }],
  title: "News"
};

describe("Channels component", () => {
  const render = props => shallow(<Channels {...defaultProps} {...props} />);

  test("it renders title and Channel components", () => {
    const wrapper = render();
    expect(wrapper).toMatchSnapshot();
  });

  test("it sets the addMe prop on the Channel", () => { // something snapshot won't do!
    const addMe = jest.fn()
    const wrapper = render({ addMe });
    const channel = wrapper.find(Channel).first();

    expect(channel.prop("addMe")).toEqual(addMe);
  });
});
