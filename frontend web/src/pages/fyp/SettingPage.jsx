import React, { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Container, Row, Col } from "react-bootstrap";

import { useSelector } from 'react-redux'

import modelData from './dataStorage/modelData.json'

import NameCard from './smallComp/histComp/NameCard'
import AviableModel from './smallComp/histComp/AviableModel'
import OfflineModel from './smallComp/histComp/OfflineModel'
import OfflineCardList from './smallComp/histComp/OfflineCardList'
import ConfigBox from './smallComp/histComp/ConfigBox'

import Lottie from 'react-lottie-player'
import settingIcon from './lottieItems/settingIcon.json'

function SettingPage(){
    const [avaModelNum, setAvaModelNum] = useState(0);
    const userData = useSelector( (state) => state.counter.userData);
    const offModelData = useSelector( (state) => state.counter.offModelData);

    useEffect( () => { 
        document.title = "Leafers - Setting"
        setAvaModelNum(modelData.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return(
        <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >

        <div>
        <Container fluid>

            <br/><br/><br/>
            <h1><b>User Info</b></h1>

            <Row>

                <Col md={6} xl={6}>
                    
                    <NameCard userInfo={userData}/>
                    
                    <Row className="mt-2">
                        <Col md={6} xl={6}>
                            <AviableModel num={avaModelNum}/>
                        </Col>
                        
                        <Col md={6} xl={6} >
                            <OfflineModel num={offModelData.length}/>
                        </Col>     
                    </Row>

                    <Row >
                        <Col md={12} xl={12}>
                            <OfflineCardList/>
                        </Col>
                    </Row>
                    
                </Col>

                <Col md={6} xl={6}>
                    <ConfigBox/>
                    <div style={{ display: "flex", justifyContent:'center'}}>
                        <Lottie loop animationData={settingIcon} play style={{ width: "350px", height: "350px" }}/>
                    </div> 
                </Col>

            </Row>
            
        </Container>
        </div>
        </motion.div>
        </>
    );
}

export default SettingPage