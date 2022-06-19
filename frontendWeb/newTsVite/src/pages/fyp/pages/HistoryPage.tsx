import { useState, useEffect } from 'react';

import { Container, Button} from '@mantine/core';
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component';

import { getTwoLayerCollections, getTwoLayerCollectionsContinue } from '../services/firebaseUse'
import { motion } from 'framer-motion';
import { RootState } from '../store';
import { useT } from 'talkr';

const topConfidSort = (rowA:any, rowB:any) => {
    const a = typeof rowA.confident !== "number" ? parseInt(rowA.confident.replaceAll('%', '')) : rowA.confident;
    const b = typeof rowB.confident !== "number" ? parseInt(rowB.confident.replaceAll('%', '')) : rowB.confident;
    return a - b;
};

const dateSort = (rowA:any, rowB:any) => {
    return rowA.createAt.seconds - rowB.createAt.seconds;
};

const columns = [
    {
        name: "Model Name",
        selector: (row:any) => row.modelName,
        sortable: true,
    },
    {
        name: "Item",
        selector: (row:any) => row.item,
        sortable: true,
    },
    {
        name: "Top Confident",
        selector: (row:any) => typeof row.confident === "number" ? row.confident.toFixed(2) + "%" : row.confident,
        sortable: true,
        sortFunction: topConfidSort
    },
    {
        name: "Date",
        selector: (row:any) => new Date( row.createAt.seconds * 1000 ).toString().slice(0,24),
        sortable: true,
        sortFunction: dateSort
    },
];

function HistoryPage(){
    const { T } = useT();
    const [ tableData, setTableData ] = useState<any>([]);
    const [ maxHistoryFetched, setMaxHistoryFetched ] = useState<boolean>(false);
    const countModel = useSelector( (state:RootState) => state.counter.userData);

    useEffect( () => {

        (async () => {
            document.title = "Leafers - History"

            if(!countModel){
                return;
            }

            let result:any = await getTwoLayerCollections("users", countModel.uid, "predictHistory");

            setTableData(result.data);

        })();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[countModel])

    async function getRemainingData(){

        if(maxHistoryFetched){
            return;
        }

        const lastOne = tableData[tableData.length - 1];
        //console.log(lastOne);

        if(!lastOne){
            setMaxHistoryFetched(true);
            return;
        }


        let result:any = await getTwoLayerCollectionsContinue("users", countModel.uid, "predictHistory", lastOne.createAt);

        if(result.data.length === 0){
            setMaxHistoryFetched(true);
            return;
        }

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

            <br/>
            <DataTable columns={columns} data={tableData} pagination />

            <div style={{ textAlign:"right"}}>
                { !maxHistoryFetched ? 
                    <Button mt={6} onClick={ async() => { getRemainingData() }}>{T("Seemore")}</Button> :
                    <h5 style={{ textAlign:"center"}}> <b>{T("Nomorehistory")}</b> </h5>
                }
            </div>
        
        </Container>  
        </div>
        </motion.div>
    );
}

export default HistoryPage