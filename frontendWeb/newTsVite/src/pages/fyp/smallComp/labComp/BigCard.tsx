import { useNavigate } from "react-router-dom";
import { Card } from '@mantine/core';

interface BigCardDataInterface {
    title: string;
    subTitle: string;
    gotoPath: string;
}

BigCard.defaultProps = {
    data :{
        title:" Default title" , 
        subTitle: "Default subtitle brbrbrbrbrbrrb",
        gotoPath: "/fyp/select"
    }
}

function BigCard({ data }:{ data:BigCardDataInterface }){
    let navigate = useNavigate();

    return(
        <Card shadow="lg" style={{ height: '85vh' }} className="mb-3" onClick={() => navigate(data.gotoPath)} >
        <div>
        
            <Card.Section>
                { data.title }
            </Card.Section>
            
            <hr/>
            <Card.Section>
                {data.subTitle}
            </Card.Section>
            
        </div>
        </Card>
    )
}

export default BigCard