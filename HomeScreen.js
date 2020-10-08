import React from 'react';
// import '../../App.css';

function HomeScreen() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {/* <Text>Home Screen</Text> */}
  
        {/* <ImageBackground
          style={{width: 1378/1.5, height: 572/1.5}}
          source={require('./assets/Logo-01.png')}>
        </ImageBackground> */}
  
        <View style={styles.logInContainer}>
            <TextInput placeholder = 'Username' style = {styles.logInText} />
            <TextInput placeholder = 'Password' style = {styles.logInText}/>
            <Button title = 'Log In'/>
          </View>
      </View>
    );
  }

export default Home;


  