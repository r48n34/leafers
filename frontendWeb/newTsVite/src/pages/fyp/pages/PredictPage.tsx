import { Card, Container, Grid, UnstyledButton, Space, Group } from '@mantine/core';
import * as tf from '@tensorflow/tfjs';

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";

import { useSelector } from 'react-redux'
import { RootState } from '../store';
import { FileUploader } from "react-drag-drop-files";

// import { Search } from 'tabler-icons-react';

import { motion } from 'framer-motion';
import { FiArrowLeft } from "react-icons/fi";
import { ZoomQuestion } from 'tabler-icons-react';

import { createModel, predictResultTopFive } from '../utility/predictUtili'
import { checkModelExist } from '../utility/indexdbUtili'
import { addCollectionsTwoLayerNoSecDoc } from '../services/firebaseUse'

import SearchLabelDetails from "../smallComp/LabelSearchModel";

import modelData from '../dataStorage/modelData.json'
import full from '../img/full.jpg';

import ModelResultBox from '../smallComp/predictComp/ModelResultBox'
import DeleteModelBtn from '../smallComp/predictComp/DeleteModelBtn'
import SaveModelBtn from '../smallComp/predictComp/SaveModelBtn'

import { dummyData, ModelDataInterface } from "../interface/data/modelDataInterface";

import { showNotification, updateNotification } from '@mantine/notifications';

// import Swal from 'sweetalert2'
// import withReactContent from 'sweetalert2-react-content'
// const MySwal = withReactContent(Swal)

import { useT } from "talkr";
import LoadingModal from '../smallComp/predictComp/LoadingModal';

export interface TopItem {
    label: string;
    confident: string | number;
}

export interface MessageObject {
    status: boolean;
    top1?: TopItem;
    top2?: TopItem;
    top3?: TopItem;
    top4?: TopItem;
    top5?: TopItem;
    object?: string;
    confident?: string;
    timeTaken?: string;
    timeTakenOffset?: string;
}

let modelIndex:number | string;

function PredictPage(){
    
    const { T } = useT();

    const [preview, setPreview] = useState<string>(full); // img path
    const [myModel, setMyModel] = useState<tf.GraphModel<string | tf.io.IOHandler>>(); // model container
    const [myModelInfo, setMyModelInfo] = useState<ModelDataInterface>(dummyData); // model info

    const [loadingProgress, setLoadingProgress] = useState<number>(0); // model info

    const [loadingPredict, setloadingPredict] = useState<boolean>(false); // is model predicting
    const [message, setMessage] = useState<MessageObject>( {status:true} ); // message container

    const userInfo = useSelector( (state:RootState) => state.counter.userData); 
    const userSetting = useSelector( (state:RootState) => state.counter.userSetting); 
    const isGuest = useSelector( (state:RootState) => state.counter.isGuest); 

    const offModelData = useSelector( (state:RootState) => state.counter.offModelData);
    const [ isCurrentModelDownloaded, setIsCurrentModelDownloaded ] = useState<boolean>(false);

    const navigate = useNavigate();
    let { mdName } = useParams();

    useEffect( () => {
   
        let isOff = offModelData.filter( (v: ModelDataInterface) => v.modeltitle === myModelInfo.modeltitle);
        setIsCurrentModelDownloaded( isOff.length >= 1 );

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[offModelData])

    useEffect(() => {
        console.log(loadingProgress)
    }, [loadingProgress]);

    useEffect(() => {
        (async () => {

            document.title = "Leafers - Predict"

            const nameList = modelData.map( (v: ModelDataInterface) => v.shortTitle);
            modelIndex = nameList.indexOf(mdName || "");

            if(modelIndex < 0){
                return;
            }

            const modelName = modelData[modelIndex].shortTitle
            const isExisting = await checkModelExist(modelName);

            setMyModelInfo(modelData[modelIndex]);

            const url = isExisting ? ('indexeddb://' + modelName) : modelData[modelIndex].modelapiPath;

            setIsCurrentModelDownloaded(isExisting);
            initModel(url);

            async function initModel(url:string){
                let mod = await createModel(url, "GraphModel", setLoadingProgress);

                if(isExisting){
                    setLoadingProgress(1)
                }

                setMyModel(mod as tf.GraphModel<string | tf.io.IOHandler>); 
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
            
            showNotification({
                id: 'predicting-data',
                title: 'Predicting',
                loading: true,
                message: 'Waiting for the result... First Time may takes longer...',
                autoClose: false,
                disallowClose: true,
            })

            let res = await predictResultTopFive(
                myModel as tf.GraphModel<string | tf.io.IOHandler>,
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

            updateNotification({
                id: 'predicting-data',
                color: 'teal',
                title: 'Done',
                message: 'Predict success.',
                autoClose: 3000,
            });

            // console.log(+res.top1.confident * 100);
            // console.log(parseInt(res.top1.confident));

            if(+res.top1.confident * 100 < myModelInfo.defaultThreshold){
                showNotification({
                    title: 'Notices',
                    icon: <ZoomQuestion />,
                    message: 'Looks like the top 1 accuracy is low, the model may not recognize this images.',
                    color: 'green',
                    autoClose: 20000,
                })
            }

            setMessage(res);
            setloadingPredict(false);

        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preview]);

    const handleInputImages = (file:Blob | MediaSource) => {
        if(!file){
            return
        }

        setPreview( URL.createObjectURL(file) );
    };

    return(
        <>
        <LoadingModal loadingProgress={loadingProgress}/>
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

                <h1 style={{textAlign: "center"}}><b>{T("Inputyourpictures")} ({myModelInfo.shortTitle})</b></h1>

                <Grid className="mt-4">

                    <Grid.Col md={12} lg={6} mb={4}>

                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.8 }} >
                            <img id="img" src={preview as string} style={{ width:"50%", height:"auto" }} alt="pics"/>
                        </motion.div>
                        <br></br>

                        <label><h3>{T("Selectimage")}: </h3></label>{" "}
                        <div style={{ display:"flex", justifyContent:"center" }}>
                            <FileUploader handleChange={handleInputImages} name="file" types={["JPG", "PNG", "JPEG"]} />
                        </div>
                    </Grid.Col>

                    <Grid.Col md={12} lg={6}>           
                    <Card shadow="lg" className="mb-2" style={{ borderRadius:"20px", textAlign:"center"}}>     
                        {/* <h1>{T("Informations")}</h1> */}
                        
                        {"  "}

                        { message.status 
                            ? <div><ModelResultBox message={message} isLoading={loadingPredict} /></div> 
                            : <h1>{T("Invalidinput")}.</h1>
                        }

                        <Space h="lg"/>
                        <Group position='right'>
                            { isCurrentModelDownloaded ? 
                                <DeleteModelBtn modelName={myModelInfo.shortTitle}/> :
                                <SaveModelBtn myModel={myModel as tf.GraphModel<string | tf.io.IOHandler>} shortTitle={myModelInfo.shortTitle}/> 
                            }

                            <SearchLabelDetails labelsArr={myModelInfo.labels}/>
                        </Group>
                        
                        <br/>
         
                    </Card>    
                    </Grid.Col>

                </Grid>
            </div>


            </Container>

        </div>
        

        </motion.div>
        </>
    );
}

export default PredictPage;