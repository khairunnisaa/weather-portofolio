import { useState } from "react";
import { Box, CssBaseline, Drawer, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import GlobeMap from "./components/GlobeMap";
import WeatherSidebar from "./components/WeatherSidebar";
import ForecastChart from "./components/ForecastChart";

const drawerWidth = 360;

export default function App() {
  const [weather, setWeather] = useState<any>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ display: "flex", bgcolor: "#0f172a" }}>
      <CssBaseline />

      <Drawer
        variant={isMobile ? "temporary" : "persistent"}
        open={true}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            bgcolor: "#111827",
            color: "white",
            borderRight: "1px solid #1f2937",
          },
        }}
      >
        <WeatherSidebar weather={weather} />
        {/*<ForecastChart data={weather}/>*/}
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: "100vh",
          transition: "all 0.3s ease",
        }}
      >
        <GlobeMap setWeather={setWeather} />
      </Box>
    </Box>
  );
}