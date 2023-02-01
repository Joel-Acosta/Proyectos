import { useState } from "react";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import CurrentWeather from "./componentes/CurrentWeather/CurrentWeather";
import DailyWeather from "./componentes/DailyWeather/DailyWeather";
import WeeklyWeather from "./componentes/WeeklyWeather/WeeklyWeather";
import"./App.scss"

const dias =['Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});
  const api = {
    key: "e8df9e34440aa34948453856c26a29db",
    base: "https://api.openweathermap.org/data/2.5/",
  };
  const getDataFromChild = (data) => {
    console.log(data)
  }

  return (
    <div className="main">
      <SearchBar 
        query={query} 
        setQuery={setQuery}
        weather={weather} 
        setWeather={setWeather}
        api={api}
        ></SearchBar>
      <CurrentWeather weather={weather}></CurrentWeather>
      <DailyWeather></DailyWeather>
      <WeeklyWeather dias={dias}></WeeklyWeather>
    </div>
  );
}

export default App;
