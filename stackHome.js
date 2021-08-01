import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainDashBoard from './dashb';
import { profile } from './profile';
import ProductScanRNCamera from './camsrc';
import Time from './sr2';

const HStack = createStackNavigator();

function HomeStack() {
    return (
      <NavigationContainer>
        <HStack.Navigator
        screenOptions={{
          headerShown: false
        }}
        >
          <HStack.Screen name="Home" component={MainDashBoard} />
          {/* <Stack.Screen name="Home" component={MainDashBoard} /> */}
          <HStack.Screen name="Profile" component={profile} />
          <HStack.Screen name="Scan QR" component={ProductScanRNCamera} />
          <HStack.Screen name="Scan Result" component={Time} />
          
        </HStack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default HomeStack;