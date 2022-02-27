import React, { useState, useEffect } from 'react';
import { Platform, Text, View, StyleSheet, Dimensions } from 'react-native';
import * as Location from 'expo-location';

import { NativeBaseProvider, Box, VStack ,Heading, ScrollView, Flex, Button } from 'native-base';
import MapView, { Marker } from 'react-native-maps';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

const window = Dimensions.get('window');
const { width, height }  = window
const LATITUD_DELTA = 0.00001 
const LONGITUDE_DELTA = LATITUD_DELTA + (width / height)

export default function GpsPage({ navigation }) {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUD_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocation()
    let constFetch  = setInterval( getLocation, 10000 );
    return () => clearInterval(constFetch)
  }, []);

  async function getLocation(){

      let { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          navigation.navigate('Home')
          return false;
      }

      let location = await Location.getCurrentPositionAsync({});
      //let result = JSON.stringify(location);

      setLocation({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: LATITUD_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      });
  }

  return (
    <NativeBaseProvider>
      <MapView style={styles.map} initialRegion={{latitude: 22.302711,longitude: 114.177216, latitudeDelta: LATITUD_DELTA, longitudeDelta: LONGITUDE_DELTA}}>
        <Marker coordinate={{latitude: location.latitude ,longitude: location.longitude }} />
      </MapView>
    </NativeBaseProvider>
  );
}
