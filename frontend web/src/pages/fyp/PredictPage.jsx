import { Container, Row, Col, Card, Spinner, Button, Form } from "react-bootstrap";
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useSelector } from 'react-redux'

import { FileUploader } from "react-drag-drop-files";

import { motion } from 'framer-motion';
import { FiArrowLeft } from "react-icons/fi";

import { createModel, predictResultTopFive } from './utility/predictUtili'
import { checkModelExist } from './utility/indexdbUtili'
import { addCollectionsTwoLayerNoSecDoc } from './services/firebaseUse'

import modelData from './dataStorage/modelData.json'
import full from './img/full.jpg';
import ModelResultBox from './smallComp/ModelResultBox'

import DeleteModelBtn from './smallComp/DeleteModelBtn'
import SaveModelBtn from './smallComp/SaveModelBtn'

import BottomRightQuestion from "./smallComp/BottomRightQuestion";

const MySwal = withReactContent(Swal)
let modelIndex;

const dummyData = {

    "modeltitle":"",
    "shortTitle":"",
    "modeltype":"",
    "iconName":"",
    "bgColor":"",
    "modelSubtitle":"",
    "modelapiPath":"",
    "modelShowStatus": true,
    "modelImagesUri": "",
    "imageAlt": "",
    "predictMode": "",
    "online" : true,
    "buttonDisable": false,
    "defaultThreshold" : 0.4,
    "labels": [] ,
    "offlineInfo" : {
        "size": 0,
        "divValue": 1,
        "subVal": 1,
        "modelFunctionId" : -1
    }
}

