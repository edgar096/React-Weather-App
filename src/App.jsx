import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(null);
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=06a0ddef3e13e908cd7e8f750a12cd78`;
  useEffect(() => {
    if (location != null) {
      fetch(url)
        .then((response) => response.json())
        .then((response) => {
          setData(response);
        });
    }
  }, [location]);
  const handleSubmitLocation = (e) => {
    e.preventDefault();
    setLocation(e.target.locationSubmit.value);
  };
  return (
    <>
      <form action="submit" onSubmit={handleSubmitLocation}>
        <input
          type="text"
          placeholder="Enter a location"
          name="locationSubmit"
        ></input>
        <input type="button" value="Submit"></input>
      </form>
      {data.coord && (
        <ul>
          <li>Location:{data.name}</li>
          <li>Temperature: {Math.round(data.main.temp - 273.15)}ºC</li>
          <li>Feels Like: {Math.round(data.main.feels_like - 273.15)}ºC</li>
          <li>
            Minimum: {Math.round(data.main.temp_min - 273.15)}ºC //Maximum:
            {Math.round(data.main.temp_max - 273.15)}ºC{' '}
          </li>
          <li>Current Humidity: {data.main.humidity}%</li>
        </ul>
      )}
    </>
  );
}

export default App;
