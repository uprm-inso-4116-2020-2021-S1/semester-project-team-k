import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton, TouchableOpacity} from 'react-native';

function IntroScreen({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
          <Image
          style={{ width: 50, height: 50 }}
          source={require('./assets/home-icon-01.png')} />
        </TouchableOpacity>
      ),
      headerRight: () => 
      (
        <View style={{marginHorizontal: 50, flexDirection: "row"}}>
          <TextInput placeholder = 'Search' style={{ height: 40, borderColor: 'gray', borderWidth: 2 }} /> 
            <TouchableOpacity onPress={() => navigation.navigate('Search')}>
              <Image
              style={{ width: 50, height: 50 }}
              source={require('./assets/search-icon-01.png')} /> 
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
              style={{ width: 50, height: 50 }}
              source={require('./assets/cart-01.png')} /> 
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => alert('Go To Profile Screen')}>
              <Image
              style={{ width: 50, height: 50 }}
              source={require('./assets/user-icon-01.png')} /> 
            </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]); 

  return (
    <View style={introStyles.container}>
      <ImageBackground source={require('./assets/fondo-01.png')} style={introStyles.img}>
          <Button
            title="Log In"
            color = "gray" //
            onPress={() => navigation.navigate('Log In')}
          />
    <View style={introStyles.logInContainerStack}>
        
      <View style={introStyles.logoContainer}>
      </View>
        <View style={introStyles.bannerContainerStack}>
          <View style={introStyles.bannerContainer}>
            <View style={introStyles.logoImage}>
            <Image
              style={{width: 1378/1.5, height: 572/1.5}}
              source={require('./assets/Logo-01.png')}>
            </Image>
            </View>

            <View style={introStyles.nav}>
              <Text style={introStyles.nav} onPress={() => navigation.navigate('Search')}>Books · </Text>
              <Text style={introStyles.nav} onPress={() => alert('Go To School Supplies Screen')}>School Supplies · </Text>
              <Text style={introStyles.nav} onPress={() => alert('Go To School Merch Screen')}>School Merch · </Text>
              <Text style={introStyles.nav} onPress={() => alert('Go To Clothing Screen')}>Clothing</Text>
            </View>

          </View>
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}
  
export default IntroScreen;

const introStyles = StyleSheet.create({
  container: {
    flex: 1
  },
  logInContainer: {
    width: '40%',
    height: '40%',
    backgroundColor: "white",
    marginTop: 100,
    alignSelf: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
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
  img:{
    flex: 1,
    resizeMode: "cover",
  },
  nav:{
    flexDirection: 'row',
    color: "#121212",
    textAlign: "center",
    fontSize: 35,
    marginTop: 5,
    alignSelf: "center",
  }
});
