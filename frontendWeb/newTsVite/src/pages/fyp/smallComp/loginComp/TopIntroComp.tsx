import TypeIt from "typeit-react";

import { Container, Grid } from "@mantine/core";

import { motion } from "framer-motion";
import { Zoom } from "react-awesome-reveal";
import { useReward } from 'react-rewards';

import Lottie from "react-lottie-player";
import webIcon from '../../lottieItems/pageweb.json'
import plants from '../../lottieItems/plants.json'

import { FaLeaf } from "react-icons/fa";
import { useT } from "talkr";

    
function TopIntroComp(){
    const { T } = useT();
    const { reward, isAnimating } = useReward('rewardIdtoLeafers', 'emoji',{
        lifetime: 250,
        elementSize: 35,
        emoji: ['🤓', '😊', '🥳','🎉']
    });

    return (
        <Container fluid>

        <Zoom duration={1500}>
        <Grid>

            <Grid.Col xl={5} md={12} >

                <motion.div
                    onClick={reward}
                    whileHover={{ scale: 1.01 }}
                >
                    
                    <div style={{ marginTop: "60px", textAlign: "center" }} id="rewardIdtoLeafers">
                        <h5 style={{ fontSize: "20px", margin: 0 }}> <b>{T("descriptions")}</b> </h5>
                        <h1 style={{ fontSize: "80px", color:"#019444" }}> <b><FaLeaf color={"#019444"} /> Leafers</b> </h1>
                        <TypeIt
                            options={{
                                speed: 90,
                                nextStringDelay: 4000,
                                waitUntilVisible: true,
                                loop: true
                            }}
                        >
                            {T("lpp")}
                        </TypeIt>
                        <div style={{ display: "flex", justifyContent: 'center' }}>
                            <Lottie loop animationData={plants} play style={{ width: "60%", height: "60%" }} />
                        </div>
                    </div>
                </motion.div>

            </Grid.Col>


            <Grid.Col xl={7} md={12} style={{ textAlign: "right" }}>
                <motion.div whileHover={{ scale: 1.02 }}>
                    <Lottie loop animationData={webIcon} play style={{ width: "100%", height: "100%" }} />
                </motion.div>
            </Grid.Col>
        </Grid>
        </Zoom>

    </Container>
    )
}
    
export default TopIntroComp
