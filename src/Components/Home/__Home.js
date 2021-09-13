import React, { useState } from "react";

import Channels from "../Channels/Channels";
import Basket from "../Basket/Basket";

import "./styles.scss";

const Home = ({ channels }) => {
  const [items, setItems] = useState([]);

  const addToBasket = channel => {
    if (!items.find(item => item.id === channel.id)) {
      setItems([...items, channel]);
    }
  };

  const removeFromBasket = channel => {
    const newArray = items.filter(chan => {
      return chan.id !== channel.id;
    });
    setItems(newArray);
  };

  return (
    <div>
      {channels ? (
        <div className="row flex">
          <div className="col s3 box">
            <Channels
              title="Sports"
              channels={channels.sports}
              addMe={addToBasket}
            />
          </div>
          <div className="col s3 box">
            <Channels
              title="News"
              channels={channels.news}
              addMe={addToBasket}
            />
          </div>
          <div className="col s3 box">
            <Basket items={items} removeMe={removeFromBasket} />
          </div>
        </div>
      ) : (
        <div>... Loading </div>
      )}
    </div>
  );
};

export default Home;
