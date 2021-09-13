import React from "react";
import { shallow } from "enzyme";
import Basket from "../Basket/Basket";

const dummyData = [{ id: 1, name: "blah" }];

const defaultProps = {
  items: dummyData
};

describe("Basket component", () => {
  const render = props => shallow(<Basket {...defaultProps} {...props} />)

  test("Render the Basket component", () => {
    const wrapper = render();
    expect(wrapper).toMatchSnapshot();
  });

  test("Test the HandleClick function", () => {
    const removeMe = jest.fn();
    const wrapper = render({ removeMe });
    const button = wrapper.find('[data-test="remove-button"]');

    button.simulate("click");

    expect(removeMe).toHaveBeenCalledWith({ id: 1, name: "blah" });
  });
});
