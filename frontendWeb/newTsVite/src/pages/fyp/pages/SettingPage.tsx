import { useState, useEffect } from 'react';

import { motion } from 'framer-motion';
import { Container, Grid } from '@mantine/core';

import { useSelector } from 'react-redux'

import modelData from '../dataStorage/modelData.json'

import NameCard from '../smallComp/histComp/NameCard'
import AviableModel from '../smallComp/histComp/AviableModel'
import OfflineModel from '../smallComp/histComp/OfflineModel'
import OfflineCardList from '../smallComp/histComp/OfflineCardList'
import ConfigBox from '../smallComp/histComp/ConfigBox'

import Lottie from 'react-lottie-player'
import settingIcon from '../lottieItems/settingIcon.json'
import { RootState } from '../store';
import { useT } from 'talkr';

function SettingPage(){
    const [avaModelNum, setAvaModelNum] = useState(0);
    const userData = useSelector( (state:RootState) => state.counter.userData);
    const offModelData = useSelector( (state:RootState) => state.counter.offModelData);
    const { T } = useT();

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

            <h1><b>{T("UserInfo")}</b></h1>

            <Grid>

                <Grid.Col md={6} xl={6}>
                    
                    <NameCard userInfo={userData}/>
                    
                    <Grid className="mt-2">
                        <Grid.Col md={6} xl={6}>
                            <AviableModel num={avaModelNum}/>
                        </Grid.Col>
                        
                        <Grid.Col md={6} xl={6} >
                            <OfflineModel num={offModelData.length}/>
                        </Grid.Col>     
                    </Grid>

                    <Grid>
                        <Grid.Col md={12} xl={12}>
                            <OfflineCardList/>
                        </Grid.Col>
                    </Grid>
                    
                </Grid.Col>

                <Grid.Col md={6} xl={6}>
                    <ConfigBox/>
                    <div style={{ display: "flex", justifyContent:'center'}}>
                        <Lottie loop animationData={settingIcon} play style={{ width: "350px", height: "350px" }}/>
                    </div> 
                </Grid.Col>

            </Grid>
            
        </Container>
        </div>
        </motion.div>
        </>
    );
}

export default SettingPage