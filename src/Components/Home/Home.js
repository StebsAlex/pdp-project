import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Channels from "../Channels/Channels";
import Basket from "../Basket/Basket";
import { GET_CHANNELS, ADD_BASKET, REMOVE_BASKET, GET_BASKET } from "../../GraphQL/";

const Home = () => {
  const { error: errorGetChannels, loading, data } = useQuery(GET_CHANNELS);
  const { error: errorGetBasket, data: items, refetch } = useQuery(GET_BASKET);
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    if (data) {
      setChannels(data.getAllChannel);
    }
  }, [data]);
  const newsChannel = channels.filter((item) => item.category === "News");
  const sportsChannel = channels.filter((item) => item.category === "Sports");

  const [addToBasket, { error: basketError }] = useMutation(ADD_BASKET);
  const [removeFromBasket, { error: removeFromBasketError }] = useMutation(REMOVE_BASKET);

  const addToBasketFunc = (channel) => {
    debugger;
    addToBasket({
      variables: {
        name: channel.name,
        id: channel.id,
        category: channel.category,
      },
    });
    if (basketError) {
      console.log(basketError);
    }
    refetch();
  };

  const removeFromBasketFunc = (channel) => {
    debugger;
    removeFromBasket({
      variables: {
        name: channel.name,
        id: channel.id,
        category: channel.category,
      },
    });
    if (removeFromBasketError) {
      console.log(removeFromBasketError);
    }
    refetch();
  };

  return (
    <div>
      <div className="App">
        <header>
          <nav className="nav-wrapper">
            <div className="container">
              <span className="left"></span>
            </div>
          </nav>
        </header>
        {channels ? (
          <div className="row flex">
            <div className="col s3 box">
              <Channels
                title="Sports"
                channels={sportsChannel}
                addMe={addToBasketFunc}
              />
            </div>
            <div className="col s3 box">
              <Channels
                title="News"
                channels={newsChannel}
                addMe={addToBasketFunc}
              />
            </div>
            <div className="col s3 box">
              <Basket
                items={items}
                removeMe={removeFromBasketFunc}
              />
            </div>
          </div>
        ) : (
          <div>... Loading </div>
        )}
      </div>
    </div>
  );
};

export default Home;
