import { useState, useEffect } from 'react';
import './App.css';
const staticWeatherJSON = {
  coord: { lon: 139.6917, lat: 35.6895 },
  weather: [
    { id: 802, main: 'Clouds', description: 'scattered clouds', icon: '03n' },
  ],
  base: 'stations',
  main: {
    temp: 290.61,
    feels_like: 290.19,
    temp_min: 287.73,
    temp_max: 292.38,
    pressure: 1017,
    humidity: 68,
  },
  visibility: 10000,
  wind: { speed: 6.17, deg: 100 },
  clouds: { all: 40 },
  dt: 1684934545,
  sys: {
    type: 2,
    id: 268395,
    country: 'JP',
    sunrise: 1684870249,
    sunset: 1684921529,
  },
  timezone: 32400,
  id: 1850144,
  name: 'Tokyo',
  cod: 200,
};
function App() {
  // const [data, setData] = useState({});
  // const [location, setLocation] = useState(null);
  // const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=06a0ddef3e13e908cd7e8f750a12cd78`;
  // useEffect(() => {
  //   if (location != null) {
  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((response) => {
  //         setData(response);
  //       });
  //   }
  // }, [location]);
  // const handleSubmitLocation = (e) => {
  //   e.preventDefault();
  //   setLocation(e.target.locationSubmit.value);
  // };
  console.log(staticWeatherJSON.main);
  return (
    <>
      <form action="submit">
        <input
          type="text"
          placeholder="Enter a location"
          name="locationSubmit"
        ></input>
        <input type="button" value="Submit"></input>
      </form>
      <div class="flex flex-row">
        <div>{staticWeatherJSON.name}</div>
        <div>{staticWeatherJSON.name}</div>
        <div>{staticWeatherJSON.name}</div>
      </div>
    </>
  );
}

export default App;
