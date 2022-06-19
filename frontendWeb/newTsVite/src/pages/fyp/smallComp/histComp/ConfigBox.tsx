// import { Row, Col, Card } from "react-bootstrap";
import { Card, Grid } from '@mantine/core';
import { useT } from 'talkr';

import UploadHistorySw from './UploadHistorySw'

function ConfigBox(){
    const { T } = useT();
    
    return(
        <Card shadow="lg" className="mb-2" style={{ borderRadius:"15px" }}>
       
          <div> <h2 style={{display:"inline-block"}}><b>{T("Setting")}</b></h2> </div>
          <hr/>

          <Grid>
            <Grid.Col xs={12}>
                <h5><b>{T("UploadHistory")}</b></h5>
            </Grid.Col>

            <Grid.Col xs={6} sm={6}>
                <p>{T("DbUpload")}</p>
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