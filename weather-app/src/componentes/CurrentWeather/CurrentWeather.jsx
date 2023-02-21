import React, { useState, useEffect } from "react";
import "./CurrentWeather.scss";
import rainy from "../../assets/rainy.gif";
import clear from "../../assets/clear.gif";
import cloudy from "../../assets/cloudy.gif";
import windy from "../../assets/windy.gif";

const CurrentWeather = ({ weather }) => {
  const [gif, setGif] = useState("");

  const outside =
    typeof weather.weather != "undefined" ? weather.weather[0].main : ""; // info que viene de la api
  useEffect(() => {
    if (outside === "Rain") {
      //función que define el gif segun outside
      setGif(rainy);
    } else if (outside === "Clouds") {
      setGif(cloudy);
    } else if (outside === "Tornado") {
      setGif(windy);
    } else if (outside === "Clear") {
      setGif(clear);
    } else if (outside === "undefined") {
    }
  }, [outside]);

  const sunrise =
    typeof weather.sys != "undefined"
      ? new Date(weather.sys.sunrise * 1000 - weather.timezone)
      : "";

  const sunset =
    typeof weather.sys != "undefined"
      ? new Date(weather.sys.sunset * 1000 - weather.timezone)
      : "";

  //lógica de api
  return (
    <div className="main-current">
      {gif ? (
        <>
          <div className="data">
            <div className="upper">
              <div className="upper-left">
                <h3>
                  {typeof weather.name != "undefined"
                    ? weather.name
                    : "Somewhere"}
                  ,{" "}
                  {typeof weather.sys != "undefined"
                    ? weather.sys.country
                    : "SW"}
                </h3>
              </div>
              <div className="upper-mid">
                <h1>
                  {typeof weather.main != "undefined"
                    ? `${Math.round(weather.main.temp)}°c`
                    : "0°c"}
                </h1>
              </div>
              <div className="upper-right">
                <h3>
                  {typeof weather.main != "undefined"
                    ? `Real Feel: ${Math.round(weather.main["feels_like"])}°c`
                    : "Real Feel: 0°c"}
                </h3>
                <h3>
                  {typeof weather.main != "undefined"
                    ? `Humidity: ${weather.main.humidity}%`
                    : "Humidity: 00%"}
                </h3>
                <h3>
                  {typeof weather.wind != "undefined"
                    ? `Wind: ${weather.wind.speed} Km/h`
                    : "Wind: 0 Km/h"}
                </h3>
              </div>
            </div>
            <div className="lower">
              <ul>
                <li>
                  {sunrise
                    ? `Sunrise: ${sunrise.getHours()}:${sunrise.getMinutes()}`
                    : "Sunrise: 0:0"}
                </li>
                <span> | </span>
                <li>
                  {sunrise
                    ? `Sunset: ${sunset.getHours()}:${sunset.getMinutes()}`
                    : "Sunset: 0:0"}
                </li>
                <span> | </span>
                <li>
                  {typeof weather.main != "undefined"
                    ? `Max: ${weather.main["temp_max"]} °c`
                    : "Max: 0 °c"}
                </li>
                <span> | </span>
                <li>
                  {typeof weather.main != "undefined"
                    ? `Min: ${weather.main["temp_min"]} °c`
                    : "Min: 0 °c"}
                </li>
              </ul>
            </div>
          </div>
          <img src={gif} alt="nada" className="gif" />
        </>
      ) : (
        <h1 className="enter-city">Ingrese una ciudad</h1>
      )}
    </div>
  );
};

export default CurrentWeather;
