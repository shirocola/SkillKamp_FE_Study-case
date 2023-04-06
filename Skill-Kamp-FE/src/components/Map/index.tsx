import React from "react";
import "./style.scss";

interface MapProps {
  latitude: number;
  longitude: number;
}

const Map = ({ latitude, longitude }: MapProps) => {
  const mapUrl = `https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png`;

  return (
    <div className="map-container">
      <iframe
        title="map"
        className="map"
        src={`https://www.openstreetmap.org/export/embed.html?bbox=${longitude},${latitude},${longitude},${latitude}&amp;layer=mapnik`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Map;
