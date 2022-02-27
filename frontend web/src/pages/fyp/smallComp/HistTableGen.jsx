import { Table } from "react-bootstrap";

function ColDataGen({ colData }){
    return colData.map( (v,i) =>
        <th key={"colD" + i}>{v}</th>   
    );
}

function HistTableGen({ col, data }){
    return ( 
        <Table striped bordered hover variant="light" style={{ marginTop: "20px"}}>

        <thead>
            <tr>
                <ColDataGen colData={col} />
            </tr>
        </thead>

        <tbody key={"items"}>
            { data }
        </tbody>

        </Table>
    );
}

export default HistTableGen