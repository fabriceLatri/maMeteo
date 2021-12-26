import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';

// Redux
import { connect } from 'react-redux';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';
import { TOOGLE_FAVORITE_WEATHER } from '../constants/types';

const DetailsScreen = ({
  navigation,
  fetchWeather: { currentWeather, loading },
  dispatch,
}) => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    if (!loading) {
      setResData(currentWeather);
      navigation.setOptions({
        title: currentWeather.city ? currentWeather.city.name : 'Ooooops',
      });
    }
  }, [loading, currentWeather, navigation]);

  const toogleFavorite = () => {
    console.log('test');
    const action = { type: TOOGLE_FAVORITE_WEATHER, payload: currentWeather };
    dispatch(action);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: 'Rech.',
      headerRight:
        !loading && resData.length !== 0
          ? () => (
              <FontAwesomeIcon
                name='star'
                color='#FFF'
                size={20}
                style={{
                  paddingRight: 20,
                }}
                onPress={() => toogleFavorite()}
              />
            )
          : () => {
              return;
            },
    });
  }, [navigation, loading, resData]);

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator color='tomato' size='large' />
      </View>
    );
  } else if (resData.length === 0) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Aucune ville ne correspond à votre recherche.</Text>
      </View>
    );
  } else {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <CurrentWeather data={resData} />
        <Forecast data={resData} />
      </View>
    );
  }
};

const mapStateToProps = (state) => ({
  fetchWeather: state.fetchWeather,
});

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: (action) => {
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsScreen);
