import { Card } from '@mantine/core';
import { BsFillBarChartFill } from "react-icons/bs";

function OfflineModel({ num }:{ num:string | number }){

    return(
        <Card shadow="lg" className="mb-2" style={{ borderRadius:"15px" }}>
        
          <h4> <BsFillBarChartFill style={{float:"left", marginTop:"2.5px"}}/> {" "} <b>Offline Model</b></h4>
          <div> <h2 style={{display:"inline-block"}}><b>{num}</b></h2> <h5 style={{display:"inline-block"}}> models</h5> </div> 
        
        </Card>
    )
}

export default OfflineModel