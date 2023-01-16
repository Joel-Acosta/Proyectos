import React from "react";
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import "./WeeklyWeather.scss";

const WeeklyWeather = (props) => {
  return (
    <div className="container">
      {props.dias.map((day) => {
        return (
          <WeeklyWeatherCard key={day}>
            <ul>
              <li>{day}</li>
              <li>icono</li>
              <li>porcentaje</li>
              <li>temperatura</li>
            </ul>
          </WeeklyWeatherCard>
        );
      })}
    </div>
  );
};

export default WeeklyWeather;
