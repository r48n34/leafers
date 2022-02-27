import { useNavigate } from "react-router-dom";
import { Card } from "react-bootstrap";

BigCard.defaultProps = {
    data :{
        title:" Default title" , 
        subTitle: "Default subtitle brbrbrbrbrbrrb",
        gotoPath: "/fyp/select"
    }
}

function BigCard({ data }){
    let navigate = useNavigate();

    return(
        <Card bg='info' style={{ height: '85vh' }} className="mb-3" onClick={() => navigate(data.gotoPath)} >
        <Card.Body className="d-flex align-items-end">
            <div>
            
            <Card.Title> { data.title } </Card.Title>
            <hr/>
            <Card.Text>
                {data.subTitle}
            </Card.Text>
            
            </div>
        </Card.Body>
        </Card>
    )
}

export default BigCard