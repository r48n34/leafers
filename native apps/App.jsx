import React, { useEffect } from 'react';

import { useSelector, Provider, useDispatch } from 'react-redux'
import { setHistoryArr } from './redux/predictHistorySlice';
import store from './store'

import Yolo from './Yolo'
import Cameras from './Cameras'
import Setting from './Setting'
import PredictionPage from './PredictionPage'
import SeeDetails from './SeeDetails'
import HistoryDisplay from './HistoryDisplay'
import GpsPage from './GpsPage';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons, FontAwesome5 } from '@expo/vector-icons';

import { getHistory } from './utilityFunction/historyUtility';

const languageData = require("./datafile/language.json");

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function BelowTag(){

  const dispatch = useDispatch();
  const currentLanguage = useSelector(state => state.languageSet.currentLanguage);

  useEffect( () => {
    ( async () => {
      let temp = await getHistory();
      dispatch( setHistoryArr(temp) );
    })(); 
  },[])

  return (
    <Tab.Navigator>

      <Tab.Screen name="Home" component={Yolo}
        options={{
          headerShown: false,
          tabBarLabel: languageData["homeNav"][currentLanguage],
          tabBarIcon: () => (
            <Ionicons name="home" color="black" size={24} />
          ),

        }}
      />

      <Tab.Screen name="HistoryDisplay" component={HistoryDisplay}
        options={{
          headerShown: true,
          tabBarLabel: languageData["historyNav"][currentLanguage],
          headerTitle: languageData["historyNav"][currentLanguage],
          tabBarIcon: () => (
            <FontAwesome5 name="history" size={24} color="black" />
          )
        }}
      />

    </Tab.Navigator>
  );
}

function StackNavComp(){
  const currentLanguage = useSelector(state => state.languageSet.currentLanguage);

  return(
    <Stack.Navigator initialRouteName="homeTag">
          <Stack.Screen name="homeTag" component={BelowTag} options={{headerShown: false}}/>
          <Stack.Screen name="gpsPage" component={GpsPage} options={{headerShown: true , headerTitle: languageData["gpsPageTitle"][currentLanguage] }}/>
          <Stack.Screen name="cameras"  component={Cameras} options={{headerShown: false}}/>
          <Stack.Screen name="setting"  component={Setting} options={{headerShown: true, headerTitle: languageData["settingPageTitle"][currentLanguage] }}/>
          <Stack.Screen name="seeDetails"  component={SeeDetails} options={{headerTitle: languageData["pressSeeMoreTitle"][currentLanguage] }}/>
          <Stack.Screen name="predicts" component={PredictionPage} 
            options={{ 
              headerShown: false,
              title: languageData["pressSeeMoreTitle"][currentLanguage], 
              headerTintColor: '#fff',
              headerStyle: { backgroundColor: '#f4511e',} 
            }}
          />
    </Stack.Navigator>

  )
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNavComp/>
      </NavigationContainer>
    </Provider>
  );
}
