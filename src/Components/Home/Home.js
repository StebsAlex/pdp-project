import React, { useEffect, useState } from "react";
import { useQuery, useMutation } from "@apollo/client";
import Channels from "../Channels/Channels";
import Basket from "../Basket/Basket";
import { GET_CHANNELS } from "../../GraphQL/GET_CHANNELS";
import { ADD_BASKET } from "../../GraphQL/ADD_BASKET";

const Home = () => {
  const { error, loading, data } = useQuery(GET_CHANNELS);
  const [channels, setChannels] = useState([]);
  useEffect(() => {
    if (data) {
      setChannels(data.getAllChannel);
    }
  }, [data]);
  const newsChannel = channels.filter((item) => item.category === "News");
  const sportsChannel = channels.filter((item) => item.category === "Sports");

  const [addToBasket, { erorr }] = useMutation(ADD_BASKET);

  const addToBasketFunc = (channel) => {
    debugger;
    addToBasket({
      variables: {
        name: channel.name,
        id: channel.id,
        category: channel.category,
      },
    });
    if (error) {
      console.log(error);
    }
  };

  // const removeFromBasket = (channel) => {
  //   const newArray = items.filter((chan) => {
  //     return chan.id !== channel.id;
  //   });
  //   setItems(newArray);
  // };
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
              // removeMe={removeFromBasket}
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
