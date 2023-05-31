import { useMap } from 'react-leaflet/hooks';
import { useEffect } from 'react';
const AutoMapRecenter = ({ position }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [position]);
  return null;
};

export default AutoMapRecenter;
