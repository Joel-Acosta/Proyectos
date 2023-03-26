import { useState, useEffect } from "react";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import CurrentWeather from "./componentes/CurrentWeather/CurrentWeather";
import DailyWeather from "./componentes/DailyWeather/DailyWeather";
import WeeklyWeather from "./componentes/WeeklyWeather/WeeklyWeather";
import "./App.scss";

const dias = [
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
  "Domingo",
];

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState({});
  const [dailyWeather, setDailyWeather] = useState([]);
  const [weeklyWeather, setWeeklyWeather] = useState([]);
  const [location, setLocation] = useState([]);
  const api = {
    key: "e8df9e34440aa34948453856c26a29db",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const getData = (data) => {
    // const filteredData = data.filter()
    // setCurrentWeather(filteredData)
    setWeatherData(data);
    daily(data);
    weekly(data);
  };

  const getLocation = (data) => {
    setLocation(data);
  };

  function daily(data) {
    let hourly = [];
    for (let i = 1; i < 9; i++) {
      hourly.push(data[i]);
    }
    setDailyWeather(hourly);
  }

  function weekly(data) {
    let week = [];
    week.push(data[0]);
    for (let i = 1; i < data.length; i++) {
      if (i % 8 === 0) {
        week.push(data[i]);
      }
    }
    setWeeklyWeather(week);
  }



  return (
    <div className="main">
      <SearchBar
        getData={getData}
        weather={currentWeather}
        setWeather={setCurrentWeather}
        getLocation={getLocation}
        api={api}
      ></SearchBar>
      <CurrentWeather
        weather={weatherData}
        location={location}
      ></CurrentWeather>
      <DailyWeather data={dailyWeather}></DailyWeather>
      <WeeklyWeather weeklyWeather={weeklyWeather} weatherData={weatherData}/>
    </div>
  );
}

export default App;
