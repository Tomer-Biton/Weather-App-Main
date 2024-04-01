// in this file i wil create the card to display the information about the current weather for the chosen city or the base city. 
//i will use the currentWeatherSlice to get the data from the store and display it in the card. 
//i will also use the fetchCurrentWeather function to get the data from the API and display it in the card. 
//i will use the useAppSelector to get the data from the store and the useAppDispatch to dispatch the fetchCurrentWeather function. 
//i will also use the useEffect to dispatch the fetchCurrentWeather function when the component mounts and when the baseCity changes. 
//i will also use the useState to set the baseCity when the user clicks on the save button. 
//i will also use the useState to set the showSaveButton to false when the user clicks on the save button. 
//i will also use the useState to set the showSaveButton to true when the user clicks on the save button. 
//i want the information to show in degrees with a button to switch between Celsius and Farenheit, 
//show the weather type, 
//if its raining cloudy or sunny and the icon to match. 
//min and max degrees for the day, 
//icon to match min and max weather type. 
//i will use the useAppSelector to get the data from the store and the useAppDispatch to dispatch the fetchCurrentWeather function. 
//i will also use the useEffect to dispatch the fetchCurrentWeather function when the component mounts and when the baseCity changes. 

import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchCurrentWeather } from '../app/Slices/currentWeatherSlice'
import { RootState } from '../app/store'
import { toggleTempUnit } from '../app/Slices/tempUnitSlice';
import { fetchAutocomplete } from '../app/Slices/autocompleteSlice';
import WeatherIcon from './WeatherIcon';
import { getWeatherKeyword } from '../utils/weatherUtils';

interface CurrentWeatherCardProps {
  updateWeather: (condition: string) => void;
}

const CurrentWeatherCard: React.FC<CurrentWeatherCardProps> = ({ updateWeather }) => {
  const dispatch = useAppDispatch();

  //TempUnit Control:
  const tempUnit = useAppSelector((state: RootState) => state.tempUnit.tempUnit);

  //AutoComplete Search:
  const CityName = useAppSelector((state: RootState) => state.citySearch);
  useEffect(() => {
    dispatch(fetchAutocomplete('Tel Aviv'));
  }, [])

  //Current Weather:
  const CityWeather = useAppSelector((state: RootState) => state.currentWeather.city);
  const NewCityKey = CityName.search[0].Key.toString();

  useEffect(() => {
    dispatch(fetchCurrentWeather(NewCityKey));
  }, [NewCityKey])

  const CityWeatherTemp = CityWeather[0].Temperature;
  const CityWeatherText = CityWeather[0].WeatherText;

  // Simulate Weather
  const weatherKeyword = getWeatherKeyword(CityWeatherText);

  updateWeather(weatherKeyword);

  return (
    <section className="currentWeatherSection">
      <div className="currentWeatherCard">
        <button
          className='changeTempUnitButton'
          onClick={() => dispatch(toggleTempUnit())}>
          {tempUnit ? 'F°' : 'C°'}
        </button>
        <h2
          className='cityName'>
          {CityName.search[0].LocalizedName}
        </h2>
        <h4
          className='countryNameID'>
          {CityName.search[0].Country.ID} ,
          {CityName.search[0].Country.LocalizedName}
        </h4>
        <h3 className='weatherTextIcon'>
          {CityWeatherText}
          <WeatherIcon />
        </h3>
        <h1 className='h1Temperature'>
          {tempUnit ? CityWeatherTemp.Metric.Value : CityWeatherTemp.Imperial.Value}
          <span> </span>
          {tempUnit ? 'C°' : 'F°'}
        </h1>
      </div>
    </section>
  )
}

export default CurrentWeatherCard;
