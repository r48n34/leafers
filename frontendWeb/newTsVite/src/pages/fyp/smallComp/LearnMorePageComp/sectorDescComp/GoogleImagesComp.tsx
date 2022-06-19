import { Text, Space } from '@mantine/core';
import { Prism } from '@mantine/prism';

const demoCode = `
{
    "species_id": "5658",
    "species_name": "esculentus",
    "family_no": "105",
    "family_name": "Malvaceae",
    "family_name_chi": "錦葵科",
    "family_name_sc": "锦葵科",
    "common_name": [  "Okra",  "Gumbo" ],
    "chinese_name": [ "咖啡黃葵", "金寶菜" ],
    "sc_name": [
        "咖啡黄葵",
        "金宝菜"
    ],
    "scientific_name": [
        "Abelmoschus esculentus"
    ]
}
`;

function GoogleImagesComp(){
    return (
        <>
        {/* <Text size="xl">Data scurces</Text> */}
        <Text>All images data are from google images.</Text>
        <Text>To understandard what images will be scrapped from Google, we obtain JSON data from "Hong Kong Herbarium"</Text>
        <Space/>
        <Prism language="json">{demoCode}</Prism>
        <Text color="gray" size="xs">Samples of the JSON data.</Text>
        </>
    )
}
    
export default GoogleImagesComp
