import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import useAxios from "../API/OpenWeatherMap";

import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

const DetailsScreen = ({ route, navigation }) => {
  const {
    param: { searchType, data },
  } = route.params;

  const url =
    searchType === "name"
      ? "/forecast?q=" + data.text
      : "/forecast?lat=" +
        data.location.coords.latitude +
        "&lon=" +
        data.location.coords.longitude;

  const { response, error, loading } = useAxios({
    method: "GET",
    url: url,
  });

  const [resData, setResData] = useState([]);

  useEffect(() => {
    if (response !== null) {
      setResData(response);
      navigation.setOptions({
        title: response.city.name,
      });
    } else if (error) {
      navigation.setOptions({ title: "Ouuups" });
    }
  }, [response, error]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ActivityIndicator color="tomato" size="large" />
      </View>
    );
  } else if (resData.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Aucune ville ne correspond à votre recherche.</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <CurrentWeather data={resData} />
        <Forecast data={resData} />
      </View>
    );
  }
};

export default DetailsScreen;
