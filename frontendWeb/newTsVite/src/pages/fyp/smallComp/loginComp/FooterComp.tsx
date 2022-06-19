import { Container } from "@mantine/core";
import { useT } from "talkr";

function FooterComp(){
    const { T } = useT();

    return (
        <div style={{ width: "100%" }}>
        <Container>
            <br/>
            <h5 style={{ marginBottom: "0", fontSize: "5px", textAlign: "center" }}>
                {T("footer")}
            </h5>
            <br/>
        </Container>
    </div>
    )
}
    
export default FooterComp
