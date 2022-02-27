import { Container, Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { motion } from 'framer-motion';

import modelData from './dataStorage/modelData.json'
import { checkModelExist } from './utility/indexdbUtili'

import { iconCheckList } from "./dataStorage/iconNameRef";
import Lottie from 'react-lottie-player'
import leftGreenPc from './lottieItems/leftGreenPc.json'
import { useEffect } from "react";


import BottomRightQuestion from "./smallComp/BottomRightQuestion";

const MySwal = withReactContent(Swal)
const modelList = modelData;

function SelectModel(){

    let navigate = useNavigate();

    useEffect( () => {
      document.title = "Leafers - Select"
    },[])

    function qAndAModal(){
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

    function ModelBox(){
        return modelList.map( (i, index) => (
        <Col md={6} xl={4} key={ "mdList" + index } className="mb-3" >
          <Card text={"dark"}
            onClick={async () => {
              let modelExistLocal = await checkModelExist(i.shortTitle);

              if(modelExistLocal){ // downloaded in local
                navigate('/fyp/plays/' + i.shortTitle);
                return;
              }

              MySwal.fire({
                title: 'Are you sure to download the model (>20MB)? ',
                showCancelButton: true,
                confirmButtonText: 'Yes',
              }).then((result) => {
                
                if (result.isConfirmed) {
                  navigate('/fyp/plays/' + i.shortTitle);
                } 
              })
  
            }}
            style={{ borderRadius:"20px", textAlign:"center", backgroundColor:'#A5CF37', boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}>      
       
            <Card.Body style={{ marginTop:"10px", color:"white" }}>
              {iconCheckList[i.iconName]}
              <h3 className="cardContent"><b>{i.shortTitle}</b></h3>
            </Card.Body>                 
            
          </Card>
        </Col>)
        )
    }

    return(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div>
          
        <br/><br/><br/>
        
        <Container fluid >
                  
            <Row>
              <Col xl={6} md={12}>

              <Container fluid>
                
                <h1><b>Select model:</b></h1>
                <h5><b>Loading model takes data, make sure you have connected to wifi / LAN.</b></h5>
                <Lottie loop animationData={leftGreenPc} play style={{ width: "100%", height: "65%" }}/>

              </Container>

              </Col>

              <Col xl={6} md={12}>
                <Row className="mt-3">
                  <ModelBox/>
                </Row> 
              </Col>

            </Row>

            <BottomRightQuestion popFunc={qAndAModal}/>
            
        </Container>
        </div>
        </motion.div>
    );
}

export default SelectModel 