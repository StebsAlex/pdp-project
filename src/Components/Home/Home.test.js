import React from "react";
import { shallow } from "enzyme";

import Channels from "../Channels/Channels";
import Basket from "../Basket/Basket";
import Home from "./Home";

describe("Home component", () => {
  const channels = {
    sports: ["sporty"],
    news: ["newsy"]
  };

  const defaultProps = { channels };
  const render = props => shallow(<Home {...defaultProps} {...props} />);

  beforeEach(() => {
    jest.resetAllMocks();
  });

  test("displays loading message", () => {
    const wrapper = render({ channels: undefined });
    const loadingMessage = <div>... Loading</div>;

    expect(wrapper.containsMatchingElement(loadingMessage)).toEqual(true);
  });

  test("sets sports channels from data", async () => {
    const wrapper = render();
    expect(wrapper.find(Channels).first().prop("channels")).toEqual([
      "sporty"
    ]);
  });

  test("sets news channels from data", async () => {
    const wrapper = render();
    expect(wrapper.find(Channels).at(1).prop("channels")).toEqual(["newsy"]);
  });

  test("addMe prop on NewsChannel adds item to basket", async () => {
    const wrapper = render();
    const addMe = wrapper.find(Channels).first().prop("addMe");
    addMe({ id: "some channel" });

    expect(wrapper.find(Basket).prop("items")).toEqual([
      { id: "some channel" }
    ]);
  });

  test("addMe prop on SportsChannel adds item", async () => {
    const wrapper = render();

    const addMe = wrapper.find(Channels).at(1).prop("addMe");
    addMe({ id: "some channel" });

    expect(wrapper.find(Basket).prop("items")).toEqual([
      { id: "some channel" }
    ]);
  });

  test("multiple items can be added and removeMe prop on Basket removes them", async () => {
    const wrapper = render();

    const addMe = item => wrapper.find(Channels).at(1).prop("addMe")(item);
    const removeMe = item => wrapper.find(Basket).prop("removeMe")(item);
    
    addMe({ id: "channelA" });
    addMe({ id: "channelB" });
    expect(wrapper.find(Basket).prop("items")).toEqual([
      { id: "channelA" },
      { id: "channelB" }
    ]);

    removeMe({ id: "channelA" });
    expect(wrapper.find(Basket).prop("items")).toEqual([{ id: "channelB" }]);

    removeMe({ id: "channelB" });
    expect(wrapper.find(Basket).prop("items")).toEqual([]);
  });
});
