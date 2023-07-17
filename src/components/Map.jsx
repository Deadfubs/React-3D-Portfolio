import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const Map = () => {
  return (
    <ComposableMap
        projection="geoMercator"
        projectionConfig={{
        center: [-75, -15],
        scale: 520,
        }}
        style={{width:"100%", height:"100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#838383"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-43.9386, -19.9245]} // Coordenadas de Belo Horizonte ou outra cidade da América do Sul
        dx={-10}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round",
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Belo Horizonte"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default Map;