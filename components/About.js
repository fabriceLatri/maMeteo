import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function About() {
  return (
    <View style={styles.view}>
      <Text style={styles.title}>A propos de moi</Text>
      <Text>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia
        deserunt, error ea, doloremque officiis voluptatum amet itaque cum
        aspernatur iure perferendis eius magni veritatis molestias, deleniti
        consequatur aperiam vel esse.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    margin: 20,
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
  },
});
