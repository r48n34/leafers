import { Card, Text, Grid, Group } from "@mantine/core";
import { motion } from "framer-motion";
import CountUp from 'react-countup';
import { UserCircle, Camera } from 'tabler-icons-react';
import { useT } from "talkr";

function OtherIntroComp(){
    const { T } = useT();

    return (
        <div style={{ marginTop: "50px" }}>
        
        <h1 style={{ fontSize: "2.5rem", textAlign:"left" }}>
            {T("FeaturesText")}
        </h1>
        <br/>

        <Grid>
           
            <Grid.Col md={4} lg={4}>
                <motion.div whileHover={{ scale: 1.05, transition: { duration: 1 } }}>
                <Card shadow="sm" p="lg">
                <Group position="center">
                    <UserCircle size={100}/>
                </Group>
                <Text align='center' style={{ fontSize: "1.5rem" }}>
                    {T("Features.f1")}
                </Text>
                </Card>
                </motion.div>
            </Grid.Col>

            <Grid.Col md={4} lg={4}>
                <motion.div whileHover={{ scale: 1.05, transition: { duration: 0.5 } }}>
                <Card shadow="sm" p="lg">
                <Group position="center">
                    <CountUp end={5000} style={{ fontSize: "4rem" }}/>
                </Group>
                <Text align='center' style={{ fontSize: "1.5rem" }}>
                    {T("Features.f2")}
                </Text>
                </Card>
                </motion.div>
            </Grid.Col>

            <Grid.Col md={4} lg={4}>
                <motion.div whileHover={{ scale: 1.05, transition: { duration: 1 } }}>
                <Card shadow="sm" p="lg">
                <Group position="center">
                    <Camera size={100}/>
                </Group>
                <Text align='center' style={{ fontSize: "1.5rem" }}>
                    {T("Features.f3")}
                </Text>
                </Card>
                </motion.div>
            </Grid.Col>
         
        </Grid>
        
        </div>
    )
}
    
export default OtherIntroComp
