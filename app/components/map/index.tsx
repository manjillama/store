import React, { useEffect } from 'react';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl';
import { APP } from '../../constants';

mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

const ECMAP = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-73.98968789185483, 40.741239232820675],
      zoom: 13,
      // dragPan: false,
    });
    // map.scrollZoom.disable();
    // if (map.tap) map.tap.disable();
    new mapboxgl.Marker()
      .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // add popups
          .setHTML(`<h3>${APP.NAME} Store</h3>`)
      )
      .setLngLat([-73.98968789185483, 40.741239232820675])
      .addTo(map);
  }, []);

  return <div id="map"></div>;
};

export default ECMAP;
