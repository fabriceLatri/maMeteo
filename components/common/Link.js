import React from 'react';
import { TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native';
import { useTheme } from "@react-navigation/native";

const MyLink = ({ onPress, style, title }) => {
  const scheme = useColorScheme();
  return (
    <TouchableOpacity
      onPress={onPress}
      >
      <Text 
        style={styles.link}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  link: {
    textAlign: 'center',
    color: 'tomato',
    textDecorationLine: 'underline',
    fontSize: 16
  }
});

export default MyLink;