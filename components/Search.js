import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Button from './common/Button.js';
import Link from './common/Link.js';
import style from '../styles.js';

const Search = ({ navigation }) => {
  const [text, setText] = useState('');

  const search = () => {
    navigation.navigate('Details');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => setText(value)}
        value={text}
        onSubmitEditing={() => search()}
        placeholder='Entrez une ville'
      />

      <Button
        onPress={() => search()}
        title='Rechercher'
        style={style}
      />
      <Text style={{ marginHorizontal: 10,
      marginVertical: 10 
      }}>Ou bien vous pouvez afficher la météo autour de vous</Text>
      <Link style={style.link} title="Me géolocaliser" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal:10
  },
  textInput: {
    height: 40,
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 10,
  },
});

export default Search;
