import { useState, useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';
import WeatherData from './WeatherData/WeatherData';
import MapWidget from './Map/MapWidget';
import { Grid, MantineProvider } from '@mantine/core';
import LocationForm from './UI/Form/LocationForm';
import ErrorBoundary from './UI/ErrorBoundary/ErrorBoundary';

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
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
        <Grid>
          <Grid.Col span={12}>
            {data.name && <h1>Location:{data.name}</h1>}
          </Grid.Col>

          <Grid.Col span={12}>
            <LocationForm handler={handleSubmitLocation} />
          </Grid.Col>
          <Grid.Col span={12}>
            <ErrorBoundary fallback={<h1>ERROR</h1>}>
              {data.coord && (
                <>
                  <WeatherData data={data} />

                  <MapWidget data={data} />
                </>
              )}
            </ErrorBoundary>
          </Grid.Col>
        </Grid>
      </>
    </MantineProvider>
  );
}

export default App;
