import { combineReducers } from 'redux';
import fetchWeather from './fetchWeatherReducer';

export default combineReducers({
  fetchWeather,
});
