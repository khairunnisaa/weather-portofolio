import React, { useEffect, useRef, useState } from "react";
import Globe from "react-globe.gl";
import type { Feature, Geometry } from "geojson";

interface Props {
  onCountrySelect: (country: string) => void;
}

const GlobeMap: React.FC<Props> = ({ onCountrySelect }) => {
  const globeRef = useRef<any>(null);
  const [countries, setCountries] = useState<Feature<Geometry>[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/world.geojson"
    )
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.features);
      });

    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
      backgroundColor="#0f172a"
      polygonsData={countries}
      polygonAltitude={0.01}
      polygonCapColor={() =>
        `hsl(${Math.random() * 360}, 60%, 60%)`
      }
      polygonSideColor={() => "rgba(59,130,246,0.2)"}
      polygonStrokeColor={() => "#111"}
      onPolygonClick={(d: any) => {
        if (d?.properties?.name) {
          onCountrySelect(d.properties.name);
        }
      }}
    />
  );
};

export default GlobeMap;