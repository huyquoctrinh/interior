import * as React from 'react';
import { View, Text, Button } from 'react-native';

function Time({ route, navigation }) {
    const { itemId, otherParam } = route.params;
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Result QR:</Text>
      <Text>{otherParam}</Text>
      
    </View>
  );
}


export default Time;