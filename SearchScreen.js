import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton, TouchableOpacity } from 'react-native';

function SearchScreen({ navigation }) {

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
    <View style={searchStyles.container}>
        <ImageBackground source={require('./assets/fondo-01.png')} style={searchStyles.img}>
          <View style = {searchStyles.itemboxesContainer}>

            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}

                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

                <Text style = {searchStyles.itemText}>
                    $41.47
                </Text>
                <Text style = {searchStyles.itemText}>
                    James Stewart ·
                </Text>
                <Text style = {searchStyles.itemText}>
                    Mathematics ·
                </Text>
                <Text style = {searchStyles.itemText}>
                    Calculus
                </Text>
              </View>
            </View>
            
            <View style = {searchStyles.itembox}>
              <View style = {searchStyles.item}>
                {/* Aqui va el book logo */}
                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

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
                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

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
                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

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
                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

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
                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

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
                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

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
                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

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
                <TouchableOpacity onPress={() => navigation.navigate('Browse')} title="Browse">
                  <Image resizeMode = 'center' style = {searchStyles.itemImage} source = {require('./assets/book-01.png')}>
                  </Image>
                </TouchableOpacity>

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
    top: "7%",
    width: '80vw',
    borderWidth: 0,
    // borderColor: 'red',
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
    // borderColor: "red",
    borderWidth: 0,
},
itembox: {
    // padding: 6,
    alignSelf: 'center',
    borderWidth: 2,
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