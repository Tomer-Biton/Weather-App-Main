import { useState } from 'react'
import Navbar from './Navbar'
import SearchBar from './SearchBar'
import CurrentWeatherCard from './CurrentWeatherCard'
import Forecast5Days from './Forecast5Days'
import RainEffect from '../utils/RainEffect'

const MainPage = () => {

  const [currentWeather, setCurrentWeather] = useState('');

  const updateWeatherCondition = (condition: string) => {
    setCurrentWeather(condition);
  };

  let weatherAnimationUrl = '';
  let weatherAnimationClass = '';
  let rainAnimationClass = '';
  let sunAnimationClass = '';
  let snowAnimationClass = '';

  const getWeatherAnimationClass = () => {
    switch (currentWeather) {
      case 'Rain':
        return (
          weatherAnimationUrl = '',
          rainAnimationClass = 'rainAnimation weatherAnimation',
          sunAnimationClass = 'displayNone weatherAnimation',
          snowAnimationClass = 'displayNone weatherAnimation',
          weatherAnimationClass = rainAnimationClass
        );
      case 'Sunny':
        return (
          weatherAnimationUrl = 'https://www.freeiconspng.com/thumbs/sun/natural-energy-source-the-sun-transparent-photos-3.png',
          sunAnimationClass = 'sunAnimation weatherAnimation',
          rainAnimationClass = 'displayNone weatherAnimation',
          snowAnimationClass = 'displayNone weatherAnimation',
          weatherAnimationClass = sunAnimationClass
        );
      case 'Snow':
        return (
          weatherAnimationUrl = 'https://www.transparentpng.com/thumb/snowflakes/snowflakes-transparent-images-21.png',
          snowAnimationClass = 'snowAnimation weatherAnimation',
          sunAnimationClass = 'displayNone weatherAnimation',
          rainAnimationClass = 'displayNone weatherAnimation',
          weatherAnimationClass = snowAnimationClass
        )
    }
  };

  return (
    <div className='mainPage'>
      <Navbar />
      <div className={`variableWeather ${getWeatherAnimationClass()} ${weatherAnimationClass}`}>
        <img src={weatherAnimationUrl} />
        <RainEffect classUpdater={rainAnimationClass} />
      </div>
      <SearchBar />
      <CurrentWeatherCard updateWeather={updateWeatherCondition} />
      <Forecast5Days />
    </div>
  )
}

export default MainPage