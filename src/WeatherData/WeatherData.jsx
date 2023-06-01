import { Grid, SimpleGrid } from '@mantine/core';

const WeatherData = ({ data }) => {
  return (
    <>
      <SimpleGrid cols={2} spacing="xl">
        <span>Temperature: {Math.round(data.main.temp)}ºC</span>
        <span>Feels Like: {Math.round(data.main.feels_like)}ºC</span>
        <SimpleGrid cols={3} spacing="xl">
          <span>Minimum: {Math.round(data.main.temp_min)}ºC</span>
          <span>Maximum:{Math.round(data.main.temp_max)}ºC</span>
        </SimpleGrid>
        <span> Current Humidity: {data.main.humidity}%</span>
      </SimpleGrid>
      {/* <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
        <Grid.Col span={6}>
          Temperature: {Math.round(data.main.temp)}ºC
        </Grid.Col>
        <Grid.Col span={6}>
          Feels Like: {Math.round(data.main.feels_like)}ºC
        </Grid.Col>
        <Grid.Col span={6}>
          <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            <Grid.Col span={6}>
              Minimum: {Math.round(data.main.temp_min)}ºC
            </Grid.Col>
            <Grid.Col span={6}>
              Maximum:
              {Math.round(data.main.temp_max)}ºC
            </Grid.Col>
          </Grid>
        </Grid.Col>
        <Grid.Col span={6}>Current Humidity: {data.main.humidity}%</Grid.Col>
      </Grid> */}
    </>
  );
};

export default WeatherData;
