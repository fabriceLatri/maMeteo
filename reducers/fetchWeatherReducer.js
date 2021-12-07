import { FETCH_WEATHER } from '../constants/types.js';

const initialState = {
  currentWeather: [],
  loading: true,
};

function fetchWeather(state = initialState, action) {
  switch (action.type) {
    case FETCH_WEATHER:
    console.log(action.payload);
      return {
        ...state,
        currentWeather: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default fetchWeather;
