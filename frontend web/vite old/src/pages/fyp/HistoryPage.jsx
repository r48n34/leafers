import React, { useState, useEffect } from 'react';
import { Container, Button } from "react-bootstrap";
import { useSelector } from 'react-redux'

import { getTwoLayerCollections, getTwoLayerCollectionsContinue } from './services/firebaseUse'
import HistTableGen from './smallComp/HistTableGen'

import { motion } from 'framer-motion';

function TableInsideGenerate({ smallData }){

    //console.log(smallData);
    
    if(!smallData){
        return(<></>)
    }

    return smallData.map( (v,i) =>   
        <tr key={"item" + i}>
            <td>{i+1}</td>
            <td>{v.modelName}</td>
            <td>{v.item}</td>
            <td>{v.confident}</td>
            <td>{ new Date( v.createAt.seconds * 1000 ).toString().slice(0,24) }</td>
        </tr>  
    )
}

function HistoryPage(){
    const [tableData, setTableData] = useState([]);
    const countModel = useSelector(state => state.counter.userData);

    const topArr = ["#", "Model Name", "Item" , "Confident" , "Date"];

    useEffect( () => {

        (async () => {
            document.title = "Leafers - History"

            //console.log(countModel);
            let result = await getTwoLayerCollections("users", countModel.uid, "predictHistory");
            //console.log(result.data);
            setTableData(result.data);

        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[countModel])

    async function getRemainingData(){
        const lastOne = tableData[tableData.length - 1];
        let result = await getTwoLayerCollectionsContinue("users", countModel.uid, "predictHistory", lastOne.createAt);

        setTableData([...tableData, ...result.data]);
    }

    return(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
        <div>   
        <Container fluid >

            <br/><br/><br/>

            <HistTableGen data={<TableInsideGenerate smallData={tableData}/>} col={topArr} />

            <div style={{ textAlign:"right"}}>
                <Button variant="dark" onClick={ async() => { getRemainingData() }}>See more</Button>
            </div>
        
        </Container>  
        </div>
        </motion.div>
    );
}

export default HistoryPage