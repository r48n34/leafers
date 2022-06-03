// import { Row, Col, Card } from "react-bootstrap";
import { Card, Grid } from '@mantine/core';

import UploadHistorySw from './UploadHistorySw'

function ConfigBox(){

    return(
        <Card shadow="lg" className="mb-2" style={{ borderRadius:"15px" }}>
       
          <div> <h2 style={{display:"inline-block"}}><b>Settings</b></h2> </div>
          <hr/>

          <Grid>
            <Grid.Col xs={12}>
                <h5><b>Upload History</b></h5>
            </Grid.Col>

            <Grid.Col xs={6} sm={6}>
                <p>Record your prediction to DB</p>
            </Grid.Col>

            <Grid.Col xs={6} sm={6}>
                <div className="d-flex justify-content-end">
                    <UploadHistorySw/>
                </div>
            </Grid.Col>
          </Grid>
       
        
        </Card>
    );
}

export default ConfigBox