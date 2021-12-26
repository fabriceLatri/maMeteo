import { combineReducers } from 'redux';
import fetchWeather from './fetchWeatherReducer';
import toogleFavorite from './favoriteReducer';

export default combineReducers({
  fetchWeather,
  toogleFavorite,
});
