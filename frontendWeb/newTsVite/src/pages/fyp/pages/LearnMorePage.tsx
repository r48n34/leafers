// import FlowCharComp from "../smallComp/LearnMorePageComp/flowCharComp"
import TopNavBar from "../smallComp/loginComp/TopNavBar"
import { Parallax } from 'react-scroll-parallax';
import { Container, Card  } from "@mantine/core";

import { ImgComparisonSlider } from '@img-comparison-slider/react';


import { motion } from "framer-motion"

function LearnMorePage(){

    return (
        <div style={{ overflowY:"hidden", overflow: "hidden" }}>
        <TopNavBar/>
        <Container size={"lg"}>

            {/* {Array(5).fill(0).map( v => <br/>)} */}

            <Parallax 
                translateX={["40%", '0%']} 
                style={{ fontSize:"1rem", padding: 0 }}
            >
                <h1 >Oh Hello there</h1>
            </Parallax>

            <Parallax 
                translateX={["-400%", "20%"]} 
                translateY={['500px', '500px']}
                rotate={[0, 5]}
                style={{ fontSize:"2rem", padding: 0 }}
            >
                <h1 style={{  display:"inline", overflow: "hidden",  whiteSpace: "nowrap" }}>
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                </h1>

                <div style={{ width: "40%" }}>
                <Card shadow="sm" p="lg">
                    Hello
                    Hello
                    Hello
                </Card>

                </div>
            </Parallax>  

            <div>
            <motion.div
                // animate={{ scale: 0.5 }}
                // drag="x"
                // dragConstraints={{ left: -100, right: 100 }}
                animate={{ rotate: 360 }}
                transition={{ ease: "linear", duration: 2, repeat: Infinity }}
                style={{ 
                    background: "white",
                    borderRadius: "30px",
                    width: "150px",
                    height: "150px"
                }}
            >
            </motion.div>
            </div>

            <Parallax 
                translateX={["0%", "50%"]} 
                translateY={['450px', '450px']} 
                style={{ fontSize:"2rem", padding: 0 }}
            >
                <div style={{ width: "40%" }}>
                <Card shadow="sm" p="lg">
                    Hello
                    Hello
                    Hello
                    Hello
                </Card>
                </div>
            </Parallax>

  

            <Parallax 
                translateX={["-400%", "20%"]} 
                translateY={['500px', '500px']} 
                style={{ fontSize:"2rem", padding: 0 }}
            >
                <h1 style={{  display:"inline", overflow: "hidden",  whiteSpace: "nowrap" }}>
                    Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello Hello
                </h1>
                
                <div style={{ width: "40%" }}>
                <Card shadow="sm" p="lg">
                    Hello
                    Hello
                    Hello
                </Card>
                </div>
            </Parallax>


            {Array(30).fill(0).map( _ => <br/>)}

            <div>
            <Card shadow="sm">
            <ImgComparisonSlider>
                <img slot="first" src="https://img-comparison-slider.sneas.io/demo/images/before.webp" />
                <img slot="second" src="https://img-comparison-slider.sneas.io/demo/images/after.webp" />
            </ImgComparisonSlider>
            </Card>
            </div>
            

            {/* <Parallax speed={-200}>
                <h1>fgfsdgfgfdgdfgdfsgrtyhertydfsg</h1>
            </Parallax>
            <br/>
            <Parallax speed={-20}>
                <div>
                <Card shadow="sm" p="lg">
                    Hello
                    Hello
                    Hello
                </Card>
                </div>
            </Parallax>

            <br/>

            <Parallax 
                translateX={['-200px', '0px']}
                scale={[0.2, 1]}
                rotate={[-180, 0]}
                easing="easeInQuad"
                speed={-50}
            >
                <div style={{ width: "200px", height:"200px", backgroundColor:"#25262b"}}>
                </div>

            </Parallax>

            <Grid>

                <Grid.Col span={6}>
                    <Parallax speed={-20}>
                    <Card shadow="sm" p="lg">
                    Hello
                    Hello
                    Hello
                    </Card>
                    </Parallax>
                </Grid.Col>

                <Grid.Col span={6}>
                    <Card shadow="sm" p="lg">
                        Hello
                        Hello
                        Hello
                    </Card>
                </Grid.Col>

            </Grid> */}

            {Array(80).fill(0).map( _ => <br/>)}

            {/* <FlowCharComp/> */}
        </Container>
        </div>
    )
}
    
export default LearnMorePage