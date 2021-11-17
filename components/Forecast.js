import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import styles from "../styles.js";

import Weather from "./Weather.js";

const Forecast = ({ data }) => {
  const [forecasts, setForecasts] = useState([]);
  useEffect(() => {
    const forecastData = data.list.map((f) => {
      const dt = new Date(f.dt * 1000);
      return {
        data: dt,
        hour: dt.getHours(),
        temp: Math.round(f.main.temp),
        icon: f.weather[0].icon,
        name: format(dt, "EEEE", { locale: fr }),
      };
    });

    setForecasts(forecastData);
  }, [data]);
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {forecasts.map((f, index) => (
        <Weather key={index} forecast={f} />
      ))}
    </ScrollView>
  );
};

export default Forecast;
