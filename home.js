import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';



function Home({ navigation }) {
    barcodeDetected = ({ barcodes }) => {
        if (barcodes && barcodes[0].type === 'QR_CODE') {
             console.log(barcodes[0].data);
        } else console.log(barcodes);
    };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Text>Testing</Text>
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
        >
        </RNCamera>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Time')}
      />
    </View>
  );
}


export default Home;