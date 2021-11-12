import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { useTheme } from "@react-navigation/native";

const MyButton = ({ onPress, style, title }) => {
  const scheme = useColorScheme();
  return (
    <TouchableOpacity
      style={
        scheme === 'dark' ? 
        style.buttonDark
        :
        style.buttonLight
      }
      onPress={onPress}
      >
      <Text style={
        scheme === 'dark' ? 
        styles.buttonDark
        :
        styles.buttonLight
      }>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonLight: {
    color: '#FFFFFF',
    padding:10
  },
  buttonDark: {
    color: 'tomato',
    padding: 10
  }
});

export default MyButton;