import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, SafeAreaView, TextInput, TouchableWithoutFeedback, onPress, Alert, Component, TouchableOpacity } from 'react-native';
import Button from 'react-native-button';
import Icon from 'react-native-vector-icons/FontAwesome';

function TimeTable({ navigation }) {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/Nen.png')} style={styles.imageBack}>
                <View style={styles.topBack}>
                    <Icon style={styles.Iconn} name="arrow-left" size={30} color="#FFF" onPress={() => navigation.navigate('Home', { screen: 'Timetable' })} />
                    <Text style={styles.title}>Thời khóa biểu hàng tuần</Text>
                </View>
                <View style={styles.midBack}>
                    <Text>Xem lịch</Text>
                    <Text>Day1</Text>
                    <Text>Day2</Text>
                </View>
            </ImageBackground>
        </View>
    );
}

function Day1() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/Nen.png')} style={styles.imageBack}>
                <View style={styles.topBack}>
                    <Icon style={styles.Iconn} name="arrow-left" size={30} color="#FFF" onPress={() => navigation.navigate('Timetable', { screen: 'Profile' })} />
                    <Text style={styles.title}>Thời khóa biểu hàng tuần</Text>
                </View>
                <View style={styles.midBack}>
                    <Text>Xem lịch</Text>
                    <Text>Day1</Text>
                    <Text>Day2</Text>
                </View>
                
            </ImageBackground>
        </View>
    );
}

function Day2() {
    return (
        <View style={styles.container}>
            <ImageBackground source={require('../img/Nen.png')} style={styles.imageBack}>
                <View style={styles.topBack}>
                    <Icon style={styles.Iconn} name="arrow-left" size={30} color="#FFF" onPress={() => navigation.navigate('Timetable', { screen: 'Profile' })} />
                    <Text style={styles.title}>Thời khóa biểu hàng tuần</Text>
                </View>
                <View style={styles.midBack}>
                    <Text>Xem lịch</Text>
                    <Text>Day2</Text>
                </View>
                
            </ImageBackground>
        </View>
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
      },
    topBack: {
        // flex: 1,
        backgroundColor: 'rgba(255, 50, 50, 0.5)',
        flexDirection: "row",
        justifyContent: "flex-start",
        opacity: 1,
        padding: 12,
        paddingLeft: 0,
    },
    midBack: {
        alignContent: "center",
        alignItems: "center"
    },
    title: {
        padding: 6,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: 'bold',
        color: 'white'
    },
    Iconn: {
        paddingHorizontal: 12,
    }
});

export default TimeTable;