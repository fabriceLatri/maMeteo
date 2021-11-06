import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Button from './common/Button.js';
import style from '../styles.js'

export default function Home({ navigation }) {
  const [text, setText] = useState('Meudon');

  const search = () => {
    navigation.navigate('About');
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        onChangeText={(value) => setText(value)}
        value={text}
      />

      <Button
        onPress={() => search()}
        title="Rechercher"
        style={style.button}
        /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginHorizontal: 10
  }
})
