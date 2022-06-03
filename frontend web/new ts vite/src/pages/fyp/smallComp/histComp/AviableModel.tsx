// import { Card } from "react-bootstrap";
import { Card } from '@mantine/core';

import { BiTimeFive } from "react-icons/bi";

function AviableModel({ num }:{ num:string | number }){
    return(
        <Card shadow="lg" className="mb-2" style={{ borderRadius:"15px" }}>
        
          <h4> <BiTimeFive style={{float:"left", marginTop:"2.5px"}}/> {"  "} <b>Avaiable Model</b> </h4>
          <div> <h2 style={{display:"inline-block"}}><b>{num}</b></h2> <h5 style={{display:"inline-block"}}> models</h5> </div> 
        
        </Card>
    )
}

export default AviableModel