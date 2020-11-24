import React, {useState, useRef} from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton, TouchableOpacity } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LogInScreen({ navigation }) {
  const [_email, setEmail] = useState('');
  const [_password, setPassword] = useState('');
  // Parameter to pass on to another view, result of login from user
  const [user, setUser] = useState({user:"userTest"});

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
          <Image
          style={{ width: 50, height: 50 }}
          source={require('./assets/home-icon-01.png')} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={require('./assets/fondo-01.png')} style={loginStyles.imglog}>
      <View style={loginStyles.logInContainer}>
          <TextInput 
            value = {_email} 
            style = {loginStyles.logInText}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
          />
          <TextInput 
            value = {_password}
            style = {loginStyles.logInText}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            placeholder="Password"
          />
          <Button title = 'Log In' color = 'gray' style = {loginStyles.logInButton} onPress={
              () => {
                fetch(`http://localhost:9998/users/login?email=${_email}&password=${_password}`)
                  .then((response) => response.json())
                  .then((data) => setUser({user:JSON.stringify(data)}))
                  .catch((err) => setUser({user:JSON.stringify(err)}));
                navigation.navigate('Intro', user);
              }
            }/>
      </View>
      </ImageBackground>
    </View>
  );
}

export default LogInScreen;

const loginStyles = StyleSheet.create({
  logInContainer: {
    width: '40%',
    height: '40%',
    // backgroundColor: "#E6E6E6",
    backgroundColor: "white",
    marginTop: 100,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logInButton: {
    width: 100,
    height: 100,
  },
  logInText: {
    padding: 4,
    borderColor: 'black',
    borderWidth: 1.5,
    margin: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  homeButton: {
    // position: "absolute",
    // width: 121,
    // height: 116,
    // left: 145,
    // top: 37 
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    // padding: 40,
    // width: '100%',
    height: '10%',
    backgroundColor: "#E6E6E6",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: '12px',
  },
  imglog:{
    width: '100%',
    height: '100%'
  },
});