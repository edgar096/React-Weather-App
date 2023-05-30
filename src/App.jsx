import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import WeatherData from './WeatherData/WeatherData';
import MapWidget from './Map/MapWidget';

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState({});
  const [location, setLocation] = useState(null);
  const [position, setPosition] = useState([]);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`;

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
  console.log(import.meta.env.VITE_API_KEY);
  return (
    <>
      <h1>Location:{data.name}</h1>
      <form action="submit" onSubmit={handleSubmitLocation}>
        <input
          type="text"
          placeholder="Enter a location"
          name="locationSubmit"
        ></input>
        <input type="button" value="Submit"></input>
      </form>

      {data.coord && (
        <>
          <MapWidget data={data} />
          <WeatherData data={data} />
        </>
      )}
    </>
  );
}

export default App;
