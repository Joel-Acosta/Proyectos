import React from "react";
import "./DailyWeather.scss";
import DailyWeatherCard from "./DailyWeatherCard.jsx";

const DailyWeather = ({ data }) => {
  return (
    <div className="main-daily">
      <ul>
        {data.map((dataPoint) => (
          <li key={dataPoint.dt}>
            <DailyWeatherCard
              dt={dataPoint.dt_txt}
              icon={dataPoint.weather[0].icon}
              min={dataPoint.main.temp_min}
              max={dataPoint.main.temp_max}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DailyWeather;
