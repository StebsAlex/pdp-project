import React from "react";
import "./styles.scss";


const Basket = ({ items, removeMe }) => {
  const handleClick = (e, channel) => removeMe(channel);

  return (
    <div className="row">
      <h5>Basket</h5>
      
      {items ? (
        items.getBasket.map((channel) => (
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
