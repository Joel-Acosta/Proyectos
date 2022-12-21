import SearchBar from "./componentes/SearchBar";
import CurrentWeather from "./componentes/CurrentWeather";
import DailyWeather from "./componentes/DailyWeather/DailyWeather";
import WeeklyWeather from "./componentes/WeeklyWeather/WeeklyWeather";

function App() {
  return (
    <div>
      <SearchBar></SearchBar>
      <CurrentWeather></CurrentWeather>
      <DailyWeather></DailyWeather>
      <WeeklyWeather></WeeklyWeather>
    </div>
  );
}

export default App;