function PredictPage(){

    const [preview, setPreview] = useState(full); // img path
    const [myModel, setMyModel] = useState(); // model container
    const [myModelInfo, setMyModelInfo] = useState(dummyData); // model info

    const [loadingPredict, setloadingPredict] = useState(false); // is model predicting
    const [message, setMessage] = useState( {status:true} ); // message container

    const userInfo = useSelector( (state) => state.counter.userData); 
    const userSetting = useSelector( (state) => state.counter.userSetting); 
    const isGuest = useSelector( (state) => state.counter.isGuest); 

    const offModelData = useSelector( (state) => state.counter.offModelData);
    const [ isCurrentModelDownloaded, setIsCurrentModelDownloaded ] = useState(false);

    const navigate = useNavigate();
    let { mdName } = useParams();

    useEffect( () => {
   
        let isOff = offModelData.filter( v => v.modeltitle === myModelInfo.modeltitle);
        setIsCurrentModelDownloaded( isOff.length >= 1 );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[offModelData])

    useEffect(() => {
        (async () => {

            document.title = "Leafers - Predict"

            const nameList = modelData.map( (v) => v.shortTitle);
            modelIndex = nameList.indexOf(mdName);

            if(modelIndex < 0){
                return;
            }

            MySwal.fire({
                title: 'Model loading...',
                html: 'Waiting for model load in, please wait.',
                timerProgressBar: true,
                allowEscapeKey: false,
                showCloseButton: false,
                showCancelButton: false,
                showConfirmButton: false,
                allowOutsideClick: false,
                didOpen: () => {
                    Swal.showLoading()
                }
            })

            const modelName = modelData[modelIndex].shortTitle
            const isExisting = await checkModelExist(modelName);

            setMyModelInfo(modelData[modelIndex]);

            let url = isExisting ? ('indexeddb://' + modelName) : modelData[modelIndex].modelapiPath;
            initModel(url);

            async function initModel(url){
                let mod = await createModel(url, "GraphModel");
                MySwal.close();
                setMyModel(mod); 
            }

        })();
           
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
  
        (async () =>{

            if(preview === full){
                return;
            }

            setloadingPredict(true);
            setMessage({
                status: true,
                top1: { label: "", confident: "" },
                top2: { label: "", confident: "" },
                top3: { label: "", confident: "" },
                top4: { label: "", confident: "" },
                top5: { label: "", confident: "" },
                object : "",
                confident : "",
                timeTaken: "",
                timeTakenOffset: "",
            });

            let onlineStatus = true;     

            let res = await predictResultTopFive(
                myModel,
                "img",
                myModelInfo.offlineInfo.size,
                myModelInfo.offlineInfo.subVal,
                myModelInfo.offlineInfo.divValue,
                myModelInfo.labels,
                onlineStatus
            );

            const dbObject = {
                modelName: modelData[modelIndex].shortTitle,
                modelapiPath: modelData[modelIndex].modelapiPath,
                item: res.top1.label,
                confident: res.top1.confident,
                createAt: new Date()
            };
            
            // user config allow to upload 
            if(userSetting.uploadHist && userInfo && (parseInt(res.top1.confident) > myModelInfo.defaultThreshold * 100 && !isGuest) ){
                await addCollectionsTwoLayerNoSecDoc("users", userInfo.uid, "predictHistory",dbObject);
            }

            if(parseInt(res.top1.confident) < myModelInfo.defaultThreshold * 100){
                res['object'] = "Recognize unsuccess";
            }


            setloadingPredict(false);
            setMessage(res);

        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preview]);

    function LabelListComp({ data }){

        if(!data || data.length === 0){
            return (<h3>none</h3>)
        }

        return data.map( (v,i) => {
            let scarchStr = v.split(" ").join("+");
            return(
                <div key={i+v}>
                    <a href={"http://www.google.com/search?q=" + scarchStr} target="_blank" rel="noreferrer"> 
                    <h4 >{i+1}: {v}</h4>
                    </a>
                </div>
            )
        })     
    }

    function qAndAModal(){
        MySwal.fire({
          title: 'How to predict?',
          html: (
          <div>
            <h5>1. Drag or select a images from your devices.</h5>
            <h5>2. Wait for the result.</h5>
            <h5>3. Repeat step 1.</h5>
          </div>
          ),
          showCancelButton: false,
          confirmButtonText: 'Got it!',
        })
    }

    function searchBarfiler(strVal){

        if(!strVal){
            return;
        }

        let a = myModelInfo.labels.filter( (v) => v.toLowerCase().includes( strVal.toLowerCase() ) );
        console.log(a);
        
        MySwal.fire({
            title: 'Search result',
            allowEnterKey: false,
            allowEscapeKey: true,
            showCloseButton: true,
            confirmButtonText: 'back',
            html: <LabelListComp data={a}/>, 
        }).then(() => {
            LabelSearchModel();
        });

    }

    function LabelSearchModel(){
        MySwal.fire({
            showCloseButton: true,
            html:
            <div>
                <h3><b>Details</b></h3>
                
                <Form.Control type="text" placeholder="Search" className="mb-2" 
                    onKeyDown={(e) => { (e.keyCode === 13) && (searchBarfiler(e.target.value)) }}
                />
                
                <LabelListComp data={myModelInfo.labels}/>
            </div>
        })     
    }

    const handleInputImages = (file) => {
        console.log(file);
        if(!file){
            return
        }
        setPreview( URL.createObjectURL(file) );
    };

    return(
        <>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div>
            <Container fluid >

            <br/><br/><br/>
            <FiArrowLeft size={35} onClick={ () => navigate(-1)}/>

            <div style={{textAlign:"center"}}>

                <h1 style={{textAlign: "center"}}><b>Input your pictures ({myModelInfo.shortTitle})</b></h1>

                <Row className="mt-4">

                    <Col md={12} lg={6} className="mb-4">
                        <img id="img" src={preview} style={{ width:"50%", height:"auto" }} alt="pics"/>
                        <br></br>
                        <label><h3>Select image: </h3></label>{" "}
                        <div style={{ display:"flex", justifyContent:"center" }}>
                            <FileUploader handleChange={handleInputImages} name="file" types={["JPG", "PNG"]} />
                        </div>
                    </Col>

                    <Col md={12} lg={6}>           
                    <Card text={"dark"} className="mb-2" style={{ borderRadius:"20px", textAlign:"center"}}>     
                        <Card.Body style={{marginTop:"10px"}}>
                        <h1>Informations</h1>

                        { isCurrentModelDownloaded ? 
                        <DeleteModelBtn modelName={myModelInfo.shortTitle}/> :
                        <SaveModelBtn myModel={myModel} shortTitle={myModelInfo.shortTitle}/> }
                        {"  "}
                        <Button variant="dark" onClick={async() => LabelSearchModel() }> Know more </Button> 

                        { loadingPredict && <div><Spinner animation="border" variant="dark"/><h4>May take times for first time.</h4></div>}               
                        { message.status ? <div><ModelResultBox message={message} /></div> : <h1>Invalid input, please try again.</h1>}

                        <h3 style={{textAlign:"left"}}>Target object ({myModelInfo.labels.length}): </h3>
                        
                        <br/>

                        </Card.Body>
                    </Card>    
                    </Col>

                </Row>
            </div>

            <BottomRightQuestion popFunc={qAndAModal}/>

            </Container>

        </div>
        </motion.div>
        </>
    );
}

export default PredictPage;