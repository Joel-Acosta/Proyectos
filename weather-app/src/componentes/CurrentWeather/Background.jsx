import React from "react";
import './Background.scss'
import rainy from "../../assets/rainy.gif";

const Background = (props) => {
  return (
    <div className="background">
      <video src={props} autoPlay loop ></video>
    </div>
  );
};

export default Background;
