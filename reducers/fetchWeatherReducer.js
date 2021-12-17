import {
  FETCH_WEATHER,
  FETCH_WEATHER_ERROR,
  RESET_WEATHER,
  SET_RESET_WEATHER,
} from "../constants/types.js";

const initialState = {
  currentWeather: [],
  loading: true,
  reset: false,
};

function fetchWeather(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
        loading: false,
      };

    case SET_RESET_WEATHER:
      return {
        ...state,
        reset: action.payload,
      };

    case RESET_WEATHER:
      return {
        ...state,
        currentWeather: [],
        loading: true,
        reset: false,
      };

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        currentWeather: [],
      };

    default:
      return state;
  }
}

export default fetchWeather;
