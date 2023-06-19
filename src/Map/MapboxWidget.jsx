import { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
mapboxgl.accessToken =
  'pk.eyJ1IjoidGVzdC1zeC0yMyIsImEiOiJjbGowMDI1aWIwZXphM2dwOXE3eGw4dzZ0In0.GuFEg5OvhR2Yzekt3mVVQw';

export default function MapboxWidget({ data }) {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const marker = useRef(null);
  const [lng, setLng] = useState(null);
  const [lat, setLat] = useState(null);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    if (map.current && marker.current) {
      map.current.setCenter([data.coord.lon, data.coord.lat]);
      marker.current.setLngLat([data.coord.lon, data.coord.lat]);
    }

    // if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [data.coord.lon, data.coord.lat],
      zoom: zoom,
    });

    marker.current = new mapboxgl.Marker({
      color: 'black',
    })
      .setLngLat([data.coord.lon, data.coord.lat])
      .addTo(map.current);
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    // return () => {
    //   if (marker.current) {
    //     marker.current.remove();
    //   }
    //   if (map.current) {
    //     map.current.remove();
    //   }
    // };
  }, [data]);

  return (
    <div>
      <div className="sidebar">
        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
      </div>
      <div ref={mapContainer} className="map-container" />
    </div>
  );
}
