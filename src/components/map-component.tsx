
import {useRef, useEffect} from 'react';
import 'leaflet/dist/leaflet.css';
import { City } from '../types/city';
import { Point } from '../types/point';
import { Marker, layerGroup } from 'leaflet';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../consts/map';
import leaflet from 'leaflet';
import { useMap } from '../hooks/map-hook';


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
  points: Point[];
  selectedPoint: Point | undefined;
  isOnMainPage?: boolean;
}

export function Map(props: MapProps): React.JSX.Element {
  const { city, points, selectedPoint, isOnMainPage } = props;

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

  return (
    <section
      className={`map ${isOnMainPage ? 'cities__map' : 'offer__map'}`}
      ref={mapRef}
    >
    </section>
  );
}
