import { Text, Grid, Space } from '@mantine/core';
import CountUp from 'react-countup';

function PythonDataProcessingComp(){
    return (
        <>
        <Text>Not all scrapped aimages are valid.</Text>
        <Text>Invalid data will be filted by pre-trained model for identify which images will be keeped.</Text>
        <Space h="lg"/>
        <Grid>
           
            <Grid.Col span={6}>
                <CountUp end={1200000} style={{ fontSize: "2rem" }}/>
                <Text align='left'>Scrapped images</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <CountUp end={35} style={{ fontSize: "2rem" }}/>
                <Text align='left'>GB data</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <CountUp end={86831} style={{ fontSize: "2rem" }}/>          
                <Text align='left'>Final used images</Text>
            </Grid.Col>

            <Grid.Col span={6}>
                <CountUp end={7} style={{ fontSize: "2rem" }}/>
                <Text align='left'>% Left at final</Text>
            </Grid.Col>
          
        </Grid>
        </>
    )
}
    
export default PythonDataProcessingComp
