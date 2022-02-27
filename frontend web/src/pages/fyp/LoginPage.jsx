import React from 'react'
import firebase from 'firebase/compat/app';
import { signInWithGoogle } from './services/firebaseUse';
import { useState, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setGuest, setNotGuest } from './counterSlice';

import { useNavigate } from "react-router-dom";
import { Container, Button, Row, Col } from "react-bootstrap";

import { FcGoogle, FcReadingEbook } from 'react-icons/fc';
import { FaGithub, FaGooglePlay } from "react-icons/fa";
import { FaLeaf } from 'react-icons/fa';

import TypeIt from "typeit-react";
import { Zoom } from "react-awesome-reveal";

import ParticlesBg from 'particles-bg'

import Lottie from 'react-lottie-player'
import webIcon from './lottieItems/pageweb.json'
import plants from './lottieItems/plants.json'

import { motion } from 'framer-motion';

import './cssFile/loginPage.css'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwalLogin = withReactContent(Swal)

const LoginPage = () => {

  // eslint-disable-next-line no-unused-vars
  const [user, setUser] = useState(false);

  let navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Leafers - Home"

    try{

      firebase.auth().onAuthStateChanged( (userData) => {    

        if(userData != null){
          setUser(userData);
          dispatch( setNotGuest() ) 
          navigate('/fyp/select');

          MySwalLogin.fire({
            icon: 'success',
            title: `Welcome ${userData.displayName}`,
            showConfirmButton: true,
            timer: 4000,
          });

        }
        
      });
    }
    catch(e){
      console.log(e);
    }
     
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function LoginPageNav(){
    return(
      <Container fluid style={{ marginTop:"15px" }}>
        <Row>
          <Col lg={4} sm={4}>
            <h3><b> <FaLeaf color={"#019444"}/> Leafers</b></h3>
          </Col>
          <Col lg={8} sm={8} style={{ textAlign:"right" }}>
            <Button variant="outline-dark" className="button" onClick={() => guestLoginHandler()}> Guest Login <FcReadingEbook/> </Button>{"   "}
            <Button variant="dark" className="button" onClick={() => signInWithGoogle()}> Google Login <FcGoogle/> </Button> 
          </Col>
        </Row>
      </Container>
    )
  }

  function guestLoginHandler(){
    dispatch( setGuest() );
    navigate('/fyp/select');
  }

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>

        <LoginPageNav/>
        <Container fluid> 

          <Zoom duration={3500}>
          <Row>
            
            <Col xl={5} md={12} >
              <div style={{ marginTop:"200px" , textAlign:"center" }}>
                <h5 style={{ fontSize:"20px" }} ><b>Flowers predict with deep learning</b></h5>
                <h1 style={{ fontSize:"80px" }}><b> <FaLeaf color={"#019444"}/> Leafers</b></h1>
                <TypeIt
                    options={{
                      strings: ["Learn, predict, play!"],
                      speed: 90,
                      nextStringDelay: [2000, 4000],
                      waitUntilVisible: true,
                      loop: true
                    }}
                    element={"h2"}
                />
                <div style={{ display:"flex", justifyContent:'center' }}>
                <Lottie loop animationData={plants} play style={{ width: "60%", height: "60%" }}/>
                </div>
              </div>

            </Col>
            

            <Col xl={7} md={12} style={{ textAlign:"right" }}>
              <Lottie loop animationData={webIcon} play style={{ width: "100%", height: "100%" }}/>
            </Col>
          </Row>
          </Zoom>

        </Container>

        <div className='fixed-bottom' style={{ marginBottom:'10px'}}>
          <Container fluid style={{ display:"flex", justifyContent:"space-between"}}>

            <a href={"https://github.com/r48n34/leafers"} target="_blank" rel="noreferrer">
              <FaGithub size={40} color={"#121212"}/>
            </a>

            <a href={"https://play.google.com/store/apps/details?id=leafers.apk"} target="_blank" rel="noreferrer">
              <FaGooglePlay size={40} color={"#3BCCFF"}/>
            </a>

          </Container>

        </div>

      </div>

      <ParticlesBg type="polygon" num={4}  bg={true} />

    </motion.div>
    </>
  )
}

export default LoginPage;