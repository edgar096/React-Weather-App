import { useState, useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import WeatherData from './WeatherData/WeatherData';
import LocationForm from './UI/Form/LocationForm';
import ErrorBoundary from './UI/ErrorBoundary/ErrorBoundary';
import 'leaflet/dist/leaflet.css';
import { MantineProvider, Text } from '@mantine/core';
import MapWidget from './Map/MapWidget';

function App() {
  const apiKey = import.meta.env.VITE_API_KEY;

  const [data, setData] = useState({});
  const [error, setError] = useState(null);

  async function getData(location) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

      let response = await fetch(url);
      // if (!response.ok) {
      //   throw new Error('Bad API Response');
      // }
      let urlData = await response.json();
      setData(urlData);
      console.log(response);
    } catch (error) {
      //console.log(error);
      setError(error);
      // throw error;
    }
  }

  const handleSubmitLocation = (e) => {
    e.preventDefault();
    getData(e.target.locationSubmit.value);
  };
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
        <LocationForm handler={handleSubmitLocation} />
        <ErrorBoundary fallback={<h1>error</h1>} key={data.cod}>
          {data.cod && (
            <>
              <h1>Location:{data.name}</h1>
              <WeatherData data={data} />
              <MapWidget data={data} />
            </>
          )}
        </ErrorBoundary>
      </>
    </MantineProvider>
  );
}

export default App;
