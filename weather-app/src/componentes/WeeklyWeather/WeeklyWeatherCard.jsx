import React from "react";
import "./WeeklyWeatherCard.scss";

const WeeklyWeatherCard = (props) => {
  return <div className="card">{props.children}</div>;
};

export default WeeklyWeatherCard;
