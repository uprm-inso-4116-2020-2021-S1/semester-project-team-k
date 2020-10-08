import React from 'react';
// import '../../App.css';

function LogInScreen({ navigation }) {
    return (
      <View style={styles.container}>
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
  
        <View style={styles.logInContainerStack}>
          <View style={styles.logInContainer}>
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
  
      </View>
    );
  }
  
  export default Home;