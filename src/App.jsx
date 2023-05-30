import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import WeatherData from './WeatherData/WeatherData';
import MapWidget from './Map/MapWidget';

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState(null);
  const [position, setPosition] = useState([]);

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
        <>
          <MapWidget data={data} />
          <WeatherData data={data} />
        </>
      )}
    </>
  );
}

export default App;
