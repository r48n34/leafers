import { Row, Col, Card } from "react-bootstrap";
import UploadHistorySw from './UploadHistorySw'

function ConfigBox(){

    return(
        <Card text={"dark"} className="mb-2" style={{ borderRadius:"15px" }}>
        <Card.Body>
          <div> <h2 style={{display:"inline-block"}}><b>Settings</b></h2> </div>
          <hr/>

          <Row>
            <Col xs={12}>
                <h5><b>Upload History</b></h5>
            </Col>

            <Col xs={6} sm={6}>
                <p>Record your prediction to DB</p>
            </Col>

            <Col xs={6} sm={6}>
                <div className="d-flex justify-content-end">
                    <UploadHistorySw/>
                </div>
            </Col>
          </Row>
       
        </Card.Body>
        </Card>
    );
}

export default ConfigBox