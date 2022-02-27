import React  from 'react';
import { useSelector } from 'react-redux'
import { Box, Heading, Button, Flex } from 'native-base';

import ConfirmWifi from './ConfirmWifi';
const languageData = require("../datafile/language.json");

function ModelShowBox({ navigation }){

    const currentLanguage = useSelector(state => state.languageSet.currentLanguage);
    let modelDataLocal = require("../datafile/data.json");
    let showModel = modelDataLocal.filter( v => !v.buttonDisable )

    return showModel.map( (v,i) => (
      <Box key={v.modeltitle + i} bg={{
        linearGradient: {
          colors: ["lightBlue.300", "violet.800"],
          start: [0, 0],
          end: [1, 0]
        }
      }} 
      p="12" rounded="xl" 
        _text={{
        fontSize: "md",
        fontWeight: "medium",
        color: "warmGray.50",
        textAlign: "center"
      }} p={1} width={300} mr={5}>
  
      <Heading size="xl" shadow={2} pt={1} ml={3} textAlign={"left"} color={"white"}>
        { v.modeltitle }
      </Heading>

      <Heading size="sm" shadow={2} pt={1} ml={3} mb={16} textAlign={"left"} color={"white"}>
        { currentLanguage === "en" ? v.modelSubtitle : v.modelSubtitlehk }
      </Heading>
  
      <Flex ml={3} mr={3} pt={0} direction="row" justify='space-between' mb="2" mt="1" _text={{
        color: "coolGray.800"
      }}>
  
        {""}
  
        <Flex direction="row">
            <Button colorScheme="blueGray" shadow={2} onPress={() => { 
            navigation.navigate('seeDetails', { info: v });
            }}>
            { languageData["detailBtn"][currentLanguage] }
            </Button>{"   "}
    
            <ConfirmWifi navigation={navigation} data={v}/>
        </Flex>
  
      </Flex>
  
    </Box>
    )) 
}

export default ModelShowBox