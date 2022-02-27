import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { toggleLanguage } from './redux/languageSlice'

import ConfirmDelete from './components/ConfirmDelete';
import { NativeBaseProvider, Button, HStack, Text, useToast } from 'native-base';

const languageData = require("./datafile/language.json");

function ExtraToast(){

  const toast = useToast();
  const dispatch = useDispatch();
  const currentLanguage = useSelector(state => state.languageSet.currentLanguage);

  function showTohseFunc(){
    toast.show({
      description: languageData["successToToggleLanguage"][currentLanguage]
    })
    dispatch( toggleLanguage() )
  }

  return(
    <Button onPress={ () => showTohseFunc() }>
      { languageData["settingPageLanguageToggle"][currentLanguage] }
    </Button> 
  )
}

function Setting() {

    //const dispatch = useDispatch();
    const currentLanguage = useSelector(state => state.languageSet.currentLanguage);

    return (
      <NativeBaseProvider>

        <HStack justifyContent="space-between" shadow={2} mt={2} ml={4} mr={4} alignItems="center">
          <Text> { languageData["settingPageDeleteHistory"][currentLanguage] } </Text>   
          <ConfirmDelete />  
        </HStack>

        <HStack justifyContent="space-between" shadow={2} mt={2} ml={4} mr={4} alignItems="center">
          <Text> { languageData["settingPageLanguage"][currentLanguage] } </Text>
          <ExtraToast/>
        </HStack>

      </NativeBaseProvider>
    );
}

export default Setting