import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { Container, Grid, Button, Group, UnstyledButton } from "@mantine/core";

import Headroom from "react-headroom"

import { FaLeaf } from "react-icons/fa";
import { FcReadingEbook } from "react-icons/fc";

import { setGuestBool } from "../../counterSlice";

import ThemeToggleBtn from "../grandComp/ThemeToggleBtn";
import LoginMenuComp from "./support/LoginMenuComp";
import QuestionMarkBox from "./support/QuestionMarkBox";
import { useEffect } from "react";

import firebase from "firebase/compat/app";

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ToggleLanguageBtn from "./support/ToggleLanguageBtn";
import { useT } from "talkr";
const MySwalLogin = withReactContent(Swal)

function TopNavBar(){
    const { T } = useT();
    let navigate = useNavigate();
    const dispatch = useDispatch();

    function guestLoginHandler() {
        dispatch(setGuestBool(true));
        navigate('/fyp/select');
    }

    useEffect(() => {

        try {

            firebase.auth().onAuthStateChanged((userData: any) => {

                if (userData != null) {

                    dispatch(setGuestBool(false))
                    navigate('/fyp/select');

                    const welcomeMsg = T("Welcome") + userData.displayName;

                    MySwalLogin.fire({
                        icon: 'success',
                        title: welcomeMsg,
                        showConfirmButton: true,
                        timer: 4000,
                    });

                }

            });
        }
        catch (e) {
            console.log(e);
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <>
        <Headroom>
        <Container fluid style={{ marginTop: "15px", marginBottom: "15px"  }}>
                <Grid>

                    <Grid.Col lg={4} sm={4}>
                        <UnstyledButton onClick={() => navigate('/')}>
                        <h3><b> <FaLeaf color={"#019444"} /> Leafers</b></h3>
                        </UnstyledButton>
                    </Grid.Col>

                    <Grid.Col lg={8} sm={8} style={{ textAlign: "right" }}>
                        <Group position="right">
                            <Button rightIcon={<FcReadingEbook />} ml={6} variant="light" onClick={() => guestLoginHandler()}>
                                {T("loginGuest")} 
                            </Button>
                            <LoginMenuComp />
                            <ThemeToggleBtn />
                            <QuestionMarkBox />
                            <ToggleLanguageBtn />
                        </Group>
                    </Grid.Col>

                </Grid>
        </Container>
        </Headroom>
        </>
    )
}

export default TopNavBar