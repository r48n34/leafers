//import * as mobilenet from '@tensorflow-models/mobilenet';
import React, { useState, useEffect } from 'react';
import { StyleSheet, ActivityIndicator, Share } from 'react-native';

import { gradientConfig } from './configFolder/gradientCon.js';

import { useSelector, useDispatch } from 'react-redux'
import { pushHistoryArr } from './redux/predictHistorySlice.jsx';

import * as tf from '@tensorflow/tfjs';
import { bundleResourceIO } from '@tensorflow/tfjs-react-native';

import { uriToTensor, getFuntionDataFromId, predictResultTopFive } from './utilityFunction/predictFunctions.js'

import { Ionicons } from '@expo/vector-icons';
import PredictResultDetails from './components/PredictResultDetails.jsx';
import QuestionBox from './components/QuestionBox.jsx';

import { NativeBaseProvider, Center, Button, Image, HStack, Flex, Text, ScrollView } from 'native-base';

const languageData = require("./datafile/language.json");

const styles = StyleSheet.create({
    tinyLogo: {
        width: 250,
        height: 250,
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textStyle: {
        fontSize: 30,
        fontWeight: "bold"
    },
    textStyleSub: {
        fontSize: 20,
        fontWeight: "bold"
    },
})

// History model for tensorflow and that name
let predictModel = null;
let currentModelName = "";

function Predictions({ route, navigation }) {
    //redux history model data
    const dispatch = useDispatch();
    const countModel = useSelector(state => state.counter.value);
    const currentLanguage = useSelector(state => state.languageSet.currentLanguage);

    //predict message
    //const [predictResult, setPredictResult] = useState({ confidents:null });
    const [predictResultDetails, setPredictResultDetails] = useState({ status: null });

    //Predicting process & status message
    const [isLoading, setIsLoading] = useState(false);
    const [loadingMessage, setLoadingMessage] = useState("");

    // url = images locations pass in
    const { url } = route.params;

    //Loadin and predictions
    useEffect(()=>{
        countModel.predictMode == "server" ? loadModelOutside(url, countModel) : modelGet(url, countModel); 
    },[])

    useEffect( () =>{
        console.log(predictResultDetails);
    },[predictResultDetails])

    // Predict through offline / online Model
    async function modelGet(url, countModel){
        
        try{

            setIsLoading(true);

            if(countModel.predictMode != "server"){
                setLoadingMessage( languageData["predictPageLoadingTensorflow"][currentLanguage] )
                await tf.ready();
    
                //console.log("Tensorflow loading success");         
    
                // Check if previous model load in
                if(currentModelName != countModel.modeltitle){

                    console.log("Model loading")
                    setLoadingMessage( languageData["predictPageLoadingModel"][currentLanguage] )
    
                    if(countModel.predictMode == "onlineModel"){
                        predictModel = await tf.loadGraphModel(countModel.modelapiPath);
                    }
                    else{ // offline mode
                        const modelData = await getFuntionDataFromId(countModel.offlineInfo.modelFunctionId);
                        predictModel = await tf.loadGraphModel(bundleResourceIO(modelData[0], modelData[1]));
                    }
    
                    currentModelName = countModel.modeltitle;
                }
          
                setLoadingMessage( languageData["predictPageLoadingImage"][currentLanguage] );
                let tens = await uriToTensor(url, countModel.offlineInfo.size); // Wait to fix the fixed 224 size

                setLoadingMessage( languageData["predictPageLoadingPredictMsg"][currentLanguage] );
                let imgPre = tens.resizeNearestNeighbor([countModel.offlineInfo.size, countModel.offlineInfo.size])
                    .toFloat()    
                    .div(tf.scalar(countModel.offlineInfo.divValue))
                    .sub(tf.scalar(countModel.offlineInfo.subVal)) 
                    .expandDims();
                
                // Result array
                const p = await predictModel.predict(imgPre).data();
        
                //Best prediction index
                let ind = p.indexOf(Math.max(...p));        
                console.log(p[ind]);
                
        
                //Best prediction confidents value
                //let pres = p[ind] >= countModel.defaultThreshold ? (p[ind] * 100).toFixed(1) : "";

                //Best prediction label result
                //let predictResult = pres == "" ? "Predict unsuccess" : countModel.labels[ind];
                //console.log("MyModel:", predictResult);

                let top5Arr = await predictResultTopFive(p, countModel.labels);


                const resultObjDetails = {
                    ...top5Arr,
                    "imageUri" : url,
                    "modelName": countModel.modeltitle,
                    "predictTime" : `${new Date().getYear() + 1900}/${ new Date().getMonth() + 1 }/${ new Date().getDate() } - ${ new Date().getHours() }:${ new Date().getMinutes()}:${ new Date().getSeconds()}`
                }

                //addToHistory(resultObj);

                dispatch( pushHistoryArr(resultObjDetails) )
                setPredictResultDetails(resultObjDetails)
        
                //setPredictResult({ "value": top5Arr.top1.label ,"confidents": (top5Arr.top1.confident * 100).toFixed(2) });
            }

        }
        catch(e){
            //setPredictResult({value:"Server error", confidents:""});
            console.log(e);
        }
        finally{
            setLoadingMessage("");
            setIsLoading(false); 
        }
        
    }

    // These three buttons in below
    function BtnSetBelow({ navigation }){
        return(
            <HStack justifyContent="space-between" pt={6}>
                <Button onPress={() => navigation.navigate('Home') }> { languageData["predictPageHomeBtn"][currentLanguage] } </Button>
                <Text>{" "}</Text>

                <Text>{" "}</Text>
                <Button onPress={() => navigation.navigate('cameras')}> { languageData["predictPageAgainBtn"][currentLanguage] } </Button>
            </HStack>
        )
    }

    // android share function
    async function shareHandler(){

        const result = await Share.share({
            message: "I just predicted" + predictResultDetails.top1.label,
        });
        
    }

    function TopNav({ navigation, backShow }){
        return(
          <Flex ml={3} mr={3} pt={10} direction="row" justify='space-between' mb="2" mt="1" _text={{
            color: "coolGray.800"
          }}>
      
            { backShow ? <Ionicons name="arrow-back" size={30} color="black" onPress={ () => {navigation.navigate('cameras');} }/> : <Text>{""}</Text>}
      
            <Flex direction="row">
                <QuestionBox data={[]}/>
                { backShow ? <Ionicons name="share-social" size={30} color="black" onPress={ () => { shareHandler() } }/> : <Text>{""}</Text>}
            </Flex>
      
          </Flex>
        )
    }

    return (
      <NativeBaseProvider config={gradientConfig}>

        <TopNav navigation={navigation} backShow={!isLoading}/>
          
        <ScrollView>

            <Center mt={2}>
                
                <Text style={{color:"black", fontSize: 30, fontWeight: "bold" }} > 
                    { languageData["predictInputLabel"][currentLanguage] } 
                </Text>
                
                <Image rounded="md" mt={4} mb={4} shadow={2} borderRadius={10} style={styles.tinyLogo} source={{ uri: url }} alt="images" />
                
                {isLoading && <ActivityIndicator size="large" color="#0000ff"/>}
                {loadingMessage != "" && <Text style={styles.textStyleSub} > {loadingMessage} </Text>}

            </Center>

            {predictResultDetails.status != null && <PredictResultDetails data={predictResultDetails} /> }

            <Center mb={8}>
                {!isLoading && <BtnSetBelow navigation={navigation} />}
            </Center>

        </ScrollView> 

      </NativeBaseProvider>

    );
}

export default Predictions