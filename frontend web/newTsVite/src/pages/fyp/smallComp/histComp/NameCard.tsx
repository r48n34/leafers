// import { Row, Col, Card } from "react-bootstrap";
import { Card, Grid } from '@mantine/core';

function NameCard({ userInfo }:{ userInfo:any }){
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
                <h5>Name: {userInfo.displayName || ""}</h5>
                <h5>Email: {userInfo.email || ""}</h5>
                <h5>Create at: {userInfo.creationTime || ""}</h5>
                <h5>Last Sign In: {userInfo.lastSignInTime || ""}</h5>
            </Grid.Col>
        </Grid>
        {/* </Card.Body> */}
    </Card>
    )
}

export default NameCard