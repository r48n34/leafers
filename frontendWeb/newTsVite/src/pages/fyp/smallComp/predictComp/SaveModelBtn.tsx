import { Button } from '@mantine/core';

import { useDispatch } from 'react-redux'
import { setoffModelData } from '../../counterSlice'

import { toindexedDb } from '../../utility/predictUtili'
import { getAllIndexedDbModelData } from '../../utility/indexdbUtili'

import { setInitOffModelData } from "../../counterSlice";

import Swal, { SweetAlertIcon } from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useT } from 'talkr';
const MySwalDel = withReactContent(Swal)

function SaveModelBtn({ myModel, shortTitle }:{ myModel:any, shortTitle:string }){
    const { T } = useT();
    const dispatch = useDispatch();

    async function saveLocalModel(model:any, title:string){

        let res = await toindexedDb(model, title);

        if(res){    
            let modelD = await getAllIndexedDbModelData();
            dispatch( setoffModelData(modelD) );
            dispatch( setInitOffModelData() as any ) 
        }

        const displayIcon = res ? "success" : "error";
        const displayMessage = res ? (T("Yourmodelhasbeensaved") as string) : (T("Occurerrorwhilesavingmodel") as string);
        
        MySwalDel.fire({
            position: 'top-end',
            icon: displayIcon,
            title: displayMessage,
            showConfirmButton: false,
            timer: 2000
        });

    }

    return(
        <Button color="gray" onClick={async() => saveLocalModel(myModel, shortTitle) }> {T("savemodel")} </Button>
    );

}

export default SaveModelBtn