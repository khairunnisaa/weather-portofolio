import React from "react";
import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";

interface Props {
  type?: string;
}

const WeatherParticles: React.FC<Props> = ({ type }) => {
  const isRain = type?.includes("09") || type?.includes("10");
  const isSnow = type?.includes("13");

  if (!isRain && !isSnow) return null;

  const options: ISourceOptions = {
    fullScreen: { enable: false },
    particles: {
      number: { value: 60 },
      size: { value: isSnow ? 4 : 2 },
      move: {
        enable: true,
        direction: "bottom",
        speed: isSnow ? 1 : 4,
      },
      opacity: { value: 0.6 },
    },
  };

  return (
    <Particles
      id="weather-particles"
      options={options}
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
      }}
    />
  );
};

export default WeatherParticles;