import SearchBar from "./componentes/SearchBar/SearchBar.jsx";
import CurrentWeather from "./componentes/CurrentWeather";
import DailyWeather from "./componentes/DailyWeather/DailyWeather";
import WeeklyWeather from "./componentes/WeeklyWeather/WeeklyWeather";
import"./App.scss"

const dias =['Lunes','Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo']

const api = {
  key: "e8df9e34440aa34948453856c26a29db",
  base:"https://api.openweathermap.org/data/2.5/"
}

function App() {
  return (
    <div className="main">
      <SearchBar></SearchBar>
      <CurrentWeather></CurrentWeather>
      <DailyWeather></DailyWeather>
      <WeeklyWeather dias={dias}></WeeklyWeather>
    </div>
  );
}

export default App;
