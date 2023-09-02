import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Grid, Card } from '@mantine/core';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { motion } from 'framer-motion';

import modelData from '../dataStorage/modelData.json'
import { checkModelExist } from '../utility/indexdbUtili'

import { iconCheckList } from "../dataStorage/iconNameRef";
import Lottie from 'react-lottie-player'
import leftGreenPc from '../lottieItems/leftGreenPc.json'

import BottomRightQuestion from "../smallComp/selectComp/BottomRightQuestion";
import { useT } from "talkr";

const MySwal = withReactContent(Swal)
const modelList = modelData;

function SelectModel() {
    const { T } = useT();
    let navigate = useNavigate();

    useEffect(() => {
        document.title = "Leafers - Select"
    }, [])

    function qAndAModal() {
        MySwal.fire({
            title: 'How to select?',
            html: (
                <div>
                    <h5>1. Select a model from right / bottom coner.</h5>
                    <h5>2. Drag or select a images from your devices.</h5>
                </div>
            ),
            showCancelButton: false,
            confirmButtonText: 'Got it!',
        })
    }

    function ModelBox() {
        return (
            <>
            { modelList.map((v, index) => (
            <Grid.Col md={6} xl={4} key={"mdList" + index} className="mb-3" >
                <Card
                    onClick={async () => {
                        let modelExistLocal = await checkModelExist(v.shortTitle);

                        if (modelExistLocal) { // downloaded in local
                            navigate('/fyp/plays/' + v.shortTitle);
                            return;
                        }

                        MySwal.fire({
                            title: T("SureDown") as string,
                            showCancelButton: true,
                            confirmButtonText: T("Yes") as string,
                            cancelButtonText: T("Cancel") as string,
                        }).then((result) => {

                            if (result.isConfirmed) {
                                navigate('/fyp/plays/' + v.shortTitle);
                            }
                        })

                    }}
                    style={{ borderRadius: "20px", textAlign: "center", backgroundColor: '#A5CF37', boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>

                    <Card.Section style={{ marginTop: "10px", color: "white" }}>
                        {(iconCheckList as any)[v.iconName]}
                        <h3 className="cardContent"><b>{v.shortTitle}</b></h3>
                    </Card.Section>

                </Card>
            </Grid.Col>
            ))}
            </>
        )
    }

    return (
        <motion.div
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -600, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>

                <Container fluid >

                    <Grid>
                        <Grid.Col xl={6} md={12}>

                            <Container fluid>

                                <h1><b>{T("Selectmodel")}:</b></h1>
                                <h5><b>{T("SelectmodelDescriptions")}</b></h5>
                                <Lottie loop animationData={leftGreenPc} play style={{ width: "100%", height: "65%" }} />

                            </Container>

                        </Grid.Col>

                        <Grid.Col xl={6} md={12}>
                            <Grid className="mt-3">
                                <ModelBox />
                            </Grid>
                        </Grid.Col>

                    </Grid>

                    <BottomRightQuestion popFunc={qAndAModal} />

                </Container>
            </div>
        </motion.div>
    );
}

export default SelectModel 