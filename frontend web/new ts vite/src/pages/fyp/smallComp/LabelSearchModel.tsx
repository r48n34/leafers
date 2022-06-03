import { Input } from '@mantine/core';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const SwalSearch = withReactContent(Swal)

function LabelListComp({ data }:{ data:string[] }):any{

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

function searchBarfiler(strVal:string, labelsArr:string[]){

    if(!strVal){
        return;
    }

    let a = labelsArr.filter( (v:string) => v.toLowerCase().includes( strVal.toLowerCase() ) );
    //console.log(a);
    
    SwalSearch.fire({
        title: 'Search result',
        allowEnterKey: false,
        allowEscapeKey: true,
        showCloseButton: true,
        confirmButtonText: 'back',
        html: <LabelListComp data={a}/>, 
    }).then(() => {
        labelSearchModel(labelsArr);
    });

}

function labelSearchModel( labelsArr:any[] ){
    SwalSearch.fire({
        showCloseButton: true,
        html:
        <div>
            <h3><b>Details</b></h3>
            
            <Input type="text" placeholder="Search" className="mb-2" 
                onKeyDown={(e:any) => { (e.keyCode === 13) && (searchBarfiler(e.target.value, labelsArr)) }}
            />
            
            <LabelListComp data={labelsArr}/>
            {/* <LabelListComp data={myModelInfo.labels}/> */}
        </div>
    })
         
}

export { labelSearchModel }