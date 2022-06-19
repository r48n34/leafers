import { Card } from "@mantine/core"
import { iconCheckList } from "../../../dataStorage/iconNameRef"
import { modelDataInterface } from "../../../interface/data/modelDataInterface"

function BigBox({ data }: { data: modelDataInterface }) {

    if (!data) {
        return (<></>)
    }

    return (
        <Card>
            <div style={{ textAlign: "center" }}>
                <h2><b>{data.shortTitle}</b></h2>
                <h5><b>{data.modeltitle}</b></h5>
                <hr style={{ backgroundColor: "rgb(92,210,239)", height: "6px", marginBottom: "5px" }} />
                <h5><b>{(iconCheckList as any)[data.iconName]}</b></h5>
                <h5><b>{data.modelSubtitle}</b></h5>
                <h5><b>List:</b></h5>
                {[...Array(5)].map(x => Math.floor(Math.random() * data.labels.length)).map(v => (<h5 key={data.labels[v] + "@labels"} style={{ fontSize: "14px" }}> {data.labels[v]} </h5>))}
                <h5 style={{ fontSize: "14px" }}> and more... </h5>
            </div>
        </Card>
    )
}

export default BigBox