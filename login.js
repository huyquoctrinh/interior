import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TextInput, TouchableWithoutFeedback, onPress, Alert, Component, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

const forgot = () => {

};



function MainLogin({ navigation }) {
  const [username, onChangeUser] = React.useState(null);
  const [password, onChangePass] = React.useState(null);
  const signIn = (user, pass) => {
    if (user == 'admin' && pass=='admin') navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/bl.jpg')} style={styles.imageBack}>
        <Image source={require('../assets/Logo.png')} style={styles.imageLogo} />        
        <SafeAreaView>          
          <View style={styles.borderIn}>
            <Icon style={styles.Iconn} name="user-circle" size={22} color="#000" />
            <TextInput
              style={styles.input}
              onChangeText={onChangeUser}
              value={username}
              autoCompleteType="username"
              placeholder="Email or Phone"
            />
          </View>
          <View style={styles.borderIn}>
          <Icon style={styles.Iconn} name="lock" size={30} color="#000" />
            <TextInput
              style={styles.input}
              onChangeText={onChangePass}
              value={password}
              textContentType="password"
              placeholder="Password"
              secureTextEntry={true}
            />
          </View>
        </SafeAreaView>
        <Button
          containerStyle={{padding:12, height:44, width: 200, margin: 12, overflow:'hidden', borderRadius:24, backgroundColor: 'white'}}
          disabledContainerStyle={{backgroundColor: 'grey'}}
          style={{fontSize: 16, color: 'rgb(115,182,254)', fontFamily: 'Roboto', fontWeight: 'bold'}}
          onPress={() => signIn(username, password)}
          >
          Start Login
        </Button>
        <TouchableOpacity
          onPress={forgot}>
            <Text style={styles.textlink}>
              Forget your Password?
            </Text>
          </TouchableOpacity>
      </ImageBackground>      
    </View>
  );
};



const styles = StyleSheet.create({
  title: {
    color: 'white',
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    padding: 24,
  },
  container: {
    flex: 1,
    padding: 0
  },
  imageBack: {
    flex: 1,
    justifyContent: "center",
    resizeMode: "cover",
    alignItems: "center",
    opacity:0.8
  },
  imageLogo: {
    width: 400,
    height: 200,
    resizeMode: "contain"
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    fontStyle: 'italic'
  },
  borderIn: {
    flexDirection: "row",
    height: 40,
    margin: 12,
    backgroundColor: "white",
    borderRadius: 24,
    alignContent: "center",
    
    width: 300,
    justifyContent: "center",
    shadowOpacity: 1,
    shadowRadius: 6,
    shadowOffset: {
      height: 2,
      width: 2,
    },
    elevation: 3,
    
  },
  Iconn: {
    padding: 8,
    paddingLeft: 12,
    width: 44,
    justifyContent: "center"
  },
  Buttonn: {
    backgroundColor: "white",
    borderRadius: 24,
    alignContent: "center",
    height: 40,
    margin: 12,
  },
  textlink: {
    fontFamily:'Roboto',
    fontStyle: 'italic'
  }
});

export default MainLogin;