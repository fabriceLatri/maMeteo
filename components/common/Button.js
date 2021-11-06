import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyButton = ({ onPress, style, title }) => {
  return (
    <TouchableOpacity
      style={style}
      onPress={onPress}
      >
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styleText = {
  color: '#FFFFFF',
  padding:10
}

export default MyButton;