import firebase from 'firebase/compat/app';
import { Nav, Navbar, Container, Image } from "react-bootstrap";
import React, { useEffect } from 'react';
import { useNavigate, Outlet } from "react-router-dom";

import { userdataCheck, addCollectionsTwoLayer } from '../services/firebaseUse'

import { useDispatch, useSelector } from 'react-redux'
import { setUserData, setUserSetting } from '../counterSlice'

import LogoutBtn from "./LogoutBtn"
import { FaLeaf, FaCog, FaHistory } from 'react-icons/fa'; //FaGhost
import '../cssFile/navTopcss.css';

import { FiLogOut } from 'react-icons/fi';

function NavTop(){
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const userData = useSelector( (state) => state.counter.userData);
    const userSetting = useSelector( (state) => state.counter.userSetting);
    const isGuest = useSelector( (state) => state.counter.isGuest);

    useEffect(() => {

        try{
            firebase.auth().onAuthStateChanged(async (userData) => {

                if(userData !== null){
                    
                    dispatch( setUserData({
                        uid: userData._delegate.uid,
                        displayName: userData._delegate.displayName,
                        email: userData._delegate.email,
                        photoURL: userData._delegate.photoURL,
                        creationTime: userData._delegate.metadata.creationTime,
                        lastSignInTime: userData._delegate.metadata.lastSignInTime
                    }));

                    // Check if redux exist data
                    if(Object.keys(userSetting).length === 0){

                        let a = await userdataCheck(userData._delegate.uid);
                        //console.log(a);
            
                        if(a.data.length === 0){
                            const obj = { uploadHist: true }
                            await addCollectionsTwoLayer("users", userData._delegate.uid, "userSetting", "currentConfig", obj);
                            dispatch( setUserSetting(obj) );
                        }
                        else{
                            dispatch( setUserSetting(a.data) );
                        }

                    }

                }
                else{

                    if(isGuest){
                        return
                    }

                    navigate('/');
                    dispatch( setUserData({}) );
                }

            })
        }
        catch(e){
          console.log(e);
        }
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div>
        <Navbar bg="dark" variant="dark" expand="lg" style={{ borderRadius:"0% 0% 18px 18px"}} fixed="top">
        <Container fluid={true}>

            <Navbar.Brand onClick={ () => { navigate('/fyp/select');} } className="brandLogo">
               <b> Leafers <FaLeaf/> </b> 
            </Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">

                {   !isGuest ?  
                (
                    <Nav>

                        <Nav.Link onClick={ () => navigate('/fyp/setting') }> 
                            <Image src={userData.photoURL} roundedCircle style={{ width: "25px"}}/> Hello {userData.displayName}  
                        </Nav.Link>

                        <Nav.Link onClick={ () => navigate('/fyp/setting') }> Setting <FaCog/> </Nav.Link>
                        <Nav.Link onClick={ () => navigate('/fyp/history') }> History <FaHistory/> </Nav.Link> 

                        <LogoutBtn format="text"/>
                     
                    </Nav>
                ):
                (   <Nav> <Nav.Link onClick={ async () => navigate('/') }> {" "} Back Home <FiLogOut/> </Nav.Link> </Nav> )
            }   


            </Navbar.Collapse>
        </Container>
        </Navbar>

        <Outlet />
        </div>
    )
}

export default NavTop