import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton } from 'react-native';
import CustomButton from './CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { Assets, createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './HomeScreen';
import LogInScreen from './LogInScreen';
// import LogoTitle from './LogInScreen';

const Stack = createStackNavigator();

// For The header on Log In. Idk how to pass this from LogInScreen.js to here.
// options={{ headerTitle: props => <LogoTitle {...props} /> }}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Log In" component={LogInScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;