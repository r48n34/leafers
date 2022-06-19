import { Card, Grid } from '@mantine/core';
import { useT } from 'talkr';

function NameCard({ userInfo }:{ userInfo:any }){
    const { T } = useT();
    
    return(
    <Card shadow="lg" className="mb-2" style={{ borderRadius:"15px" }}>
        {/* <Card.Body> */}
        <Grid>
            <Grid.Col md={3} sm={3} xl={3} className="d-flex align-items-center justify-content-center">
                <div >
                <img src={userInfo.photoURL} alt="Picc" style={{borderRadius: "50%"}} />   
                </div>
            </Grid.Col>

            <Grid.Col md={9} sm={9} xl={9}>
                <h5>{T("Name")}: {userInfo.displayName || ""}</h5>
                <h5>{T("Email")}: {userInfo.email || ""}</h5>
                <h5>{T("Createat")}: {userInfo.creationTime || ""}</h5>
                <h5>{T("LastSignIn")}: {userInfo.lastSignInTime || ""}</h5>
            </Grid.Col>
        </Grid>
        {/* </Card.Body> */}
    </Card>
    )
}

export default NameCard