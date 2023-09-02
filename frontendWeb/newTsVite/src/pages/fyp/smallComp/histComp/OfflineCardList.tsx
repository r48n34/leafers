import { Card } from '@mantine/core';

import { useSelector } from 'react-redux'
import { BsFillCartFill } from "react-icons/bs";

import DeleteModelBtn from '../predictComp/DeleteModelBtn'
import HistTableGen from './HistTableGen'
import { ModelDataInterface } from "../../interface/data/modelDataInterface";
import { RootState } from '../../store';
import { useT } from 'talkr';

function ModelTableGenHelper({ smallData }: { smallData: ModelDataInterface[] }){

    if(!smallData){
        return(<></>);
    }

    return (
    <>
        {smallData.map( (v,i) =>   
            <tr key={"itemModel" + i}>
                <td>{i+1}</td>
                <td>{v.shortTitle}</td>
                <td><DeleteModelBtn modelName={v.shortTitle}/></td>
            </tr>  
        )}
    </>
    )

}

function OfflineCardList(){
    const { T } = useT();
    const modelData = useSelector( (state: RootState) => state.counter.offModelData );
    const topArr = ["No.", "Model Name", "Delete"]
    
    return(
        <Card shadow="lg" className="mb-2" style={{ borderRadius:"15px" }}>
        
            <h4> 
                <BsFillCartFill style={{float:"left", marginTop:"2.5px"}}/>
                {" "} 
                <b>{T("OfflineModelList")}</b>
            </h4>

            <hr/>
            <HistTableGen 
                data={<ModelTableGenHelper smallData={modelData} />}
                col={topArr}
            />
        
        </Card>
    )
}

export default OfflineCardList