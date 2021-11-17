import React from "react";
import { Text, View, Image } from "react-native";
import styles from "../styles.js";

const getIcon = (icon) => `https://openweathermap.org/img/wn/${icon}@2x.png`;

const Weather = ({ forecast }) => {
  return (
    <View style={styles.weatherContainerLight}>
      <Text>{forecast.name}</Text>
      <Text>{forecast.hour}h</Text>
      <Image
        source={{ uri: getIcon(forecast.icon) }}
        style={styles.weatherImg}
      />
      <Text style={styles.weatherTemp}>{forecast.temp}°C</Text>
    </View>
  );
};

export default Weather;
