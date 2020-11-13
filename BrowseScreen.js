import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton, TouchableOpacity } from 'react-native';

function BrowseScreen({ navigation }) {

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

            <TouchableOpacity onPress={() => alert('Go To Cart Screen')}>
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
    <View style={browseStyles.container}>
        <ImageBackground source={require('./assets/fondo-01.png')} style={browseStyles.img}>

          <View style = {browseStyles.itemboxesContainer}>
            <View style = {browseStyles.itembox}>
              <View style = {browseStyles.item}>
                {/* <TouchableOpacity onPress={() => navigation.navigate('Search')} title="Search"> */}
                  <Image resizeMode = 'center' style = {browseStyles.item} source = {require('./assets/book-01.png')}>
                  </Image>
                {/* </TouchableOpacity> */}
                {/* Here goes the item pic. and OnClick event. */}
              </View>
              <Text style = {browseStyles.itemboxText}>
                A Very Interesting Book Title
              </Text>
              <Text style = {browseStyles.itemboxText}>
                $45
              </Text>
            </View>
            
            <View style = {browseStyles.itembox}>
              <View style = {browseStyles.item}>
                  <Image resizeMode = 'center' style = {browseStyles.img} source = {require('./assets/book-01.png')}>
                  </Image>
              </View>
              <Text style = {browseStyles.itemboxText}>
                A Very Interesting Book Title
              </Text>
              <Text style = {browseStyles.itemboxText}>
                $45 
              </Text>
            </View>

            <View style = {browseStyles.itembox}>
              <View style = {browseStyles.item}>
                  <Image resizeMode = 'center' style = {browseStyles.img} source = {require('./assets/book-01.png')}>
                  </Image>
              </View>
              <Text style = {browseStyles.itemboxText}>
                A Very Interesting Book Title
              </Text>
              <Text style = {browseStyles.itemboxText}>
                $45
              </Text>
            </View>
          </View>

        </ImageBackground>
    </View>
  );
}

{/* <Button
title="Purchase"
onPress={() => navigation.navigate('Intro')}
/> */}

export default BrowseScreen;

const browseStyles = StyleSheet.create({
container: {
  flex: 1,
},
itemboxesContainer: {
  position: 'absolute',
  top: "25%",
  width: '60vw',
  borderWidth: 0,
  // borderColor: 'red',
  flexDirection: 'row',
  alignSelf: 'center', 
  justifyContent: 'space-between',
},
item: {
  width: '100%',
  height: '100%',
  backgroundColor: 'grey',
},
itembox: {
  borderWidth: 2,
  // borderColor: 'green',
  width: "15vw",
  height: "30vh", 
},
itemboxText:{
  padding: 5,
  justifyContent: "flex-end",
  fontSize: 20,
},
img:{
    flex: 1,
    resizeMode: "cover",
  },
});
