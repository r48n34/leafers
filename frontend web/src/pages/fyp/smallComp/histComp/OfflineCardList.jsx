import { Card } from "react-bootstrap";
import { useSelector } from 'react-redux'
import { BiTimeFive } from "react-icons/bi";

import DeleteModelBtn from '../DeleteModelBtn'
import HistTableGen from '../HistTableGen'

function ModelTableGenHelper({ smallData }){

    if(!smallData){
        return(<></>);
    }

    return smallData.map( (v,i) =>   
        <tr key={"itemModel" + i}>
            <td>{i+1}</td>
            <td>{v.shortTitle}</td>
            <td><DeleteModelBtn modelName={v.shortTitle}/></td>
        </tr>  
    );

}

function OfflineCardList(){

    const modelData = useSelector(state => state.counter.offModelData);
    const topArr = ["No.", "Model Name","Delete"]
    
    return(
        <Card text={"dark"} className="mb-2" style={{ borderRadius:"15px" }}>
        <Card.Body>
          <h4> <BiTimeFive style={{float:"left", marginTop:"2.5px"}}/>{" "} <b>Offline Model List</b></h4>
          <hr/>
          <HistTableGen data={<ModelTableGenHelper smallData={modelData} />} col={topArr} />
        </Card.Body>
        </Card>
    )
}

export default OfflineCardList