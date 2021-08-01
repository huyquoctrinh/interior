import React, { Component } from 'react';
import { Button, Text, View,ImageBackground,TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
// import { Appbar } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Appbar,BottomNavigation } from 'react-native-paper';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MainDashBoard from './dashb';


const Tab = createBottomTabNavigator();
export const AwesomeWrapper = () => {
  return (
    <Image source="./assets/bgr.png">
      {/* {props.children} */}
    </Image>
  );
}

const _handleMore = () => {
  alert("Show more");
}
class ProductScanRNCamera extends Component {

  constructor(props) {
    super(props);
    this.camera = null;
    this.barcodeCodes = [];

    this.state = {
      camera: {
        type: RNCamera.Constants.Type.back,
	flashMode: RNCamera.Constants.FlashMode.auto,
      }
    };
  }



  onBarCodeRead(scanResult) {
    console.warn(scanResult.type);
    console.warn(scanResult.data);
    if (scanResult.data != null) {
	if (!this.barcodeCodes.includes(scanResult.data)) {
	  this.barcodeCodes.push(scanResult.data);
	  console.warn('onBarCodeRead call');
      this.props.navigation.navigate('Scan Result', {itemId: scanResult.type,otherParam: scanResult.data});
	}
    }
    return;
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
    }
  }

  pendingView() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgreen',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text>Waiting</Text>
      </View>
    );
    
  }


  render() {
  
    return (
      <View style={styles.container}>
        <ImageBackground
        source={require('../assets/bgr.png')}
        style={{ width: '100%' }}>
        <Appbar.Header  style={{ backgroundColor: 'transparent' }}>
            <Appbar.BackAction onPress={() => {navigation.navigate('Home');}} />
            <Appbar.Content title="SCAN QR CODE"/>
            <Appbar.Action  icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>


          <View style={styles.header}>
            <View style={styles.TopButton}> 
                <TouchableOpacity style={styles.leftButtonStyle} activeOpacity = { .5 } onPress= {_handleMore}>
                   <Text style={styles.TextStyle}> SCAN </Text>                    
                </TouchableOpacity>
                <TouchableOpacity style={styles.rightButtonStyle} activeOpacity = { .5 } onPress= {_handleMore}>
                    <Text style={styles.TextStyle}> MY CODE </Text>                     
               </TouchableOpacity>
            </View>

            
          </View>
        </ImageBackground>



        <RNCamera
            ref={ref => {
              this.camera = ref;
            }}
            defaultTouchToFocus
            flashMode={this.state.camera.flashMode}
            mirrorImage={false}
            onBarCodeRead={this.onBarCodeRead.bind(this)}
            onFocusChanged={() => {}}
            onZoomChanged={() => {}}
            permissionDialogTitle={'Permission to use camera'}
            permissionDialogMessage={'We need your permission to use your camera phone'}
            style={styles.preview}
            type={this.state.camera.type}
        />
        
        <View style={[styles.overlay, styles.topOverlay]}>
          <Text style={styles.scanScreenMessage}>Please scan the barcode.</Text>
	      </View>
        {/* <Tab.Navigator>
            <Tab.Screen name="Home" component={MainDashBoard} />
            <Tab.Screen name="Settings" component={MainDashBoard} />
        </Tab.Navigator> */}
        <View style={styles.loginButtonSection}> 
           <View style={styles.ScanButton}> 
           <TouchableOpacity style={styles.SubmitButtonStyle} activeOpacity = { .5 } onPress= {() => {}}>
       <Text style={styles.TextStyle}> SCAN NOW </Text>
            
      </TouchableOpacity>
            </View>
        </View>
        
      </View>
     
    );
  }
}


const styles = {
  header:{
    backgroundColor: "transparent",
    height:100,
  },
  SubmitButtonStyle: {
 
    marginTop:1,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    width:'150%',
    backgroundColor:'white',
    borderRadius:30,
    borderWidth: 1,
    borderColor: '#fff'
  },

  leftButtonStyle: {
 
    marginTop:1,
    paddingTop:5,
    paddingBottom:5,
    marginLeft:95,
    marginRight:0,
    width:'130%',
    backgroundColor:'white',
    borderRadius:1,
    borderWidth: 1,
    borderColor: 'transparent'
  },
  rightButtonStyle: {
 
    marginTop:1,
    paddingTop:5,
    paddingBottom:5,
    marginLeft:0,
    marginRight:20,
    width:'130%',
    backgroundColor:'transparent',
    borderRadius:1,
    borderWidth: 1,
    borderColor: 'white'
  },

  TextStyle:{
    color:'black',
    textAlign:'center',
    fontWeight:'bold',
    fontSize:20

},

TopButton:{
  flexDirection:"row",
  backgroundColor: "transparent",
  position: 'absolute',
  width: '30%',
  height: '100%',
  marginLeft: 90,
  flex:1,
  justifyContent: 'center',
  alignItems: 'center'
},

  ScanButton:{
    backgroundColor: "orange",
    position: 'absolute',
    width: '30%',
    height: '100%',
    marginLeft: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  loginButtonSection: {
    backgroundColor: "orange",
    // position: 'absolute',
    width: '100%',
    height: '10%',
    // marginLeft: 90,
    justifyContent: 'center',
    alignItems: 'center'
 },
  header:{
    backgroundColor: "transparent",
    height:50,
  },
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  overlay: {
    position: 'absolute',
    padding: 16,
    right: 0,
    left: 0,
    alignItems: 'center'
  },
  topOverlay: {
    top: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bottomOverlay: {
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterBarcodeManualButton: {
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 40
  },
  scanScreenMessage: {
    fontSize: 14,
    color: 'white',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export default ProductScanRNCamera;