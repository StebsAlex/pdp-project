import React, { useEffect, useState } from "react";
import "./styles.scss";
import { useQuery } from "@apollo/client";
import { GET_BASKET } from "../../GraphQL/GET_BASKET";

const Basket = ({ items, removeMe }) => {
  const { error, loading, data } = useQuery(GET_BASKET);

  const [channels, setChannels] = useState([]);
  useEffect(() => {
    if (data) {
      setChannels(data.getBasket);
    }
  }, [data]);

  const handleClick = (e, channel) => removeMe(channel);

  return (
    <div className="row">
      <h5>Basket</h5>
      {loading && <div> Loading.... </div>}
      {channels ? (
        channels.map((channel) => (
          <div key={channel.id}>
            <p> {channel.name}</p>
            <button
              className="btn"
              data-test="remove-button"
              onClick={(e) => {
                handleClick(e, channel);
              }}
            >
              Remove Channel
            </button>
          </div>
        ))
      ) : (
        <div> No Channels in basket </div>
      )}
      <div className="checkout">
        <button className="btn btn-small"> Checkout </button>
      </div>
    </div>
  );
};

export default Basket;
