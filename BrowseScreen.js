import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton, TouchableOpacity, Picker } from 'react-native';


// function BrowseScreenTop({ navigation }) {

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: () => (
//         <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
//           <Image
//           style={{ width: 50, height: 50 }}
//           source={require('./assets/home-icon-01.png')} />
//         </TouchableOpacity>
//       ),
//       headerRight: () => 
//       (
//         <View style={{marginHorizontal: 50, flexDirection: "row"}}>
//           <TextInput placeholder = 'Search' style={{ height: 40, borderColor: 'gray', borderWidth: 2 }} /> 
//             <TouchableOpacity onPress={() => navigation.navigate('Search')}>
//               <Image
//               style={{ width: 50, height: 50 }}
//               source={require('./assets/search-icon-01.png')} /> 
//             </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <Image
              style={{ width: 50, height: 50 }}
              source={require('./assets/cart-01.png')} /> 
            </TouchableOpacity>

//             <TouchableOpacity onPress={() => alert('Go To Profile Screen')}>
//               <Image
//               style={{ width: 50, height: 50 }}
//               source={require('./assets/user-icon-01.png')} /> 
//             </TouchableOpacity>
//         </View>
//       ),
//     });
//   }, [navigation]);
// }
export default class BrowseScreen extends Component{
  constructor(props){
    super(props);
    this.state={email:'', password:''};
  }
  BrowseScreenTop({ navigation }) {

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
  }

  render(){
  return (
    <View style={browseStyles.container}>
        <ImageBackground source={require('./assets/fondo-01.png')} style={browseStyles.img}>

          <View style = {browseStyles.itemboxesContainer}>
            <View style = {browseStyles.itembox}>
              <View style = {browseStyles.item}>
                  <Image resizeMode = 'center' style = {browseStyles.item} source = {require('./assets/book-01.png')}></Image>
              </View>
              <Text style = {browseStyles.itemboxText}>Stock: 5</Text>
            </View>
          </View> 

            <View style = {browseStyles.infobox}>
              <Text style = {browseStyles.itemboxText}>Title: Calculus: Early Transcendentals</Text>
              <Text style = {browseStyles.itemboxText}>ISBN: 978-1-305-27235-4</Text>
              <Text style = {browseStyles.itemboxText}>Author(s): James Stewart</Text>
              <Text style = {browseStyles.itemboxText}>Subject: Education</Text>
              <Text style = {browseStyles.itemboxText}>Genre: </Text>
              <Text style = {browseStyles.itemboxText}>Year of release: 2016</Text>
              <Text style = {browseStyles.itemboxText}>$41.47</Text>
              <Text style = {browseStyles.itemboxText}>Edition: 8</Text>

            <View style = {browseStyles.cart}>
              <View style = {browseStyles.button}>
                  <Button title = 'Add to cart' color = '#b2cf38' onPress={() => navigation.navigate('Cart')}> </Button>
              </View>

              <View style = {browseStyles.picker}>
                <Picker>
                  <Picker.Item value="1" label="1" />
                  <Picker.Item value="2" label="2" />
                  <Picker.Item value="3" label="3" />
                </Picker>
              </View>
            </View>

            </View>
            
            {/* <View style = {browseStyles.itembox}>
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
            </View>*/}

        </ImageBackground>
    </View>
  );
}
}

// export default BrowseScreen;

const browseStyles = StyleSheet.create({
container: {
  flex: 1
},
itemboxesContainer: {
  position: 'absolute',
  top: "25%",
  width: '60vw',
  borderWidth: 0,
  flexDirection: 'row',
  alignSelf: 'center', 
  justifyContent: 'space-between',
  right: "15%"
},
item: {
  width: '100%',
  height: '100%',
  backgroundColor: '#d1d1d1',
  borderRadius: 10,
},
itembox: {
  borderWidth: 0,
  width: "20vw",
  height: "40vh", 
},
infobox: {
  position: 'absolute',
  top: "25%",
  right: "21%",
  width: '45vw',
  borderWidth: 0,
  alignSelf: 'center', 
  justifyContent: 'space-between',
  paddingLeft: 185
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
button:{
    borderRadius: 10,
    width: "20vw",
    height: "40vh", 
},
picker:{
  // flexDirection: 'row',
  flex: 1,
  // paddingLeft: -300,
  // paddingBottom: 350,
  alignItems: "center",
  paddingLeft: 5,
},
cart:{
  flexDirection: 'row',
  position: 'relative',
}
});
