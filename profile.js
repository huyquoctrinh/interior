// import { styles } from "ansi-colors";
// import Icon from 'react-native-vector-icons/Ionicons';
import React from "react";
import { Appbar } from 'react-native-paper';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    TextInput,
    FlatList
  } from 'react-native';
// import { color } from 'react-native-elements/dist/helpers';
import {createStackNavigator} from '@react-navigation/stack';
import Swiper from "react-native-web-swiper";
export const profile = ({navigation}) =>{    
    const name = "LƯU ANH KIỆT";
    const mssv = "20120013";
    const birth ="18/06/1998";
    const fields ="Tin học ứng dụng";
    const major = "Tin học nâng cao";
    const prog = "Cao đẳng"
    const class_name ="CTTin";
    const course = "11";
    const pn = "093272127";
    const email = "abcdxyz@gmail.com";
    const Stack = createStackNavigator();
    const doUserLogOut = () =>{
      alert("Log Out success");
    }
    const _handleMore = () => {
      alert("Show more");
    }
    const go_back =() =>{
      alert("back");
    }
    return (
        <Swiper>
        <View style = {styles.container}>

            <View style={styles.header}>
            <Appbar.Header style={{backgroundColor:'transparent'}}>
              <Appbar.BackAction onPress={() => {navigation.navigate('Home');}} />
              {/* <Appbar.BackAction onPress={go_back} /> */}
              <Appbar.Content title={mssv}  />
              <Appbar.Action onPress={() => console.log('Pressed label')} />
              <Appbar.Action  icon="dots-vertical" onPress={_handleMore} />
            </Appbar.Header>
                <Text style = {styles.text}> {name}</Text>
                <Text style = {{fontSize:18,color:'#9394B3', textAlign:'right',marginRight:60}}>MSSV: {mssv}</Text>
                <Text style = {{fontSize:18,color:'#9394B3', textAlign:'right',marginRight:40}}>Ngày sinh: {birth}</Text>
            </View>
                <Image style={styles.avatar} source={require('../assets/ava/pikachu.jpg')}/>    
            <View style={styles.body}>
              
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:20}}>Ngành:</Text>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:85}}>{major}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:20}}>Chuyên Ngành:</Text>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:20}}>{fields}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:20}}>Hệ đào tạo:</Text>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:50}}>{prog}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:20}}>Lớp:</Text>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:108}}>{class_name}</Text>
                  </View>
                  <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:20}}>Khóa học:</Text>
                    <Text style = {{fontSize:18,color:'#000000', textAlign:'left',marginLeft:60}}>{course}</Text>
                  </View>
                 
              <View style={{flexDirection:'row', alignItems:'center'}}>  
                  <Image style={styles.icon_img} source={require('../assets/phone.png')}/>
                  <Text style = {{fontSize:18,color:'#000000', textAlign:'right',marginRight:50,marginLeft: 35}}>  {pn}  </Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>  
                  <Image style={styles.icon_img} source={require('../assets/mail.png')}/>
                  <Text style = {{fontSize:18,color:'#000000', textAlign:'right',marginRight:50,marginLeft: 40}}>{email}</Text>
              </View>
              <View style={{flexDirection:'row', alignItems:'center'}}>  
                <TouchableOpacity onPress={()=>{alert("Support")}}> 
                  <Image style={styles.icon_img} source={require('../assets/ewallet.png')}/>
                </TouchableOpacity>
                  <Text style = {{fontSize:18,color:'#000000', textAlign:'right',marginRight:50, marginLeft: 35}}> Cài đặt thanh toán</Text>
              </View>
              
              <View style={{flexDirection:'row', alignItems:'center'}}>  
              <TouchableOpacity onPress={()=>{alert("Support")}}> 
                  <Image style={styles.icon_img} source={require('../assets/sp.jpg')}/>
                </TouchableOpacity>
                  <Text style = {{fontSize:18,color:'#000000', textAlign:'right',marginRight:50, marginLeft: 35}}> Hỗ trợ</Text>
              </View>
            
              <View style={{flexDirection:'row', alignItems:'center'}} > 
                <TouchableOpacity onPress={()=>{alert("setting")}}> 
                  <Image style={styles.icon_img} source={require('../assets/setting.png')}/>
                </TouchableOpacity>
                <Text style = {{fontSize:18,color:'#000000', textAlign:'right',marginRight:50, marginLeft: 35}}> Cài đặt</Text>
              </View>

            <View style={{marginTop:20,}}>
              <View style={{flexDirection:'row', alignItems:'center'}} > 
                  <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                    <Image style={{width: 40, height: 40, marginLeft: 20, marginBottom: 12, marginTop: 5}} source={require('../assets/logout.png')}/>    
                  </TouchableOpacity>
                  <Text style={{fontSize:18,color:'red',fontWeight: 'bold',fontSize:28, textAlign:'right',marginRight:50, marginLeft: 35}}>{'Đăng xuất'}</Text>
              </View>
              </View>
                
            </View>

        </View>
        </Swiper>
    );
}
const styles = StyleSheet.create({
    header:{
      backgroundColor: "transparent",
      height:150,
    },
    avatar: {
      width: 130,
      height: 130,
      borderRadius: 63,
      borderWidth: 4,
      borderColor: "white",
      marginBottom:10,
      alignSelf:'center',
      position: 'absolute',
      marginTop:60,
      top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    name:{
      fontSize:22,
      color:"#FFFFFF",
      fontWeight:'600',
    },
    body:{
      marginTop:60,
    },
    bodyContent: {
      flex: 1,
      alignItems: 'center',
      padding:30,
    },
    name:{
      fontSize:28,
      color: "#696969",
      fontWeight: "600"
    },
    info:{
      fontSize:16,
      color: "#00BFFF",
      marginTop:10
    },
    description:{
      fontSize:16,
      color: "#696969",
      marginTop:10,
      textAlign: 'center'
    },
    buttonContainer: {
      marginTop:10,
      height:45,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom:20,
      width:250,
      borderRadius:30,
      backgroundColor: "#00BFFF",
    },
    text:{
        fontWeight: 'bold',
        textAlign:'right',
        marginTop:20,
        justifyContent: 'flex-end',
        fontSize: 28,
        marginRight:40
    },
    icon_img:{
        width: 25,
        height: 25,
        marginLeft: 20,
        marginBottom: 12,
        marginTop: 5

    }
  });