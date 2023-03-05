import React from "react";
import WeeklyWeatherCard from "./WeeklyWeatherCard";
import "./WeeklyWeather.scss";

const WeeklyWeather = ({ weeklyWeather, weatherData }) => {
  //Esta funcion permite convertir el dato
   // dt_txt del objeto a un dia de la semana
    function getDay(item){
      const weatherDataZero = item.dt_txt;
      const weatherDataZeroSliced = weatherDataZero.slice(0, 10);
      let date = new Date(weatherDataZeroSliced);
      let day = date.toLocaleString("en-us", { weekday: "long" });
      return day
 }

  return (
    <div className="container">
      {/* mapeamos el array de días por cada uno conseguimos su día, 
      y generamos un card donde ingresamos los valores correspondientes.
      usando la variable day como depósito de lo que devuelve la función getDay de*/}
      {weeklyWeather.map((item) => {
        console.log(item);
        let day = getDay(item)
        return (
          <WeeklyWeatherCard key={Math.random()*2}>
            <ul>
              <li>{day}</li>
              <li>
                <img src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt='img' />
              </li>
              <li>{item.main.humidity}%</li>
              <li>{item.main.temp} ºC</li>
            </ul>
          </WeeklyWeatherCard>
        );
      })}
    </div>
  );
};

export default WeeklyWeather;
