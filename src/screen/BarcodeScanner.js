/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { Component } from 'react';
import { View, PermissionsAndroid, Platform } from 'react-native';
import { CameraKitCameraScreen, } from 'react-native-camera-kit';

var isFirstGet = true;
//default는 App.js에서만 사용해야 하는 듯 
export class BarcodeScanner extends Component {

  constructor(props) {
    super(props);
  };


  componentDidMount() {
    //isFirstGet의 이전 값이 남아 있어서 다시 실행할 때 true를 할당해야 함 
    isFirstGet = true;
  }

  componentWillUnmount() {

  }


  /**
 * 바코드 스캔
 */

  onBarcodeScan(barcodeValue) {
    console.log("onBarcodeScan function start")
    if (!isFirstGet) {      
      return
    }

    isFirstGet = false
   // this.props.route.params.onGetBarcode(barcodeValue);
    //바코드 정보 firebase로 데이터 넣기 

    //TODO 필요한 부분 구현하세요
    console.log("scanned barcode value: " + barcodeValue)
    this.props.navigation.navigate('CameraRoll', { barcodeValue: barcodeValue })
    //called after te successful scanning of QRCode/Barcode
  } 

  //TODO Home.js로 이동시키세요 
  checkCameraPermission() {

  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CameraKitCameraScreen
          showFrame={true}
          //Show/hide scan frame
          scanBarcode={true}
          //Can restrict for the QR Code only
          laserColor={'blue'}
          //Color can be of your choice
          frameColor={'yellow'}
          //If frame is visible then frame color
          colorForScannerFrame={'black'}
          //Scanner Frame color
          onReadCode={event =>
            this.onBarcodeScan(event.nativeEvent.codeStringValue)
          }
        />
      </View>
    );
  }
}