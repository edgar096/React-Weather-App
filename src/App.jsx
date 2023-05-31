import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './App.css';
import 'leaflet/dist/leaflet.css';
import WeatherData from './WeatherData/WeatherData';
import MapWidget from './Map/MapWidget';
import { Grid, MantineProvider } from '@mantine/core';
import LocationForm from './UI/Form/LocationForm';

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
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <>
        <Grid>
          <Grid.Col span={12}>
            <h1>Location:{data.name}</h1>
          </Grid.Col>

          <Grid.Col span={12}>
            <LocationForm handler={handleSubmitLocation} />
          </Grid.Col>
          <Grid.Col span={12}>
            {data.coord && (
              <>
                <MapWidget data={data} />
                <WeatherData data={data} />
              </>
            )}
          </Grid.Col>
        </Grid>
      </>

    </MantineProvider>
  );
}

export default App;
