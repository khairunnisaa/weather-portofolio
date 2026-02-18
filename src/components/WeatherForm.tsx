import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

interface WeatherFormProps {
  onSearch: (city: string) => void;
}

const WeatherForm: React.FC<WeatherFormProps> = ({ onSearch }) => {
  const [city, setCity] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) onSearch(city);
    setCity("");

  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", justifyContent: "center", marginTop: "2rem", gap: 2 }}
    >
      <TextField
        label="Enter City"
        variant="outlined"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button variant="contained" type="submit">
        Search
      </Button>
    </Box>
  );
};

export default WeatherForm;