import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

const demoCode = `
SELECT plant_data.*,
json_agg( DISTINCT plant_common_name_data.common_name ) as common_name,
json_agg( DISTINCT plant_chinese_name_data.chinese_name ) as chinese_name,
json_agg( DISTINCT plant_sc_name_data.sc_name ) as sc_name,
json_agg( DISTINCT plant_scientific_name_data.scientific_name ) as scientific_name
FROM plant_data
JOIN plant_common_name_data
ON plant_data.id = plant_common_name_data.plant_id
JOIN plant_chinese_name_data
ON plant_data.id = plant_chinese_name_data.plant_id
JOIN plant_sc_name_data
ON plant_data.id = plant_sc_name_data.plant_id
JOIN plant_scientific_name_data
ON plant_data.id = plant_scientific_name_data.plant_id
WHERE plant_data.is_angiosperms = true
GROUP BY plant_data.id;

`;
    
function PostgresServerComp(){
    return (
        <>
            <Text>Postgres SQL is a backend database for query and storage use.</Text>
            <Prism language="sql">{demoCode}</Prism>
            <Text color="gray" size="xs">Samples of the SQL query data.</Text>
        </>
    )
}
    
export default PostgresServerComp
