import {  Image,
    ImageBackground,
    StyleSheet,
    View,
    Text,
    TouchableOpacity  } from "react-native";
 import React from 'react';
 import Swiper from "react-native-web-swiper";
 import LinearGradient from 'react-native-linear-gradient';


export const Start = ({navigation})=>{
    return (
        // <Swiper>
            <View style={styles.container}>
            <ImageBackground source={require('../assets/furniture.jpg')} style={{ width: '100%' ,height:'100%'}}>
                    <Text style={styles.text}> Welcome to Interior</Text>
                <View style={styles.loginButtonSection}> 
                <View style={styles.ScanButton}> 
                    <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity = { .5 } onPress= {() => navigation.navigate('Home')}>
                        <Text style={{fontWeight: "bold",fontSize:18}}> Start Now </Text>
                    </TouchableOpacity>
                </View>
                </View>
            </ImageBackground>
                
            </View>      
    );
}

const styles = StyleSheet.create({
    text:{
        fontWeight:"bold",
        // fontWeight: "bold",fo
        fontSize:25,
        marginTop: 270,
        marginLeft: 72
    },
    bodyContent: {
        flex: 1,
        alignItems: 'center',
        padding:30,
        backgroundColor:'transparent'

      },

      ScanButton:{
        backgroundColor: "rgba(255, 250, 250, 1.3)",
        position: 'absolute',
        width: '50%',
        height: '100%',
        marginLeft: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:50,
        borderWidth: 1,
        borderColor: 'transparent',
        marginTop:60

      },
      loginButtonSection: {
        backgroundColor: "transparent",

        // position: 'absolute',
        width: '100%',
        height: '10%',
        marginTop: 20,
        // marginLeft: 90,
        justifyContent: 'center',
        alignItems: 'center'
     },
     linearGradient: {
        flex: 1,
        paddingLeft: 15,
        paddingRight: 15,
        borderRadius: 5
      },
      buttonText: {
        fontSize: 18,
        fontFamily: 'Gill Sans',
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
        backgroundColor: 'transparent',
      },

});

// background-color: #b8c6db;
// background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);