import React from 'react';
import { useSelector } from 'react-redux'
import { Linking } from 'react-native';

import { Box, Heading, Button, Flex } from 'native-base';

const languageData = require("../datafile/language.json");

function TopOneBox({ label, confident, rank }){

    const word = label.split(" ").join("+");
    const searchlink = `http://www.google.com/search?q=${word}`;

    return(
        <Box bg={{
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
            color: "warmGray.50",
            textAlign: "center"
          }} ml={3} mr={3} p={1} mb={4}>
      
            <Heading size="2xl" shadow={2} pt={1} ml={3} mb={4} textAlign={"left"} color={"white"}>
                {rank}
            </Heading>

            <Flex direction="row" justify='space-between'>

                <Box>
                    <Heading size="md" ml={3} textAlign={"left"} color={"white"} >
                        {label}
                    </Heading>
                    <Heading size="sm" ml={3} textAlign={"left"} color={"white"} >
                        { (confident * 100).toFixed(2) + "%" }
                    </Heading>
                </Box>

            </Flex>

            <Button onPress={() => { Linking.openURL(searchlink) } } mt={3} colorScheme="info">Search</Button>
      
        </Box>
    )
}

function TopOneBoxList({ data }){
    let tempArr = [];

    for(let i = 0; i < 5; i ++){
        tempArr.push(
            <TopOneBox rank={i+1} label={data[`top${i+1}`] ? data[`top${i+1}`].label : ""} confident={data[`top${i+1}`] ? data[`top${i+1}`].confident : 0} key={"boxex" + i}/>
        )
    }

    return tempArr.map( (v,i) => (v) )
}


function PredictResultDetails ({ data }){
    const currentLanguage = useSelector(state => state.languageSet.currentLanguage);

    return(
        <>
            <Heading size="xl" textAlign={"center"} color={"black"}>
                { languageData["predictResultBox"][currentLanguage] }
            </Heading>

            <TopOneBoxList data={data} />
        </>
    )
}

export default PredictResultDetails