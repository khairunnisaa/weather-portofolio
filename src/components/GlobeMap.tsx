import Globe from "react-globe.gl";
import { useEffect, useRef } from "react";

interface Props {
  setWeather: (data: any) => void;
}

export default function GlobeMap({ setWeather }: Props) {
  // @ts-ignore
  const globeRef = useRef<any>();


  useEffect(() => {

    if (globeRef.current) {
      globeRef.current.controls().autoRotate = true;
      globeRef.current.controls().autoRotateSpeed = 0.5;
    }
  }, []);

  const handleClick = async ({ lat, lng }: any) => {
    const API_KEY = "cbf893c6d4d9dc219342119fd8606b0d";

    const res = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
    );

    const data = await res.json();
    setWeather(data);
  };

  return (
    <Globe
      ref={globeRef}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
      atmosphereColor="lightskyblue"
      atmosphereAltitude={0.25}
      backgroundColor="#000"
      onGlobeClick={handleClick}
    />
  );
}