import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const ECMAP = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [85.330807, 27.727948],
      zoom: 13,
      // dragPan: false,
    });
    // map.scrollZoom.disable();
    // if (map.tap) map.tap.disable();

    new mapboxgl.Marker()
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>Yatri Experience Center</h3>`)
      )
      .setLngLat([85.32983251439876, 27.730766501226416])
      .addTo(map);
  }, []);

  return <div id="map"></div>;
};

export default ECMAP;
