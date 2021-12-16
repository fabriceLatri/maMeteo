import {
  FETCH_WEATHER,
  RESET_WEATHER,
  SET_RESET_WEATHER,
} from '../constants/types.js';

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
    default:
      return state;
  }
}

export default fetchWeather;
