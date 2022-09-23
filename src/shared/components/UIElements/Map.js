import * as React from "react";
import './Map.css'

const Map = ({ className, style, center, zoom }) => {
  const mapRef = React.useRef();

  React.useEffect(() => {
    const map = new window.google.maps.Map(mapRef.current, {
      center: center,
      zoom: zoom,
    });

    new window.google.maps.Marker({ position: center, map: map });
  }, [center, zoom]);

  return <div ref={mapRef} className={`map ${className}`} style={style}></div>;
};

export default Map;
