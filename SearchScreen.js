import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton } from 'react-native';

function SearchScreen({ navigation }) {

//   React.useLayoutEffect(() => {
//     navigation.setOptions({
//       headerTitle: () => (
//         <Image
//         style={{ width: 50, height: 50 }}
//         source={require('./assests/home-icon-01.png')}
//         />
//       ),
//       headerRight: () => 
//       (
//         <View style={{marginHorizontal: 50, flexDirection: "row"}}>
//           <TextInput
//             style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
//           />
//           <Button onPress={() => alert('Go To Search Screen')} title="Search" />
//           <Button onPress={() => alert('Go To Cart Screen')} title="Cart" />
//           <Button onPress={() => alert('Go To Profile Screen')} title="Profile" />
//         </View> 
//       ),
//     });
//   }, [navigation]);

  return (
    <View style={searchStyles.container}>
        <ImageBackground source={require('./assets/fondo-01.png')} style={searchStyles.img}>
          <View style = {searchStyles.itemboxesContainer}>

            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    125$
                </Text>
                <Text style = {searchStyles.itemText}>
                    John Dewey
                </Text>
                <Text style = {searchStyles.itemText}>
                    Calculus
                </Text>
                <Text style = {searchStyles.itemText}>
                    Mathematics 
                </Text>
              </View>
            </View>
            
            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    Price
                </Text>
                <Text style = {searchStyles.itemText}>
                    Author
                </Text>
                <Text style = {searchStyles.itemText}>
                    Subject
                </Text>
                <Text style = {searchStyles.itemText}>
                    Genre
                </Text>
              </View>
            </View>

            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    Price
                </Text>
                <Text style = {searchStyles.itemText}>
                    Author
                </Text>
                <Text style = {searchStyles.itemText}>
                    Subject
                </Text>
                <Text style = {searchStyles.itemText}>
                    Genre
                </Text>
              </View>
            </View>

            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    Price
                </Text>
                <Text style = {searchStyles.itemText}>
                    Author
                </Text>
                <Text style = {searchStyles.itemText}>
                    Subject
                </Text>
                <Text style = {searchStyles.itemText}>
                    Genre
                </Text>
              </View>
            </View>


            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    Price
                </Text>
                <Text style = {searchStyles.itemText}>
                    Author
                </Text>
                <Text style = {searchStyles.itemText}>
                    Subject
                </Text>
                <Text style = {searchStyles.itemText}>
                    Genre
                </Text>
              </View>
            </View>


            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    Price
                </Text>
                <Text style = {searchStyles.itemText}>
                    Author
                </Text>
                <Text style = {searchStyles.itemText}>
                    Subject
                </Text>
                <Text style = {searchStyles.itemText}>
                    Genre
                </Text>
              </View>
            </View>

            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    Price
                </Text>
                <Text style = {searchStyles.itemText}>
                    Author
                </Text>
                <Text style = {searchStyles.itemText}>
                    Subject
                </Text>
                <Text style = {searchStyles.itemText}>
                    Genre
                </Text>
              </View>
            </View>

            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    Price
                </Text>
                <Text style = {searchStyles.itemText}>
                    Author
                </Text>
                <Text style = {searchStyles.itemText}>
                    Subject
                </Text>
                <Text style = {searchStyles.itemText}>
                    Genre
                </Text>
              </View>
            </View>
            
            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/favicon.png')}>
                    
                </Image>
                <Text style = {searchStyles.itemText}>
                    Price
                </Text>
                <Text style = {searchStyles.itemText}>
                    Author
                </Text>
                <Text style = {searchStyles.itemText}>
                    Subject
                </Text>
                <Text style = {searchStyles.itemText}>
                    Genre
                </Text>
              </View>
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

export default SearchScreen;

const searchStyles = StyleSheet.create({
container: {
    flex: 1,
},
itemboxesContainer: {
    position: 'absolute',
    top: "5%",
    width: '80vw',
    borderWidth: 4,
    borderColor: 'red',
    flexDirection: 'column',
    alignSelf: 'center',
    justifyContent: 'space-between',
},
item: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'flex-start',
//   width: '100%',
//   height: '100%',
},
itemImage: {
    width: '8vh',
    height: '8vh',
    borderColor: "red",
    borderWidth: 2,
},
itembox: {
    // padding: 6,
    alignSelf: 'center',
    borderWidth: 4,
    borderColor: 'green',
    width: "75vw",
    height: "8vh",
},
itemText:{
    padding: 5,
    justifyContent: "flex-end",
    fontSize: 20,
},
img:{
    flex: 1,
    resizeMode: "cover",
  },
});