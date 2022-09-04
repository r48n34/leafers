import { Container, Grid } from "@mantine/core";
import { Carousel } from '@mantine/carousel';

import modelData from '../../dataStorage/modelData.json'
import homeImg1 from "../../img/homeImg1.png"
import OtherIntroComp from "./OtherIntroComp";
import { useT } from "talkr";

import BigBox from "./support/BigBox";

function MiddleIntroComp() {
    const { T } = useT();

    return (
        <Container size={"xl"} style={{ marginTop: "80px" }}>
            <Grid>

                <Grid.Col xl={6} md={12} >
                    <div>
                        <h5> {T("descriptionsSection.shortTitle")} </h5>
                        <h1> <b>{T("descriptionsSection.mainTitle")}</b> </h1>
                        <div style={{ backgroundColor: "rgb(92,210,239)", width: "150px", height: "6px", marginBottom: "5px" }}></div>
                        <br />
                        <h5> {T("descriptionsSection.longDescriptions")} </h5>
                        <br /><br /><br />
                    </div>
                </Grid.Col>

                <Grid.Col xl={6} md={12} style={{ textAlign: "right" }}>
                    <img src={homeImg1} style={{ width: "70%", height: "auto" }} alt="pics" />
                </Grid.Col>

            </Grid>

            <OtherIntroComp/>

            <div style={{ marginTop: "100px" }}>
                <h1> {T("Currentmodel")}: </h1>
                <br />
                <Carousel
                    sx={{ maxWidth: 320 }}
                    mx="auto"
                    withIndicators
                    height={500}
                    styles={{
                        indicator: {
                            width: 12,
                            height: 4,
                            transition: 'width 250ms ease',
                            '&[data-active]': {
                                width: 40,
                            },
                        },
                    }}
                >
                    {modelData && modelData.map(v => (
                        <Carousel.Slide key={v.shortTitle}>
                            <BigBox data={v} />
                        </Carousel.Slide>
                    ))}

                </Carousel>

            </div>
            <br /><br /><br /><br />

        </Container>
    )
}

export default MiddleIntroComp
