import { Card, Container, Button, Grid, Loader, UnstyledButton  } from '@mantine/core';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'
import { FileUploader } from "react-drag-drop-files";

import { motion } from 'framer-motion';
import { FiArrowLeft } from "react-icons/fi";

import { createModel, predictResultTopFive } from '../utility/predictUtili'
import { checkModelExist } from '../utility/indexdbUtili'
import { addCollectionsTwoLayerNoSecDoc } from '../services/firebaseUse'

import { labelSearchModel } from "../smallComp/LabelSearchModel";

import modelData from '../dataStorage/modelData.json'
import full from '../img/full.jpg';

import ModelResultBox from '../smallComp/predictComp/ModelResultBox'
import DeleteModelBtn from '../smallComp/predictComp/DeleteModelBtn'
import SaveModelBtn from '../smallComp/predictComp/SaveModelBtn'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { modelDataInterface } from "../interface/data/modelDataInterface";
import { RootState } from '../store';
const MySwal = withReactContent(Swal)

let modelIndex:number | string;

const dummyData:modelDataInterface = {

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

    const [preview, setPreview] = useState<any>(full); // img path
    const [myModel, setMyModel] = useState<any>(); // model container
    const [myModelInfo, setMyModelInfo] = useState<modelDataInterface>(dummyData); // model info

    const [loadingPredict, setloadingPredict] = useState<boolean>(false); // is model predicting
    const [message, setMessage] = useState<any>( {status:true} ); // message container

    const userInfo = useSelector( (state:RootState) => state.counter.userData); 
    const userSetting = useSelector( (state:RootState) => state.counter.userSetting); 
    const isGuest = useSelector( (state:RootState) => state.counter.isGuest); 

    const offModelData = useSelector( (state:RootState) => state.counter.offModelData);
    const [ isCurrentModelDownloaded, setIsCurrentModelDownloaded ] = useState<boolean>(false);

    const navigate = useNavigate();
    let { mdName } = useParams();

    useEffect( () => {
   
        let isOff = offModelData.filter( (v:modelDataInterface) => v.modeltitle === myModelInfo.modeltitle);
        setIsCurrentModelDownloaded( isOff.length >= 1 );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[offModelData])

    useEffect(() => {
        (async () => {

            document.title = "Leafers - Predict"

            const nameList = modelData.map( (v:modelDataInterface) => v.shortTitle);
            modelIndex = nameList.indexOf(mdName || "");

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
            setIsCurrentModelDownloaded(isExisting);

            initModel(url);
            async function initModel(url:string){
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

            let res = await predictResultTopFive(
                myModel,
                "img",
                myModelInfo.offlineInfo.size,
                myModelInfo.offlineInfo.subVal,
                myModelInfo.offlineInfo.divValue,
                myModelInfo.labels
            );

            const dbObject = {
                modelName: modelData[modelIndex as number].shortTitle,
                modelapiPath: modelData[modelIndex as number].modelapiPath,
                item: res.top1.label,
                confident: res.top1.confident * 100,
                createAt: new Date()
            };
            
            // user config allow to upload 
            if(userSetting.uploadHist && userInfo && !isGuest ){
                await addCollectionsTwoLayerNoSecDoc("users", userInfo.uid, "predictHistory", dbObject);
            }

            if(parseInt(res.top1.confident) < myModelInfo.defaultThreshold * 100){
                res['object'] = "Recognize unsuccess";
            }


            setloadingPredict(false);
            setMessage(res);

        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preview]);

    const handleInputImages = (file:any) => {
        if(!file){
            return
        }

        setPreview( URL.createObjectURL(file) );
    };

    return(
        <>
        <motion.div
            initial={{ x: 600, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -600, opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
        <div>
            <Container fluid>

            <UnstyledButton onClick={ () => navigate(-1) }>
                <FiArrowLeft size={35} />
            </UnstyledButton>

            <div style={{textAlign:"center"}}>

                <h1 style={{textAlign: "center"}}><b>Input your pictures ({myModelInfo.shortTitle})</b></h1>

                <Grid className="mt-4">

                    <Grid.Col md={12} lg={6} className="mb-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }} >
                            <img id="img" src={preview} style={{ width:"50%", height:"auto" }} alt="pics"/>
                        </motion.div>
                        <br></br>
                        <label><h3>Select image: </h3></label>{" "}
                        <div style={{ display:"flex", justifyContent:"center" }}>
                            <FileUploader handleChange={handleInputImages} name="file" types={["JPG", "PNG"]} />
                        </div>
                    </Grid.Col>

                    <Grid.Col md={12} lg={6}>           
                    <Card shadow="lg" className="mb-2" style={{ borderRadius:"20px", textAlign:"center"}}>     
                        {/* <Card.Body style={{marginTop:"10px"}}> */}
                        <h1>Informations</h1>

                        { isCurrentModelDownloaded ? 
                        <DeleteModelBtn modelName={myModelInfo.shortTitle}/> :
                        <SaveModelBtn myModel={myModel} shortTitle={myModelInfo.shortTitle}/> }
                        {"  "}
                        <Button color="gray" onClick={async() => labelSearchModel(myModelInfo.labels) }> Know more </Button> 

                        { loadingPredict && <div><Loader color="gray"/><h4>May take times for first time.</h4></div>}               
                        { message.status ? <div><ModelResultBox message={message} /></div> : <h1>Invalid input, please try again.</h1>}

                        <h3 style={{textAlign:"left"}}>Target object ({myModelInfo.labels.length}) </h3>
                        
                        <br/>

                        {/* </Card.Body> */}
                    </Card>    
                    </Grid.Col>

                </Grid>
            </div>

            {/* <BottomRightQuestion popFunc={qAndAModal}/> */}

            </Container>

        </div>
        

        </motion.div>
        </>
    );
}

export default PredictPage;