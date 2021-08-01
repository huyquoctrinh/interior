import React from 'react';
import { StyleSheet, Text, View, ImageBackground, 
    Image, SafeAreaView, TextInput, TouchableWithoutFeedback, 
    onPress, Alert, Component, TouchableOpacity,ScrollView } from 'react-native';
// import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Card, Button } from 'react-native-elements';
import CustomText from '../components/card_ex';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from "react-native-web-swiper";
import { Appbar } from 'react-native-paper';
import { withNavigation } from 'react-navigation'; 
import { renderNode } from 'react-native-elements/dist/helpers';


export const  MainDashBoard = ({navigation}) => {
    const _handleMore = () => {
        alert("Show more");
      }

    // function onPress () {
    //     //some function 
    //     console.log('Text clicked');
    // }
    
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.header}>
                <Appbar.Header style={{backgroundColor:'rgba(102, 153, 204, 0.2)'}}>
                <Appbar.BackAction onPress={() => {navigation.navigate('Start');}} />
                <Appbar.Content  title= "Interior"  />
                <Appbar.Action onPress={() => console.log('Pressed label')} />
                <Appbar.Action  icon="shopping-search" onPress={_handleMore} />
                <Appbar.Action  icon="shopping-outline" onPress={() => navigation.navigate('Login')}/>
            </Appbar.Header>
            </View>

            < CustomText product="SOFA" time ="Updated 1 hours ago" price = "$ 200" img="../assets/furniture.jpg" onPress={_handleMore}/>

            
            <Card borderRadius={10} cardStyle= {{ backgroundColor: 'transparent', borderRadius: 10 }} >
                <Card.Image source={require('../assets/chair.jpg')}/>

                    <Text style={{marginBottom: 10, marginTop: 20 }} h2>
                        chair
                    </Text>
                    <Text style={styles.price} h4>
                        $ 450
                    </Text>
                    <Text h6 style={styles.description}>
                        added 1d ago
                    </Text>
                    <Button
                    type="clear"
                    title='Buy now'
                    onPress={() => {}} />
                    <Button
                    type="clear"
                    title='Try Now'
                    onPress={()=>{}} />
            </Card>
            < CustomText product="SOFA" time ="Updated 2 hours ago" price = "$ 300" img="../assets/furniture.jpg" onPress={_handleMore} onPress ={_handleMore}/>
            < CustomText product="SOFA" time ="Updated 3 hours ago" price = "$ 600" img="../assets/furniture.jpg" onPress={_handleMore} onPress ={_handleMore}/>
            < CustomText product="SOFA" time ="Updated 4 hours ago" price = "$ 600" img="../assets/furniture.jpg" onPress={_handleMore} onPress ={_handleMore}/>
            < CustomText product="SOFA" time ="Updated 5 hours ago" price = "$ 300" img="../assets/furniture.jpg" onPress={_handleMore} onPress ={_handleMore}/>
           

        </View>
        </ScrollView>
    );
    }


    



const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 0
      },
    imageBack: {
        flex: 1,
        alignContent: "center",
        resizeMode: "cover",
        // alignItems: "center",
      },
    topBack: {
        // flex: 1,
        backgroundColor: 'rgba(255, 50, 50, 0.5)',
        flexDirection: "row",
        justifyContent: "flex-start",
        // alignItems: "stretch",
        // flexWrap: "wrap",
        opacity: 1,
        padding: 12,
        paddingLeft: 0,
        // borderRadius: 8,
        // margin: 8
    },
    midBack: {
        alignContent: "center",
        alignItems: "center"
    },
    searchBox: {
        borderRadius: 18,
        padding: 8,
        height: 32,
        width: 280,
        alignSelf: "stretch",
        backgroundColor: "white",
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowOffset: {
        height: 2,
        width: 2,
        },
        elevation: 3,
    },
    Iconn: {
        paddingHorizontal: 12,
    },
    name: {

        color: '#5a647d',

        fontWeight: 'bold',

        fontSize: 30

    },

    price: {

        fontWeight: 'bold',

        marginBottom: 10

    },

    description: {

        fontSize: 10,

        color: '#c1c4cd'

    }
});

// export default MainDashBoard;