import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { RootState } from '../app/store';
import { fetch5DayForecast } from '../app/Slices/forecast5DaysSlice';

const Forecast5Days = () => {
  const dispatch = useAppDispatch();

  const forecastSelect = useAppSelector((state: RootState) => state.forecast5Days.forecast);

  const CityName = useAppSelector((state: RootState) => state.citySearch);
  const CurrentCityKey = CityName.search[0].Key.toString();

  const degUnit = useAppSelector((state: RootState) => state.tempUnit.tempUnit);

  useEffect(() => {
    dispatch(fetch5DayForecast({ cityKey: CurrentCityKey, degUnit }));
  }, [degUnit, CurrentCityKey])

  // take the true or false and use the toggleTempUnit action to change the state of the tempUnit

  // Date Calculations {
  const DayOfTheWeekInNumber = new Date().getDay();
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return (
    <>
      <div
        className='forecastWrap'>
        {forecastSelect.map((forecast, index) => {
          return (
            <div
              key={index}
              className="forecast5DaysCards">
              <div
                className='dayAndDate'>
                {weekday[DayOfTheWeekInNumber + index]}
                <span
                  className="forecastDate"> {forecast.Date.slice(8, 10)}/{forecast.Date.slice(6, 7)}
                </span>
              </div>
              <div
                className='daySideWrap'>
                <span className='dayIcon'></span>
                <h3 className="dayNightTemp">
                  {forecast.Temperature.Maximum.Value}°
                </h3>
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${forecastSelect[index].Day.Icon.toString().padStart(2, '0')}-s.png`}
                  alt="" />
                <h3 className="iconPhrase">
                  {forecast.Day.IconPhrase}
                </h3>
              </div>
              <div
                className='nightSideWrap'>
                <span className='nightIcon'></span>
                <h3 className="dayNightTemp">
                  {forecast.Temperature.Minimum.Value}°
                </h3>
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${forecastSelect[index].Night.Icon.toString().padStart(2, '0')}-s.png`}
                  alt="" />
                <h3 className="iconPhrase">
                  {forecast.Night.IconPhrase}
                </h3>
              </div>
            </div>
          )
        }, [])}
      </div>
    </>
  )
}

export default Forecast5Days