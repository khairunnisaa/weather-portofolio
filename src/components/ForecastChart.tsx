import React from "react";
import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Area,
  AreaChart,
} from "recharts";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

interface ForecastProps {
  data: { date: string; temp: number }[];
}

const ForecastChart: React.FC<ForecastProps> = ({ data }) => {
  if (!data.length) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Box
        sx={{
          mt: 5,
          p: 3,
          borderRadius: 4,
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.15)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
          color: "#fff",
        }}
      >
        <Typography variant="h6" sx={{ mb: 2 }}>
          3-Day Temperature Trend
        </Typography>

        <ResponsiveContainer width="100%" height={250}>
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ffffff" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#ffffff" stopOpacity={0.1} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.2)" />
            <XAxis dataKey="date" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip
              contentStyle={{
                backgroundColor: "rgba(0,0,0,0.8)",
                border: "none",
                borderRadius: "8px",
                color: "#fff",
              }}
            />
            <Area
              type="monotone"
              dataKey="temp"
              stroke="#ffffff"
              strokeWidth={3}
              fill="url(#colorTemp)"
              animationDuration={1200}
            />
          </AreaChart>
        </ResponsiveContainer>
      </Box>
    </motion.div>
  );
};

export default ForecastChart;