import { Card, Container, Grid, Loader, Group, Space } from '@mantine/core';

import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

import { FileUploader } from "react-drag-drop-files";
import SearchLabelDetails from "../smallComp/LabelSearchModel";

import { motion } from 'framer-motion';
import { FiArrowLeft } from "react-icons/fi";

import { fetchserver } from '../utility/predictUtili'
import { LabelSearchModelFetch } from "../services/apiUse";

import full from '../img/full.jpg';
import ModelResultBox from '../smallComp/predictComp/ModelResultBox'

type PredictedResult =
    | { status: false }
    | { 
        status: true
        top1: { label: string, confident: string | number },
        top2: { label: string, confident: string | number },
        top3: { label: string, confident: string | number },
        top4: { label: string, confident: string | number },
        top5: { label: string, confident: string | number },
        object : string,
        confident : string,
        timeTaken: string
        timeTakenOffset: string, 
}

function ApiUsePredictPage(){

    const navigate = useNavigate();

    const [ preview, setPreview ] = useState<string>(full); // img path
    const [ modelLables, setModelLables ] = useState<string[]>([]); // labels state
    const [ loadingPredict, setloadingPredict ] = useState<boolean>(false); // is model predicting
    const [ message, setMessage ] = useState<PredictedResult>({ status: false }); // message container

    useEffect(() => {
        
        ( async () => {
            document.title = "Leafers - Predict Api";  

            if(modelLables.length === 0){
                let result = await LabelSearchModelFetch();
                console.log(result)
                setModelLables(result.labels);
                // labelSearchModel(result.labels);
            }
            else{
                // labelSearchModel(modelLables);
            }
        })()
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

        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [preview]);

    const handleInputImages = async (file:any) => {
        
        if(!file){
            return
        }

        setloadingPredict(true);
        setPreview( URL.createObjectURL(file) );

        const result:any = await fetchserver(file);    

        setloadingPredict(false);
        setMessage(result);
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

            <FiArrowLeft size={35} onClick={ () => navigate(-1) }/>

            <div style={{textAlign:"center"}}>

                <h5 style={{textAlign: "center"}}>
                    <b>Beta version</b>
                </h5>

                <h1 style={{textAlign: "center"}}>
                    <b>Input your pictures (Flowers 400 online)</b>
                </h1>

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
                        
                        { loadingPredict && <div><Loader color="gray"/><h4>May take times for first time.</h4></div>}               
                        { message.status 
                            ? <div><ModelResultBox message={message} isLoading={loadingPredict} /></div> 
                            : <h1>Invalid input, please try again.</h1>
                        }
                        
                        <Space h="lg"/>
                        <Group position='right'>
                            <SearchLabelDetails labelsArr={modelLables}/>
                        </Group>

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


export default ApiUsePredictPage