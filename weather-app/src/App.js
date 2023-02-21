import { useState } from "react";
import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import CurrentWeather from "./componentes/CurrentWeather/CurrentWeather";
import DailyWeather from "./componentes/DailyWeather/DailyWeather";
import WeeklyWeather from "./componentes/WeeklyWeather/WeeklyWeather";
import"./App.scss"

const dias =['Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

function App() {
  const [query, setQuery] = useState("");
  const [dailyWeather, setDailyWeather] = useState([])
  const [currentWeather, setCurrentWeather] = useState({});
  const api = {
    key: "e8df9e34440aa34948453856c26a29db",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  const getData = (data) => {
    setCurrentWeather(data)
  }

  const getDailyData = (data) => {
    setDailyWeather(data)
  }
  
  const dailyData = typeof dailyWeather != "undefined"? dailyWeather : 'nada' ;
  console.log(dailyData);
 

  return (
    <div className="main">
      <SearchBar 
        getData={getData}
        getDailyData={getDailyData}
        query={query} 
        setQuery={setQuery}
        weather={currentWeather} 
        setWeather={setCurrentWeather}
        api={api}
        ></SearchBar>
      <CurrentWeather weather={currentWeather}></CurrentWeather>
      <DailyWeather data={dailyData}></DailyWeather>
      <WeeklyWeather dias={dias}></WeeklyWeather>
    </div>
  );
}

export default App;
