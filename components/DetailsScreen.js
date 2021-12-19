import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

// Redux
import { connect } from 'react-redux';

import CurrentWeather from './CurrentWeather';
import Forecast from './Forecast';

const DetailsScreen = ({
  navigation,
  fetchWeather: { currentWeather, loading },
}) => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    if (!loading) {
      setResData(currentWeather);
      console.log(currentWeather);
      navigation.setOptions({
        headerBackTitle: 'Rech.',
        title: currentWeather.city ? currentWeather.city.name : 'Ooooops',
      });
    }
  }, [loading, currentWeather, navigation]);

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

export default connect(mapStateToProps, {})(DetailsScreen);
