import { useDispatch } from 'react-redux';
import { setGeoLocation } from '../app/Slices/geoLocationSlice';

const GetLocationButton = () => {

  const dispatch = useDispatch();

  const getCurrentLocation = () => {
    const positionTest = {
      latitude: 0,
      longitude: 0
    }
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        positionTest.latitude = position.coords.latitude;
        positionTest.longitude = position.coords.longitude;
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
      alert("Geolocation is not supported by this browser.");
    }
    dispatch(setGeoLocation(positionTest));
    const combinedPosition = positionTest.latitude + ',' + positionTest.longitude;
    return combinedPosition;
  }

  const handleError = (error: any) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        console.log("User denied the request for Geolocation.")
        alert("User denied the request for Geolocation.")
        break;
      case error.POSITION_UNAVAILABLE:
        console.log("Location information is unavailable.")
        alert("Location information is unavailable.")
        break;
      case error.TIMEOUT:
        console.log("The request to get user location timed out.")
        alert("The request to get user location timed out.")
        break;
      case error.UNKNOWN_ERROR:
        console.log("An unknown error occurred.")
        alert("An unknown error occurred.")
        break;
      default:
        console.log("An unknown error occurred.")
        alert("An unknown error occurred.")
        break;
    }
  }

  return (
    <button
      onClick={getCurrentLocation}
      className="currentLocation">
      <svg
        className='locationSVG'
        // width="22px"
        // height="22px"
        viewBox="-2.4 -2.4 28.80 28.80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#ffffff"
        transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)">
        <g
          id="SVGRepo_bgCarrier"
          stroke-width="1"></g><g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke="#CCCCCC"
            stroke-width="2" >
        </g>
        <g
          id="SVGRepo_iconCarrier">
          <path
            d="M9.5 10H14.5M12 12.5L12 7.5"
            stroke="#ffffff"
            stroke-width="2"
            stroke-linecap="round" >
          </path>
          <path
            d="M5 15.2161C4.35254 13.5622 4 11.8013 4 10.1433C4 5.64588 7.58172 2 12 2C16.4183 2 20 5.64588 20 10.1433C20 14.6055 17.4467 19.8124 13.4629 21.6744C12.5343 22.1085 11.4657 22.1085 10.5371 21.6744C9.26474 21.0797 8.13831 20.1439 7.19438 19"
            stroke="#ffffff"
            stroke-width="3"
            stroke-linecap="round" >
          </path>
        </g>
      </svg>
    </button>
  )
}

export default GetLocationButton