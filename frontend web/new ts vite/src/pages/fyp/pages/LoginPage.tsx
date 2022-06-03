import firebase from 'firebase/compat/app';
import modelData from '../dataStorage/modelData.json'

import { signInWithGoogle } from '../services/firebaseUse';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setGuestBool } from '../counterSlice';

import { useNavigate } from "react-router-dom";
import { FcGoogle, FcReadingEbook } from 'react-icons/fc';
import { FaGithub, FaGooglePlay, FaLeaf, FaChevronUp } from "react-icons/fa";

import TypeIt from "typeit-react";
// import { Zoom } from "react-awesome-reveal";

import { iconCheckList } from '../dataStorage/iconNameRef'
import { Card, Container, Button, Grid, Group } from '@mantine/core';

import Lottie from 'react-lottie-player'
import webIcon from '../lottieItems/pageweb.json'
import plants from '../lottieItems/plants.json'

import homeImg1 from "../img/homeImg1.png"

import { motion } from 'framer-motion';

import { Navigation, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { modelDataInterface } from '../interface/data/modelDataInterface';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import ThemeToggleBtn from '../smallComp/grandComp/ThemeToggleBtn';
const MySwalLogin = withReactContent(Swal)

function BigBox({ data }:{ data:modelDataInterface }){

  if(!data){
    return (<></>)
  }

  return(
    <Card>
        <div style={{ textAlign:"center"}}>
          <h2><b>{ data.shortTitle }</b></h2>
          <h5><b>{ data.modeltitle }</b></h5>
          <hr style={{ backgroundColor:"rgb(92,210,239)", height:"6px", marginBottom:"5px"}} />
          <h5><b>{ (iconCheckList as any)[data.iconName] }</b></h5>
          <h5><b>{ data.modelSubtitle }</b></h5>
          <h5><b>List:</b></h5>
          { [...Array(5)].map(x => Math.floor( Math.random() * data.labels.length) ).map( v => ( <h5 key={data.labels[v] + "@labels"} style={{ fontSize:"14px"}}> {data.labels[v]} </h5>) ) }
          <h5 style={{ fontSize:"14px"}}> and more... </h5>
        </div>   
    </Card>
  )
}

function LoginPage():any {

  let navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Leafers - Home"

    try{

      firebase.auth().onAuthStateChanged( (userData) => {    

        if(userData != null){
         
          dispatch( setGuestBool(false) ) 
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
        <Grid>

          <Grid.Col lg={4} sm={4}>
            <h3><b> <FaLeaf color={"#019444"}/> Leafers</b></h3>
          </Grid.Col>

          <Grid.Col lg={8} sm={8} style={{ textAlign:"right" }}>
                <Group position="right">
                <Button rightIcon={<FcReadingEbook/>} variant="light" onClick={() => guestLoginHandler()}> Guest Login </Button>
                <Button rightIcon={<FcGoogle/>} ml={6} color="dark" onClick={() => signInWithGoogle()}> Google Login </Button> 
                <ThemeToggleBtn/>
                </Group>
          </Grid.Col>

        </Grid>
      </Container>
    )
  }

  function guestLoginHandler(){
    dispatch( setGuestBool(true) );
    navigate('/fyp/select');
  }

  return (
    <>
    <motion.div
      initial={{ x: 600, opacity: 0 }}
      animate={{ x: 0, opacity: 1  }}
      exit={{ x: -600, opacity: 0  }}
      transition={{ duration: 0.5 }}
    >
      <div>

        <LoginPageNav/>

        <Container fluid> 

          {/* <Zoom as any duration={1500}> */}
          <Grid>
            
            <Grid.Col xl={5} md={12} >

              <motion.div whileHover={{ scale: 1.01 }}>
              <div style={{ marginTop:"150px" , textAlign:"center" }}>
                <h5 style={{ fontSize:"20px" }}> <b>Flowers predict with deep learning</b> </h5>
                <h1 style={{ fontSize:"80px" }}> <b><FaLeaf color={"#019444"}/> Leafers</b> </h1>
                <TypeIt
                    options={{
                      strings: ["Learn, predict, play!"],
                      speed: 90,
                      nextStringDelay: 4000,
                      waitUntilVisible: true,
                      loop: true
                    }}
                    
                />
                <div style={{ display:"flex", justifyContent:'center' }}>
                <Lottie loop animationData={plants} play style={{ width: "60%", height: "60%" }}/>
                </div>
              </div>
              </motion.div>

            </Grid.Col>
            

            <Grid.Col xl={7} md={12} style={{ textAlign:"right" }}>
              <motion.div whileHover={{ scale: 1.02 }}>
                <Lottie loop animationData={webIcon} play style={{ width: "100%", height: "100%" }}/>
              </motion.div>
            </Grid.Col>
          </Grid>
          {/* </Zoom> */}

        </Container>

        <Container size={"xl"} style={{ marginTop: "80px" }}>
          <Grid>

            <Grid.Col xl={6} md={12} >
              <div>
                  <h5> <b>Offline CNN models</b> </h5> 
                  <h1> <b>Predict with Deep Learning</b> </h1> 
                  <div style={{ backgroundColor:"rgb(92,210,239)", width:"150px", height:"6px", marginBottom:"5px"}}></div>
                  <br/>
                  <h4> By using deep learning technology, images can be predict through your devices without server. </h4>
                  <br/><br/><br/>
              </div>
            </Grid.Col>

            <Grid.Col xl={6} md={12} style={{ textAlign: "right" }}>
              <img src={homeImg1} style={{ width:"70%", height:"auto" }} alt="pics"/>
            </Grid.Col>

          </Grid>

          <div style={{ marginTop : "100px"}}>
          <h1> <b>Current model:</b> </h1> 
          <br/>         
          <Swiper
            // install Swiper modules
            modules={[Navigation, A11y]}
            spaceBetween={30}
            slidesPerView={1}
            navigation  
          >
                
            { modelData && modelData.map ( v => (
              <SwiperSlide style={{ display:"flex", justifyContent: "center" }} key={v.shortTitle}>
                <BigBox data={v}/>
              </SwiperSlide>
            ))}

          </Swiper>
          </div>
          <br/>
          <br/>
          <br/>
          <br/>

        </Container>

        <div style={{ width: "100%" }}>
          <Container>
            <br/>

              <h5 style={{marginBottom: "0", fontSize:"5px", textAlign:"center"}}>
                Reemo 2022 Cityu EE Final Year Project.
              </h5>
              
            <br/>
          </Container>
        </div>


        <div className='fixed-bottom' style={{ marginBottom:'10px'}}>
          <Container fluid style={{ display:"flex", justifyContent:"space-between"}}>

            <div>
            <a href={"https://github.com/r48n34/leafers"} target="_blank" rel="noreferrer">
              <FaGithub size={40} color={"#121212"}/>
            </a>
            {"  "}
            <a href={"https://play.google.com/store/apps/details?id=leafers.apk"} target="_blank" rel="noreferrer">
              <FaGooglePlay size={40} color={"#3BCCFF"}/>
            </a>
            </div>

            <div>
            <div onClick={ () => {
                    console.log("Hello")
                    window.scrollTo({
                      top: 0, 
                      behavior: 'smooth'
                    }) 
            }}>
              <FaChevronUp size={40} color={"#161616"}/>
            </div>
            </div>

          </Container>

        </div>

      </div>

    </motion.div>
    </>
  )
}

export default LoginPage;