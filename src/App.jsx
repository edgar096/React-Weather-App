import { useState, useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import WeatherData from './WeatherData/WeatherData';
import MapWidget from './Map/MapWidget';
import { Grid, MantineProvider } from '@mantine/core';
import LocationForm from './UI/Form/LocationForm';
import ErrorBoundary from './UI/ErrorBoundary/ErrorBoundary';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AutoMapRecenter from './Map/AutoMapRecenter';

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  async function getData(location) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

      let response = await fetch(url);
      if (!response.ok) {
        throw new Error('Bad API Response');
      }
      let urlData = await response.json();
      setData(urlData);
    } catch (error) {
      setError(error);
      throw error;
    }
  }

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    getData(e.target.locationSubmit.value);
  };
  return (
    <>
      <LocationForm handler={handleSubmitLocation} />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        {data.cod && (
          <>
            {/* <h1>Location:{data.name}</h1> */}
            {/* <WeatherData data={data} /> */}
            <MapContainer
              center={[data.coord.lat, data.coord.lon]}
              zoom={13}
              scrollWheelZoom={false}
              style={{ width: '100%', height: 'calc(100vh - 4rem)' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[data.coord.lat, data.coord.lon]}></Marker>
              <AutoMapRecenter position={[data.coord.lat, data.coord.lon]} />
            </MapContainer>
          </>
        )}
      </ErrorBoundary>
    </>
  );
}

export default App;
