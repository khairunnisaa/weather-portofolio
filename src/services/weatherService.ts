const API_KEY = "cbf893c6d4d9dc219342119fd8606b0d";

export interface WeatherData {
  name: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
  wind: {
    speed: number;
  };
}

export const fetchWeatherByCity = async (
  city: string
): Promise<WeatherData> => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!res.ok) {
    throw new Error("Failed to fetch weather");
  }

  return res.json();
};