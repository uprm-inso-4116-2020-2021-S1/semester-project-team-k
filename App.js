import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton } from 'react-native';
import CustomButton from './CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { Assets, createStackNavigator } from '@react-navigation/stack';

import IntroScreen from './IntroScreen';
import LogInScreen from './LogInScreen';
import BrowseScreen from './BrowseScreen';
import SearchScreen from './SearchScreen';
import CartScreen from './CartScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Browse">
        <Stack.Screen name="Intro" component={IntroScreen} />
        <Stack.Screen name="Log In" component={LogInScreen} />
        <Stack.Screen name="Browse" component={BrowseScreen} />
        <Stack.Screen name="Search" component={SearchScreen} /> 
        <Stack.Screen name="Cart" component={CartScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;