import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton } from 'react-native';
import { SearchBar } from 'react-native-elements';

function LogInScreen({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Image
        style={{ width: 50, height: 50 }}
        source={require('./assets/home-icon-01.png')}
        />
      ),
    });
  }, [navigation]);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <ImageBackground source={require('./assets/fondo-01.png')} style={loginStyles.imglog}>
      {/* <Text>Home Screen</Text> */}

      {/* <ImageBackground
        style={{width: 1378/1.5, height: 572/1.5}}
        source={require('./assets/Logo-01.png')}>
      </ImageBackground> */}

      <View style={loginStyles.logInContainer}>
          <TextInput placeholder = 'Username' style = {loginStyles.logInText} />
          <TextInput placeholder = 'Password' style = {loginStyles.logInText}/>
          <Button title = 'Log In' style = {loginStyles.logInButton}
          onPress = {() => navigation.Navigate('Intro') }/>
      </View>
      </ImageBackground>
    </View>
  );
}

function LogoTitle({ navigation }) {
  return (
    <View style={loginStyles.nav}>
      <Image
      style={{ width: 50, height: 50, marginTop: '8px'}}
      source={require('./assets/home-icon-01.png')}
      />
      <SearchBar
        placeholder="Type Here..."
        lightTheme
      />
      <View style={loginStyles.header}>
        <View  style = {loginStyles.homeButton}>
          {/* <Button
            title="Log In"
            onPress={() => navigation.navigate('Home')}
          /> */}
        </View>
      </View> 
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


/////////////// Old Log In //////////////////////
// function LogInScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       {/* <Text>Home Screen</Text> */}

//       {/* <ImageBackground
//         style={{width: 1378/1.5, height: 572/1.5}}
//         source={require('./assets/Logo-01.png')}>
//       </ImageBackground> */}

//       <View style={styles.logInContainer}>
//           <TextInput placeholder = 'Username' style = {styles.logInText} />
//           <TextInput placeholder = 'Password' style = {styles.logInText}/>
//           <Button title = 'Log In'/>
//         </View>
//     </View>
//   );
// }