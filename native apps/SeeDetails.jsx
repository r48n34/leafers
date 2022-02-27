import React, { useState, useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { NativeBaseProvider, Heading, HStack, Input, ScrollView } from 'native-base';

function ItemListAll({ arr }){
    return arr.map( (v, i) =>{
        return(
            <Heading key={v} size="sm" textAlign={"left"} ml={4}> {i+1}. {v} </Heading>        
        )
    })
}

function SeeDetails({ route }){

    // Pass in data of the model
    const { info } = route.params;

    // Target print array of the data
    const [printArr, setPrintArr] = useState([]);

    // Is below components loading
    const [loadingText, setLoadingText] = useState(true);

    useEffect(()=>{
        setPrintArr(info.labels);
        setLoadingText(false);
    },[])

    // Searching functions
    async function findString(data){
        setLoadingText(true);

        let result = info.labels.filter( (v) =>{ return v.toLowerCase().search( data.toLowerCase() ) >= 0} );

        setPrintArr(result);
        setLoadingText(false);
    }

    return(
        <NativeBaseProvider>
        
            <Heading size="md" shadow={2} pt={2} textAlign={"center"} >
                {info.modeltitle + " labels"}
            </Heading>

            <Input placeholder="Search" pt={2} pb={2}
                variant="filled" width="100%" bg="gray.100" py="1" px="2"
                placeholderTextColor="gray.500" borderWidth="0"
                _hover={{ bg: 'gray.200', borderWidth: 0 }}
                _web={{
                    _focus: { style: { boxShadow: 'none' } },
                }}
                onChangeText = {(data) => findString(data)}
            />

            {loadingText && <ActivityIndicator size="large" color="#0000ff"/>}

            <ScrollView>
                <ItemListAll arr={printArr}/>
            </ScrollView>
        
        </NativeBaseProvider>
    )

}

export default SeeDetails