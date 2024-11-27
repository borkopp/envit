"use client";

import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";

interface MapProps {
  center: [number, number];
  marker: [number, number];
}

const Map = ({center, marker}: MapProps) => {
  return (
    <MapContainer center={center} zoom={13} scrollWheelZoom={false} style={{height: "100%", width: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={marker}>
        <Popup>Event location</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
