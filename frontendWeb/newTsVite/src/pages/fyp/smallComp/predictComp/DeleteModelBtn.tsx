import { Button } from '@mantine/core';
import { useDispatch } from 'react-redux'
import { setoffModelData } from '../../counterSlice'

import { deleteIndexedDb, getAllIndexedDbModelData } from '../../utility/indexdbUtili'

import { setInitOffModelData } from "../../counterSlice";
import { DatabaseOff } from 'tabler-icons-react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useT } from 'talkr';
const MySwalDel = withReactContent(Swal)


function DeleteModelBtn({ modelName }:{ modelName:string }){
    const { T } = useT();
    const dispatch = useDispatch();

    function alertPop(modelName:string){

        MySwalDel.fire({
            title: 'Are you sure to delete the model? ',
            showCancelButton: true,
            confirmButtonText: 'Yes',
        })
        .then((result) => {
            if (result.isConfirmed) {
              deleteLocalModel(modelName);
            } 
        })
        
    }

    async function deleteLocalModel(modelName:string){
        
        let res = await deleteIndexedDb( modelName );

        if(res){    
            let modelD = await getAllIndexedDbModelData();
            dispatch( setoffModelData(modelD) );

            dispatch( setInitOffModelData() as any )
        }

        const displayIcon = res ? 'success' : 'error';
        const displayMessage = res ? T("Yourmodelhabeendeletelocally") as string : T("Occurerrorwhiledeletemodel") as string;
        
        MySwalDel.fire({
            position: 'top-end',
            icon: displayIcon,
            title: displayMessage,
            showConfirmButton: false,
            timer: 2000
        });
    }
    
    return(
        <Button 
            color="red"
            leftIcon={ <DatabaseOff size={20} />}
            onClick={() => alertPop(modelName) }
        > 
            {T("DeleteModel")} 
        </Button>
    );
}

export default DeleteModelBtn