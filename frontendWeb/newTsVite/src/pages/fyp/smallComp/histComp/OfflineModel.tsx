import { Card } from '@mantine/core';
import { BsFillBarChartFill } from "react-icons/bs";
import { useT } from 'talkr';

function OfflineModel({ num }: { num: string | number }) {
    const { T } = useT();
    return (
        <Card shadow="lg" className="mb-2" style={{ borderRadius: "15px" }}>

            <h4> 
                <BsFillBarChartFill style={{ float: "left", marginTop: "2.5px" }} /> 
                {" "} 
                <b>{T("OfflineModel")}</b>
            </h4>
            <div> 
                <h2 style={{ display: "inline-block" }}>
                    <b>{num}</b>
                </h2>
                <h5 style={{ display: "inline-block" }}>
                    {T("Model")}
                </h5> 
            </div>

        </Card>
    )
}

export default OfflineModel