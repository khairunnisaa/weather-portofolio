import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AirIcon from "@mui/icons-material/Air";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import CloudIcon from "@mui/icons-material/Cloud";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import OpacityIcon from "@mui/icons-material/Opacity";

interface Props {
  weather: any;
}

const getWeatherIcon = (weatherMain: string) => {
  switch (weatherMain) {
    case "Clear":
      return <WbSunnyIcon fontSize={'large'} sx={{ color: "orange" }} />;
    case "Rain":
      return <OpacityIcon fontSize={'large'} sx={{ color: "blue" }} />;
    case "Thunderstorm":
      return <ThunderstormIcon fontSize={'large'} sx={{ color: "purple" }} />;
    case "Clouds":
      return <CloudIcon  fontSize={'large'} sx={{ color: "gray" }} />;
    default:
      return <CloudIcon />;
  }
};

export default function WeatherSidebar({ weather }: Props) {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Weather Dashboard
      </Typography>

      {!weather && (
        <Typography variant="body1">
          Click the globe to see the weather 🌍
        </Typography>
      )}

      {weather && (
        <Card
          sx={{
            bgcolor: "#1f2937",
            color: "white",
            borderRadius: 3,
          }}
        >
          <CardContent>
            <Box display="flex" alignItems="center" gap={1} mb={1}>
              <LocationOnIcon />
              <Typography variant="h6">
                {weather.name}, {weather.sys.country}
              </Typography>
            </Box>



            <Box display="flex" alignItems="center" gap={1} justifyContent={'space-between'}>
              <Typography variant="h3" fontWeight="bold" mb={1}>
                {Math.round(weather.main.temp)}°C
              </Typography>

              <Box display={"flex"} gap={1}>
                {getWeatherIcon(weather.weather[0].main)}
                <Typography variant="h6">{weather.weather[0].main}</Typography>
              </Box>

            </Box>

            <Divider sx={{ borderColor: "#374151", my: 2 }} />

            <Box display="flex" justifyContent="space-between" mb={1}>
              <Box display="flex" gap={1}>
                <WaterDropIcon />
                <Typography>Humidity</Typography>
              </Box>
              <Typography>{weather.main.humidity}%</Typography>
            </Box>

            <Box display="flex" justifyContent="space-between">
              <Box display="flex" gap={1}>
                <AirIcon />
                <Typography>Wind</Typography>
              </Box>
              <Typography>{weather.wind.speed} m/s</Typography>
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
}