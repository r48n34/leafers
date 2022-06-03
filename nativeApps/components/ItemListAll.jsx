import React from 'react';
import { Box, HStack, Heading } from 'native-base';

function ItemListAll({ data }){
    return data.map( (v, i) => (
        
        <Box key={i + v} pl={3} pr={3}>

        <HStack justifyContent="space-between" shadow={2} pt={2}  >
            <Heading size="sm" textAlign={"center"} > {v.modelName} </Heading>
            <Heading size="sm" textAlign={"center"} > {v.predictTime} </Heading>
        </HStack>

        <Heading size="sm" textAlign={"left"} pl={1}>
            1. {v.top1.label} ({(v.top1.confident * 100).toFixed(2)}%)
        </Heading>

        <Heading size="sm" textAlign={"left"} pl={1}>
            2. {v.top2.label} ({(v.top2.confident * 100).toFixed(2)}%)
        </Heading>

        <Heading size="sm" textAlign={"left"} pl={1}>
            3. {v.top3.label} ({(v.top3.confident * 100).toFixed(2)}%)
        </Heading>

        <Heading size="sm" textAlign={"left"} pl={1}>
            4. {v.top4.label} ({(v.top4.confident * 100).toFixed(2)}%)
        </Heading>

        <Heading size="sm" textAlign={"left"} pl={1}>
            5. {v.top5.label} ({(v.top5.confident * 100).toFixed(2)}%)
        </Heading>
            
        </Box>
    ))
}

export default ItemListAll