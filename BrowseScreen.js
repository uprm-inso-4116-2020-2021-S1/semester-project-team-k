import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton } from 'react-native';

function BrowseScreen({ navigation }) {

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Image
        style={{ width: 50, height: 50 }}
        source={require('./assets/home-icon-01.png')}
        />
      ),
      headerRight: () => 
      (
        <View style={{marginHorizontal: 50, flexDirection: "row"}}>
          <TextInput
            style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          />
          <Button onPress={() => navigation.navigate('Search')} title="Search" />
          <Button onPress={() => alert('Go To Cart Screen')} title="Cart" />
          <Button onPress={() => alert('Go To Profile Screen')} title="Profile" />
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
                Here goes the item pic. and OnClick event.
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
  width: '75vw',
  borderWidth: 4,
  borderColor: 'red',
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
  borderWidth: 8,
  borderColor: 'green',
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