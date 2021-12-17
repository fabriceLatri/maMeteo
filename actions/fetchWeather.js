import {
  FETCH_WEATHER,
  RESET_WEATHER,
  SET_RESET_WEATHER,
  FETCH_WEATHER_ERROR,
} from "../constants/types.js";
import axios from "axios";

const APIKEY = "587d77d8f52a05375709a6e598b6a28c";

export const fetchWeatherwithFiveDaysForecast = (url) => async (dispatch) => {
  try {
    const uri =
      "https://api.openweathermap.org/data/2.5" +
      url +
      "&appid=" +
      APIKEY +
      "&lang=fr&units=metric";

    const response = await axios.get(uri);

    console.log(response);

    dispatch({
      type: FETCH_WEATHER,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_WEATHER_ERROR,
    });
  }
};

export const setReset = (resetBool) => async (dispatch) => {
  dispatch({
    type: SET_RESET_WEATHER,
    payload: resetBool,
  });
};

export const resetFetchWeather = () => async (dispatch) => {
  dispatch({
    type: RESET_WEATHER,
  });
};
