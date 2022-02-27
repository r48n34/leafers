import React, { useEffect }from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { toggleLanguage } from './redux/languageSlice'

import { NativeBaseProvider, Box, VStack ,Heading, ScrollView, Flex, Button } from 'native-base';

import { Ionicons } from '@expo/vector-icons'; 
import { gradientConfig } from './configFolder/gradientCon';

import ModelShowBox from './components/ModelShowBox';
import QuestionBox from './components/QuestionBox';
const languageData = require("./datafile/language.json");

function Yolo({ navigation }) {

    const dispatch = useDispatch();
    const currentLanguage = useSelector(state => state.languageSet.currentLanguage);
    const historyArr = useSelector(state => state.predictHistory.historyArr);

    function TopSteeingAndLanguageNav({ navigation }){
      return(
        <Flex ml={3} mr={3} pt={10} direction="row" justify='space-between' mb="2" mt="1" _text={{
          color: "coolGray.800"
        }}>
    
          <Ionicons name="settings-outline" size={30} color="black" onPress={ () => { navigation.navigate('setting') }} />
    
          <Flex direction="row">
          {/* <Ionicons name="md-help-circle-outline" size={30} color="black" /> */}
          <Ionicons name="location-outline" size={30} color="black" onPress={ () => { navigation.navigate('gpsPage') } } />
          {"  "}
          <QuestionBox data={[]}/>
          {"  "}
          <Ionicons name="ios-earth" size={30} color="black" onPress={ () => { dispatch( toggleLanguage() ) }}/>
          </Flex>
    
        </Flex>
      )
    }

    function HistoryBoxList({ data }){

      if(!data || data.length === 0){
        return( 
          <Heading size="md" shadow={2} mt={12} textAlign={"center"} >
            { languageData["predictNoHistory"][currentLanguage] }
          </Heading>
        )
      }

      let sortArr = [...data].sort( (a,b) => b.predictTime.localeCompare( a.predictTime ))
    
      return sortArr.map( (v,i) => (
        <Box key={ v.predictTime } bg={{
          linearGradient: {
            colors: ["lightBlue.300", "violet.800"],
            start: [0, 0],
            end: [1, 0]
          }
        }} 
        p="6" rounded="xl" 
          _text={{
          fontSize: "md",
          fontWeight: "medium",
        }} ml={3} mr={3} mt={3} p={2} >
    
        <Flex direction="row" justify='space-between'>
    
          <Heading size="sm" textAlign={"left"} color={"white"}>
          { v.modelName }
          </Heading>
    
          <Flex direction="row">
            <Heading size="sm" color={"white"}>
            { v.predictTime }
            </Heading>
          </Flex>
    
        </Flex> 
    
        
        <Heading size="lg" textAlign={"left"} color={"white"}>
            {v.top1? v.top1.label : ""}
        </Heading>
    
    
        </Box>
        )
      )
    }
    
    return ( 
      <NativeBaseProvider config={gradientConfig}>
  
        <TopSteeingAndLanguageNav navigation={navigation} />
        
        <Heading shadow={2} pt={1} ml={3} textAlign={"left"}>
          { languageData["mainTitle"][currentLanguage] }
        </Heading>

        <ScrollView horizontal={true} ml={3} mr={3} maxH={200}>
          <VStack space={1} direction="row"> 
            <ModelShowBox navigation={navigation}/>
          </VStack>
        </ScrollView>                                                                                                           

        <Heading shadow={2} pt={1} ml={3} textAlign={"left"}>
          { languageData["predictTitle"][currentLanguage] }
        </Heading>

        <ScrollView>
          <HistoryBoxList data={historyArr} />      
        </ScrollView> 

      </NativeBaseProvider>   
    );
}


export default Yolo
