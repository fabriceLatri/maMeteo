import React, { useState } from 'react';
import { View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function Home() {
  const [text, setText] = useState('Meudon');

  return (
    <View style={{ marginVertical: 40 }}>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={(value) => setText(value)}
        value={text}
      />
    </View>
  );
}
