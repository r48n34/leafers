import {Spinner} from "react-bootstrap";

function LoadingPage(){
    return (
      <div className="d-flex justify-content-center" style={{marginTop:"50vh"}}>
        <Spinner animation="border" role="status" size="lg">
        </Spinner>
      </div>
    )
}

export default LoadingPage