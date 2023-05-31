import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import AutoMapRecenter from '../Map/AutoMapRecenter';

const MapWidget = ({ data }) => {
  let position = [data.coord.lat, data.coord.lon];
  return (
    <MapContainer
      center={position}
      zoom={13}
      scrollWheelZoom={false}
      style={{ width: '100%', height: 'calc(100vh - 4rem)' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
      <AutoMapRecenter position={position} />
    </MapContainer>
  );
};

export default MapWidget;
