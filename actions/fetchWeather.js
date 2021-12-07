import { FETCH_WEATHER } from '../constants/types.js';
import axios from 'axios';

const APIKEY = '587d77d8f52a05375709a6e598b6a28c';

export const fetchWeatherwithFiveDaysForecast = (url) => async (dispach) => {
  try {
    const uri =
      'https://api.openweathermap.org/data/2.5' +
      url +
      '&appid=' +
      APIKEY +
      '&lang=fr&units=metric';

    const response = await axios.get(uri);

    if (response.status !== 200)
      throw new Error("Quelquechose n'a pas fonctionné");

    dispach({
      type: FETCH_WEATHER,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};
