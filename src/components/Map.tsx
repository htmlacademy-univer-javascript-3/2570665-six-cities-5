import { useMap } from '../hoocks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../DataTypes/consts';
import {useRef, useEffect} from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { City } from '../DataTypes/city';
import { Offer } from '../DataTypes/offer-type';
import { Marker, layerGroup } from 'leaflet';

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
    isOnMainPage?: boolean;
}

export function Map({city, points, selectedPoint, isOnMainPage}: MapProps) {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon,
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, selectedPoint]);

  const className = isOnMainPage ? 'cities__map map' : 'offer__map map';
  return (
    <section className={className} ref={mapRef}></section>
  );
}
