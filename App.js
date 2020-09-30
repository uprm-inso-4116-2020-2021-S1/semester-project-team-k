import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.logInContainerStack}>
        <View style={styles.logInContainer}>
          <TextInput placeholder = 'Username' style = {styles.logInText} />
          <TextInput placeholder = 'Password' style = {styles.logInText}/>
          <Button title = 'Log In'/>
        </View>
        <View style={styles.bannerContainerStack}>
          <View style={styles.bannerContainer}>
            <View style={styles.logoImage}></View>
            <Text style={styles.logoText}>
              Books · School Supplies · School Merch · Clothing
            </Text>
          </View>
          <View style={styles.rect}></View>
          <View style={styles.rect2}></View>
        </View>
      </View>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logInContainer: {
    width: '60%',
    height: '20%',
    backgroundColor: "#E6E6E6",
    marginTop: 400,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center'
  },
  logInText: {
    padding: 4,
    borderColor: 'black',
    borderWidth: 1,
    margin: 4
  },
  bannerContainer: {
    width: '90%',
    height: 271,
    backgroundColor: "#E6E6E6",
    marginTop: -400,
    alignSelf: "center"
  },
  logoImage: {
    width: '90%',
    height: '60%',
    backgroundColor: "rgba(65,220,90,1)",
    marginTop: 20,
    alignSelf: 'center'
  },
  logoText: {
    fontFamily: "roboto-700",
    color: "#121212",
    textAlign: "center",
    fontSize: 13,
    marginTop: 35,
    alignSelf: "center"
  }
});