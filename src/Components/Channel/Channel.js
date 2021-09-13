import React from "react";

const Channel = ({ channel, addMe }) => {
  const handleClick = () => addMe(channel);
  return (
    <li data-test="component-news">
      <p> {channel.name}</p>
      <button className="btn btn-small" onClick={handleClick}>
        {" "}
        Add me!{" "}
      </button>
    </li>
  );
};

export default Channel;
