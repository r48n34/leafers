import { Card } from "react-bootstrap";
import { BiTimeFive } from "react-icons/bi";

function OfflineModel({ num }){

    return(
        <Card text={"dark"} className="mb-2" style={{ borderRadius:"15px" }}>
        <Card.Body>
          <h4> <BiTimeFive style={{float:"left", marginTop:"2.5px"}}/> {" "} <b>Offline Model</b></h4>
          <div> <h2 style={{display:"inline-block"}}><b>{num}</b></h2> <h5 style={{display:"inline-block"}}> models</h5> </div> 
        </Card.Body>
        </Card>
    )
}

export default OfflineModel