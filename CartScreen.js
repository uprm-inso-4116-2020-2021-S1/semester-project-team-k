import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton, TouchableOpacity, ViewPagerAndroid } from 'react-native';

function CartScreen({ navigation }) {

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
    <View style={cartStyles.container}>
        <ImageBackground source={require('./assets/fondo-01.png')} style={cartStyles.img}>

            <View style = {cartStyles.item}>
              <Image style={cartStyles.item2} source={require('./assets/book-01.png')} /> 
              <Text style = {cartStyles.itemboxText}>Review Shopping Cart</Text>
              <Text style = {cartStyles.itemboxText2}>James Stewart · Mathematics · Calculus:                           $41.47</Text>
              <Text style = {cartStyles.itemboxText3}> _________________________________________________________________ </Text>
            </View>

            <View style={cartStyles.nav}>
              <Text style={cartStyles.nav}> Subtotal $41.47</Text>
              <Text style={cartStyles.nav}> Shipping $5.00</Text>
              <Text style={cartStyles.nav}> Tax $0.00 </Text>
              <Text style={cartStyles.nav}> Total $46.47</Text>
            </View>
            {/* <View style = {cartStyles.item2}></View> */}

        </ImageBackground>
    </View>
  );
}

export default CartScreen;

const cartStyles = StyleSheet.create({
container: {
    flex: 1,
},
itemboxesContainer: {
  position: 'absolute',
  top: "25%",
  width: '60vw',
  borderWidth: 0,
  // flexDirection: 'row',
  alignSelf: 'center', 
  justifyContent: 'space-between',
},
item: {
  width: "50vw",
  height: "60vh", 
  // alignSelf: "center",
  left: "25%",
  top: "15%",
  backgroundColor: '#d1d1d1',
  borderRadius: 10,
  flexDirection: 'row',
},
item2: {
  width: "10vw",
  height: "20vh", 
  backgroundColor: '#d1d1d1',
  borderRadius: 10,
  left: "5%",
  top: "15%",
  position: 'absolute',
  justifyContent: 'space-between',
  paddingLeft: 95
},
itembox: {
  borderWidth: 0,
  width: "20vw",
  height: "40vh", 
},
itemImage: {
    width: '8vh',
    height: '8vh',
    borderWidth: 0,
},
itemboxText:{
    padding: 35,
    justifyContent: "flex-end",
    fontSize: 30,
    position: 'absolute',
},
itemboxText2:{
  padding: 130,
  paddingLeft: 200,
  justifyContent: "flex-end",
  fontSize: 20,
  position: 'absolute',
},
itemboxText3:{
  // padding: 330,
  paddingLeft: 100,
  justifyContent: "flex-end",
  fontSize: 20,
  position: 'absolute',
  bottom: "40%"
},
img:{
    flex: 1,
    resizeMode: "cover",
  },
nav:{
  // flexDirection: 'row',
  // color: "#121212",
  textAlign: "center",
  fontSize: 20,
  marginBottom: 5,
  alignSelf: "center",
  bottom: "7%",
  left: "15%"
}
});