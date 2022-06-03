import { Table } from "react-bootstrap";

function ColDataGen({ colData }:{ colData: string[] }):any{
    return colData.map( (v,i) =>
        <th key={"colD" + i}>{v}</th>   
    );
}

function HistTableGen({ col, data }:{ col: string[], data:any }){
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