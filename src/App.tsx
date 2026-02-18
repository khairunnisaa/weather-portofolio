import React, { useState } from "react";
import GlobeMap from "./components/GlobeMap";
import {
  fetchWeatherByCity,
  WeatherData,
} from "./services/weatherService";

import { fetchCapitalByCountry } from "./services/countryService";

const capitalMap: Record<string, string> = {
  Indonesia: "Jakarta",
  Japan: "Tokyo",
  France: "Paris",
  Germany: "Berlin",
  Canada: "Ottawa",
  Brazil: "Brasilia",
  India: "New Delhi",
  UnitedStates: "Washington",
};

function App() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const handleCountrySelect = async (country: string) => {
    try {
      setLoading(true);

      const capital = await fetchCapitalByCountry(country);

      if (!capital) {
        console.log("Capital not found:", country);
        return;
      }

      const weatherData = await fetchWeatherByCity(capital);

      setWeather(weatherData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ position: "relative", height: "100vh" }}>

      <GlobeMap onCountrySelect={handleCountrySelect} />

      {loading && (
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            color: "white",
          }}
        >
          Loading weather data...
        </div>
      )}

      {weather && (
        <div
          style={{
            position: "absolute",
            top: 20,
            left: 20,
            background: "rgba(15,23,42,0.9)",
            padding: 20,
            borderRadius: 12,
            color: "white",
            width: 250,
            backdropFilter: "blur(10px)",
          }}
        >
          <h2>{weather.name}</h2>
          <p>🌡 {weather.main.temp}°C</p>
          <p>💧 Humidity: {weather.main.humidity}%</p>
          <p>🌬 Wind: {weather.wind.speed} m/s</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;