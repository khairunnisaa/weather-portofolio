import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { WeatherResponse } from "../types";

interface WeatherCardProps {
  weather: WeatherResponse | null;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const icon = weatherDetails[0].icon;
  const description = weatherDetails[0].description;
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 200 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
    >
      <Card
        sx={{
          width: 320,
          borderRadius: 4,
          backdropFilter: "blur(15px)",
          background: "rgba(255,255,255,0.2)",
          color: "#fff",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
        }}
      >
        <CardContent>
          <Typography variant="h5">{name}</Typography>
          <img
            src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
            alt={description}
            style={{ width: 80 }}
          />
          <Typography variant="h6">{Math.round(main.temp)}°C</Typography>
          <Typography variant="body1" sx={{ textTransform: "capitalize" }}>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default WeatherCard;