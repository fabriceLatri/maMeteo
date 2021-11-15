import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const MyLink = ({ onPress, style, title, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.link}>{title}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    color: 'tomato',
    textDecorationLine: 'underline',
    fontSize: 16,
  },
});

export default MyLink;
