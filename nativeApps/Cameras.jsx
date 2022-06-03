import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux'

import { StyleSheet, Text, View } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
import { Entypo, Feather } from '@expo/vector-icons'; 

import { NativeBaseProvider, Button, Box, Heading } from 'native-base';

const languageData = require("./datafile/language.json");

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column-reverse',
    alignItems:'center',
    margin: 20,
  },
  buttonRight: {
      alignSelf: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});

export default function Cameras({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [hasPermissionCameraRoll, setHasPermissionCameraRoll] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);

  // Camera focus check
  const isFocused = useIsFocused(); //countModel.modelImagesUri

  // History data
  const countModel = useSelector(state => state.counter.value);
  const currentLanguage = useSelector(state => state.languageSet.currentLanguage);


  useEffect(() => {
    setCameraPermission()
  }, []);

  async function setCameraPermission(){
    const { status } = await Camera.requestPermissionsAsync();
    setHasPermission(status === 'granted');

    const { statusRoll } = await MediaLibrary.requestPermissionsAsync();
    setHasPermissionCameraRoll(statusRoll === 'granted');

  }

  // Gallery function
  async function imagePicker(){

    let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      alert("Permission to access camera roll is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    console.log(pickerResult.uri);

    if(!pickerResult.uri){
      return
    }

    navigation.navigate('predicts', {url: pickerResult.uri, targetPath: countModel.modelImagesUri});

  }

  if (hasPermission === null && hasPermissionCameraRoll === null) {
    return <View />;
  }
  if (hasPermission === false && hasPermissionCameraRoll === false) {
    return <Text>No access to camera</Text>;
  }
  
  async function takePicture(){

    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      console.log(data.uri);
      
      await MediaLibrary.saveToLibraryAsync(data.uri)
      navigation.navigate('predicts', {url: data.uri, targetPath: countModel.modelImagesUri});
    }

  }

  return (
    <View style={styles.container}>
        {isFocused &&
            <Camera style={styles.camera} type={type} ref={ ref => {this.camera = ref;}} ratio="1:1">           

              <NativeBaseProvider>

                <Heading size="2xl" shadow={3} pt={10} textAlign={"left"} ml={5} style={{color: "white"}}>
                  {countModel.modeltitle}
                </Heading>

                <Box style={styles.buttonContainer}>

                  <Button.Group space={6}> 

                    <Button
                    startIcon={<Feather name="camera" size={24} color="white" />}
                    onPress={() => takePicture() } >
                      { languageData["cameraPageCapPic"][currentLanguage] }
                    </Button>
                    
                    <Button
                    startIcon={<Entypo name="folder-images" size={24} color="white" />}
                    onPress={() => imagePicker() } >
                      { languageData["cameraPageGallery"][currentLanguage] }
                    </Button>

                  </Button.Group>

                </Box>

              </NativeBaseProvider>         

                
            </Camera>
        }
    </View>
    
  );
}
