import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as Location from "expo-location";
import Button from "./common/Button.js";
import Link from "./common/Link.js";
import style from "../styles.js";

// Redux Integration
import { connect } from "react-redux";
import {
  fetchWeatherwithFiveDaysForecast,
  resetFetchWeather,
} from "../actions/fetchWeather.js";

const Search = ({
  navigation,
  fetchWeather: { loading },
  fetchWeatherwithFiveDaysForecast,
  resetFetchWeather,
}) => {
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("test");
    // Set title Header navigation
    navigation.setOptions({ title: "Rechercher une ville" });

    // if (nav) {
    //   navigation.navigate("Details");
    // }
  }, [navigation]);

  const search = () => {
    const param = {
      searchType: "name",
      data: {
        text,
      },
    };
    onSubmit(param);
  };

  const searchByLocation = async () => {
    // Authorization from user to use phone's location
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      return;
    }

    // Get user's current position by geolocation
    const location = await Location.getCurrentPositionAsync();

    const param = {
      searchType: "coords",
      data: {
        location,
      },
    };

    onSubmit(param);
  };

  const onSubmit = (params) => {
    resetFetchWeather();
    const { searchType, data } = params;

    const url =
      searchType === "name"
        ? "/forecast?q=" + data.text
        : "/forecast?lat=" +
          data.location.coords.latitude +
          "&lon=" +
          data.location.coords.longitude;

    fetchWeatherwithFiveDaysForecast(url);
    navigation.navigate("Details");
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => setText(value)}
        value={text}
        onSubmitEditing={() => search()}
        placeholder="Entrez une ville"
      />

      <Button onPress={() => search()} title="Rechercher" style={style} />
      <Text style={{ marginHorizontal: 10, marginVertical: 10 }}>
        Ou bien vous pouvez afficher la météo autour de vous
      </Text>
      <Link
        style={style.link}
        title="Me géolocaliser"
        onPress={() => searchByLocation()}
      >
        <Ionicons
          name="ios-location-outline"
          color="tomato"
          size={30}
          style={{
            height: 30,
            width: 30,
            alignSelf: "center",
            marginTop: 10,
          }}
        />
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 10,
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: "gray",
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
});

const mapStateToProps = (state) => ({
  fetchWeather: state.fetchWeather,
});

export default connect(mapStateToProps, {
  fetchWeatherwithFiveDaysForecast,
  resetFetchWeather,
})(Search);
