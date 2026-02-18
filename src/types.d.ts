export interface WeatherDetails {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface WeatherResponse {
  name: string;
  weather: WeatherDetails[];
  main: MainWeather;
}