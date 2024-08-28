import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { fromLonLat } from "ol/proj";
import { useEffect } from "react";
import { Box } from "@mui/material";

export function MapComponent() {
  useEffect(() => {
    const map = new Map({
      target: "map",
      layers: [new TileLayer({ source: new OSM() })],
      view: new View({
        center: fromLonLat([35.2433, 38.9637]),
        zoom: 6,
      }),
    });

    return () => map.setTarget(null);
  }, []);

  return (
    <Box
      id="map"
      sx={{
        height: "450px",
        width: "100%",
      }}
    ></Box>
  );
}
