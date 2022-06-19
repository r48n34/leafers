import { Text, Space, Grid } from '@mantine/core';
import { CloudComputing, DevicesPc } from 'tabler-icons-react';
    
function LocalPCScrappedComp(){
    return (
        <>
        <Text>Several Devices will be used to active the python script for the sake of efficiency.</Text>
        <Space/>
        <Grid justify="center" align="center" style={{ textAlign:"center"}}>
            <Grid.Col span={12}  >
                <CloudComputing size={36}/>
                <Text>Database</Text>
            </Grid.Col>
            <Grid.Col span={6}>
                <DevicesPc size={36}/>
                <Text>PC 1</Text>
            </Grid.Col>
            <Grid.Col span={6}>
                <DevicesPc size={36}/>
                <Text>PC 2</Text>
            </Grid.Col>
        </Grid>
        </>
    )
}
    
export default LocalPCScrappedComp
