import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton } from 'react-native';
import CustomButton from './CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { Assets, createStackNavigator } from '@react-navigation/stack';
import { SearchBar } from 'react-native-elements';
 

function LogInScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/fondo-01.png')} style={styles.img}>
      {/* <View style={styles.header}>
        <View  style = {styles.homeButton}>
          <Button
            // style={{width: 121/2, height: 116/2}}
            // source="./assets/home-icon-01.png"

            title="Log In"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View> */}

      <View style={styles.logInContainerStack}>
        
        <View style={styles.logoContainer}>
          {/* <TextInput placeholder = 'Username' style = {styles.logInText} />
          <TextInput placeholder = 'Password' style = {styles.logInText}/>
          <Button title = 'Log In'/> */}
        </View>
        <View style={styles.bannerContainerStack}>
          <View style={styles.bannerContainer}>
            
            <View style={styles.logoImage}>
            
            <Image
              style={{width: 1378/1.5, height: 572/1.5}}
              source={require('./assets/Logo-01.png')}>
            </Image>

            </View>
            <Text style={styles.logoText}>
              Books · School Supplies · School Merch · Clothing
            </Text>
          </View>
          <View style={styles.rect}></View>
          <View style={styles.rect2}></View>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Text>Home Screen</Text> */}

      {/* <ImageBackground
        style={{width: 1378/1.5, height: 572/1.5}}
        source={require('./assets/Logo-01.png')}>
      </ImageBackground> */}

      <View style={styles.logInContainer}>
          <TextInput placeholder = 'Username' style = {styles.logInText} />
          <TextInput placeholder = 'Password' style = {styles.logInText}/>
          <Button title = 'Log In' style = {styles.logInButton}/>
        </View>
    </View>
  );
}

const Stack = createStackNavigator();

function LogoTitle() {
  return (
    <View style={styles.nav}>
      <Image
      style={{ width: 50, height: 50, marginTop: '8px'}}
      source={require('./assets/home-icon-01.png')}
      />
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        // onChangeText={this.updateSearch}
        // value={search}
      />
      <View style={styles.header}>
        <View  style = {styles.homeButton}>
          <Button
            // style={{width: 121/2, height: 116/2}}
            // source="./assets/home-icon-01.png"

            title="Log In"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View> 
    </View>
  );
}

// function navbar(){
//   return (
//     <View></View>
//     <View style={styles.header}>
//         <View  style = {styles.homeButton}>
//           <Button
//             // style={{width: 121/2, height: 116/2}}
//             // source="./assets/home-icon-01.png"

//             title="Log In"
//             onPress={() => navigation.navigate('Home')}
//           />
//         </View>
//       </View> 
//   );
// }

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log In">
        <Stack.Screen name="Log In" component={LogInScreen} 
          options={{ headerTitle: props => <LogoTitle {...props} /> }} />
        <Stack.Screen name="Home" component={HomeScreen} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  logInContainer: {
    width: '40%',
    height: '40%',
    backgroundColor: "#E6E6E6",
    marginTop: 20,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logInButton: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    width: '60%',
    height: '20%',
    marginTop: 450,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  logInText: {
    padding: 4,
    borderColor: 'black',
    borderWidth: 1.5,
    margin: 8,
    justifyContent: 'center',
    alignContent: 'center',
  },
  bannerContainer: {
    width: '90%',
    height: 271,
    // backgroundColor: "#E6E6E6",
    marginTop: -500,
    alignSelf: "center",
  },
  logoImage: {
    // width: '90%',
    // height: '60%',
    // backgroundColor: "rgba(65,220,90,1)",
    // marginTop: 20,
    marginBottom: 20,
    alignSelf: 'center',
  },
  logoText: {
    color: "#121212",
    textAlign: "center",
    fontSize: 13,
    marginTop: 35,
    alignSelf: "center",
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
  img:{
    flex: 1,
    resizeMode: "cover",
  },
});

