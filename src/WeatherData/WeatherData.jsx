const WeatherData = ({ data }) => {
  return (
    <ul>
      <li>Temperature: {Math.round(data.main.temp - 273.15)}ºC</li>
      <li>Feels Like: {Math.round(data.main.feels_like - 273.15)}ºC</li>
      <li>
        Minimum: {Math.round(data.main.temp_min - 273.15)}ºC //Maximum:
        {Math.round(data.main.temp_max - 273.15)}ºC
      </li>
      <li>Current Humidity: {data.main.humidity}%</li>
    </ul>
  );
};

export default WeatherData;
