import React from "react";
import Channel from "../Channel/Channel";

const Channels = ({ channels, addMe, title }) => (
  <div className="row">
    <h5>{title} Channel</h5>
    <ul>
      {channels.map(channel => (
        <Channel key={channel.id} channel={channel} addMe={addMe} />
      ))}
    </ul>
  </div>
);

export default Channels;
