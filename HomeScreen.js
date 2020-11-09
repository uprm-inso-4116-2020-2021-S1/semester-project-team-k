import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, ImageBackground, IconButton } from 'react-native';

function HomeScreen({ navigation }) {
  return (
    <View style={homeStyles.container}>
      <ImageBackground source={require('./assets/fondo-01.png')} style={homeStyles.img}>
          <Button
            title="Log In"
            onPress={() => navigation.navigate('Log In')}
          />

      <View style={homeStyles.logInContainerStack}>
        
        <View style={homeStyles.logoContainer}>
      </View>
        <View style={homeStyles.bannerContainerStack}>
          <View style={homeStyles.bannerContainer}>
            <View style={homeStyles.logoImage}>
            <Image
              style={{width: 1378/1.5, height: 572/1.5}}
              source={require('./assets/Logo-01.png')}>
            </Image>
            </View>
            <Text style={homeStyles.logoText}>
              Books · School Supplies · School Merch · Clothing
            </Text>
          </View>
          {/* <View style={styles.rect}></View>
          <View style={styles.rect2}></View> */}
        </View>
      </View>
      </ImageBackground>
    </View>
  );
}
  
  export default HomeScreen;

  const homeStyles = StyleSheet.create({
    container: {
      flex: 1
    },
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
  });
  


//////////////////// Old HomeScreen? Idk ///////////////

// function HomeScreen({ navigation }) {
//     return (
//       <View style={styles.container}>
//         <View style={styles.header}>
//           <View  style = {styles.homeButton}>
//             <Button
//               // style={{width: 121/2, height: 116/2}}
//               // source="./assets/home-icon-01.png"
  
//               title="Home"
//               onPress={() => navigation.navigate('Log In')}
//             />
//           </View>
//         </View>
  
//         <View style={styles.logInContainerStack}>
//           <View style={styles.logInContainer}>
//             {/* <TextInput placeholder = 'Username' style = {styles.logInText} />
//             <TextInput placeholder = 'Password' style = {styles.logInText}/>
//             <Button title = 'Log In'/> */}
//           </View>
//           <View style={styles.bannerContainerStack}>
//             <View style={styles.bannerContainer}>
//               <View style={styles.logoImage}>
  
//               <Image
//                 style={{width: 1378/1.5, height: 572/1.5}}
//                 source={require('./assets/Logo-01.png')}>
//               </Image>
  
//               </View>
//               <Text style={styles.logoText}>
//                 Books · School S School Merch · Clothing
//               </Text>
//             </View>
//             <View style={styles.rect}></View>
//             <View style={styles.rect2}></View>
//           </View>
//         </View>
  
//       </View>
//     );
//   }