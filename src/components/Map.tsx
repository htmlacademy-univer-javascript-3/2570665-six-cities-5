import { useMap } from '../hoocks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../DataTypes/consts';
import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../DataTypes/city';
import { Offer } from '../DataTypes/offerTypes/offer-type';

const defaultCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = leaflet.icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

interface MapProps {
    city: City;
    points: Offer[];
    selectedPoint: Offer | undefined;
}

export function Map({city, points, selectedPoint}: MapProps) {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.city.latitude,
            lng: point.city.longitude,
          }, {
            icon: (selectedPoint !== undefined && point.city === selectedPoint.city)
              ? currentCustomIcon
              : defaultCustomIcon,
          })
          .addTo(map);
      });
    }
  }, [map, points, selectedPoint]);


  return (
    <section className="cities__map map" ref={mapRef}></section>
  );
}

