import { useAppSelector } from "../app/hooks";
import { RootState } from "../app/store";


const WeatherIcon: React.FC = () => {
  const CityWeather = useAppSelector((state: RootState) => state.currentWeather.city);
  const CityWeatherIcon = CityWeather[0].WeatherIcon;
  // console.log('CityWeatherIcon', CityWeatherIcon);

  return (
    <div className="weatherIcon">
      <img
        src={`https://developer.accuweather.com/sites/default/files/${CityWeatherIcon.toString().padStart(2, '0')}-s.png`}
        alt="weatherIcon" />
    </div>
  )
}

export default WeatherIcon;