"use client";
import React, { useEffect, useState } from "react";
import {
  GoogleMap,
  LoadScript,
  Marker,
  InfoWindow,
} from "@react-google-maps/api";
import Image from "next/image";

interface MapProps {
  apiKey: string;
  latitude: number;
  longitude: number;
  address: string;
}

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "1.5rem",
};

const Map: React.FC<MapProps> = ({ apiKey, latitude, longitude, address }) => {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [isInfoWindowOpen, setIsInfoWindowOpen] = useState<boolean>(false);

  const mapOptions: google.maps.MapOptions = {
    zoomControl: true,
    streetViewControl: false,
    mapTypeControl: false,
    disableDefaultUI: true,
  };

  const onMapLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);

    mapInstance.setOptions({
      zoomControlOptions: {
        position: google.maps.ControlPosition.LEFT_CENTER,
      },
    });
  };

  useEffect(() => {
    if (map) {
      const geocoder = new google.maps.Geocoder();
      const latLng = new google.maps.LatLng(latitude, longitude);

      geocoder.geocode({ location: latLng }, (results, status) => {
        if (status === google.maps.GeocoderStatus.OK && results && results[0]) {
          setIsInfoWindowOpen(true);
        }
      });
    }
  }, [latitude, longitude, map]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{ lat: latitude, lng: longitude }}
        zoom={15}
        options={mapOptions}
        onLoad={onMapLoad}
      >
        <Marker position={{ lat: latitude, lng: longitude }} />
        {isInfoWindowOpen && (
          <InfoWindow
            position={{ lat: latitude, lng: longitude }}
            onCloseClick={() => setIsInfoWindowOpen(false)}
          >
            <div>

            <Image src={'/LOGO.png'} alt="logo" width={200} height={40} />
            <div className="text-center py-3 font-semibold">{address}</div>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
