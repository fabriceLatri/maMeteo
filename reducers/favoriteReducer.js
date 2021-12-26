import { TOOGLE_FAVORITE_WEATHER } from '../constants/types';

const initialState = {
  favoritesCities: [],
};

export default toogleFavorite = (state = initialState, action) => {
  switch (action.type) {
    case TOOGLE_FAVORITE_WEATHER:
      const favoriteCityIndex = state.favoriteCities.findIndex(
        (item) => item.id === action.payload.id
      );
      const nextState =
        favoriteCityIndex !== -1
          ? {
              ...state,
              favoriteCities: state.favoriteCities.filter(
                (item, index) => index !== favoriteCityIndex
              ),
            }
          : {
              ...state,
              favoriteCities: action.payload,
            };
      return nextState || state;

    default:
      return state;
  }
};
