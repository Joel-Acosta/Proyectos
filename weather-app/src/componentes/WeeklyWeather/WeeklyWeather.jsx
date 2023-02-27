import React from "react";
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import "./WeeklyWeather.scss";

const WeeklyWeather = ({data}) => {
  return (
    <div className="container">
      {data.map((item) => {
        return (
          <WeeklyWeatherCard key={Math.random()*2}>
            <ul>
              <li>{item.dt}</li>
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
