import { Button } from "react-bootstrap";
import { useDispatch } from 'react-redux'
import { setoffModelData } from '../counterSlice'

import { deleteIndexedDb, getAllIndexedDbModelData } from '../utility/indexdbUtili'

import { setInitOffModelData } from "../counterSlice";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwalDel = withReactContent(Swal)


function DeleteModelBtn({ modelName }){

    const dispatch = useDispatch();

    function alertPop(modelName){

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

    async function deleteLocalModel(modelName){
        
        let res = await deleteIndexedDb( modelName );

        if(res){    
            let modelD = await getAllIndexedDbModelData();
            dispatch( setoffModelData(modelD) );

            dispatch( setInitOffModelData() )
        }

        const displayIcon = res ? 'success' : 'error';
        const displayMessage = res ? 'Your model has been delete locally.' : 'Occur error while delete model.';
        
        MySwalDel.fire({
            position: 'top-end',
            icon: displayIcon,
            title: displayMessage,
            showConfirmButton: false,
            timer: 2000
        });
    }
    
    return(
        <Button variant="outline-dark" onClick={async() => alertPop(modelName) }> Delete model </Button>
    );
}

export default DeleteModelBtn