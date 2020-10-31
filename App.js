import React, {useState, useRef} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import CustomButton from './CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function LogInScreen({ navigation }) {
  // Inputs of the user
  const [_email, setEmail] = useState('param');
  const [_password, setPassword] = useState('');

  // Parameter to pass on to another view, result of login from user
  const [user, setUser] = useState({user:"userTest"});

  
  return (
    <View style={styles.container}>
    
      <View style={styles.header}>
        <View  style = {styles.homeButton}>
          <Button
            title="Home"
            onPress={() => navigation.navigate('Home')}
          />
        </View>
      </View>

      <View style={styles.logInContainerStack}>
        <View style={styles.logInContainer}>
          <TextInput 
            value = {_email} 
            style = {styles.logInText}
            onChangeText={text => setEmail(text)}
            placeholder="Email"
          />
          <TextInput 
            value = {_password}
            style = {styles.logInText}
            onChangeText={text => setPassword(text)}
            placeholder="Password"
          />
          <Button 
            title = 'Log In'
            onPress={
              () => {
                fetch(`http://localhost:9998/users/login?email=${_email}&password=${_password}`)
                  .then((response) => response.json())
                  .then((data) => setUser({user:JSON.stringify(data)}))
                  .catch((err) => setUser({user:JSON.stringify(err)}));
                navigation.navigate('SuccessfulLogin', user);
              }
            }
          />
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
}

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function SuccessfulLogin({route}) {
  const [user, setUser] = useState(route.params.user);
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        user:{user}
      </Text>
    </View>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Log In">
        <Stack.Screen name="Log In" component={LogInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SuccessfulLogin" component={SuccessfulLogin} />
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
    color: "#121212",
    textAlign: "center",
    fontSize: 13,
    marginTop: 35,
    alignSelf: "center"
  },
  homeButton: {
    
  },
  header: {
    // padding: 40,
    // width: '100%',
    // height: '13%',
    // backgroundColor: "#E6E6E6",
    // flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});