import React from 'react';
import { Box } from 'native-base';
import { Text, Linking } from 'react-native';

function GoSearchBox({ words }){
    const word = words.split(" ").join("+");
    const lik = `http://www.google.com/search?q=${word}`;

    return(
        <Box rounded="md" p={1} mt={2} bg="primary.700" shadow={2}>
            <Text 
                style={{color:"white", fontSize: 15, fontWeight: "bold" }}
                onPress={() => Linking.openURL(lik)}
            > See more </Text>
        </Box>
    )
}

export default GoSearchBox