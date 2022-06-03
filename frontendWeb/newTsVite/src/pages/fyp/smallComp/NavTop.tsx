import firebase from 'firebase/compat/app';

import { Drawer, UnstyledButton, Text, Group, Burger, Avatar, Space } from '@mantine/core';
import { openSpotlight } from '@mantine/spotlight';

import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";

import { userdataCheck, addCollectionsTwoLayer } from '../services/firebaseUse'

import { useDispatch, useSelector } from 'react-redux'
import { setUserData, setUserSetting } from '../counterSlice'

import { Search } from 'tabler-icons-react';
import { FaCog, FaHistory, FaDatabase, FaBong } from 'react-icons/fa'; //FaGhost
import { FiLogOut } from 'react-icons/fi';

import LogoutBtn from "./LogoutBtn"
import ThemeToggleBtn from './grandComp/ThemeToggleBtn';
import SpotlightLayout from './grandComp/SpotlightLayout';

import '../cssFile/navTopcss.css';
import { RootState } from '../store';

const navArray = [
    { title: "Predict Model", routeSrc: "/fyp/select", icon: <FaBong/>, requireLoginShow: false, showsAfterLogin: true },
    { title: "Setting", routeSrc: "/fyp/setting", icon: <FaCog/>, requireLoginShow: true, showsAfterLogin: true },
    { title: "History", routeSrc: "/fyp/history", icon: <FaHistory/>, requireLoginShow: true, showsAfterLogin: true },
    { title: "Server predict", routeSrc: "playsApi/Flowers400", icon: <FaDatabase/>, requireLoginShow: false, showsAfterLogin: true },
    { title: "Back Home", routeSrc: "/", icon: <FiLogOut/>, requireLoginShow: false, showsAfterLogin: false },
]

function NavTop(){
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const userData = useSelector( (state:RootState) => state.counter.userData);
    const userSetting = useSelector( (state:RootState) => state.counter.userSetting);
    const isGuest = useSelector( (state:RootState) => state.counter.isGuest);

    const [ opened, setOpened ] = useState<boolean>(false);

    const finalArr = navArray
    .filter( v => !isGuest ? v.showsAfterLogin : true)
    .filter( v => !v.requireLoginShow || (v.requireLoginShow && !isGuest))

    useEffect(() => {

        try{
            firebase.auth().onAuthStateChanged(async (userData:any) => {

                if(userData !== null){

                    console.log(userData._delegate);
                    
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

                        let getUserData:any = await userdataCheck(userData._delegate.uid);
            
                        if(getUserData.data.length === 0){
                            const obj = { uploadHist: true }
                            await addCollectionsTwoLayer("users", userData._delegate.uid, "userSetting", "currentConfig", obj);
                            dispatch( setUserSetting(obj) );
                        }
                        else{
                            dispatch( setUserSetting(getUserData.data) );
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

    return (
    <>
        <Drawer
            opened={opened}
            onClose={() => setOpened(false)}
            title={
                <Group align={"center"}>
                    <Avatar radius="xl" src={userData.photoURL} style={{ width: "25px"}}/>

                    <h5 onClick={ () => !isGuest && navigate('/fyp/setting') } style={{ margin:0 }}> 
                        Hello {userData.displayName || "User"}!  
                    </h5>

                    {!isGuest && <LogoutBtn format="btn"/>}

                    <ThemeToggleBtn/>
                </Group>
            }
            padding="xl"
            size="xl"
        >
            <Space h="sm"/>
            {finalArr.map( v => (
                    <div key={v.title} style={{ marginTop:"1rem"}}>
                    <UnstyledButton onClick={() => navigate(v.routeSrc)}>
                        <Group>
                            <Avatar size={40} color="blue">{v.icon}</Avatar>
                            <div>
                            <Text>{v.title}</Text>
                            </div>
                        </Group>
                    </UnstyledButton>
                    </div>    
                )
            )}

        </Drawer>

        <Group position="right" mt={8}>
            <UnstyledButton onClick={openSpotlight}><Search size={26} /></UnstyledButton>
            <Burger
                opened={opened}
                onClick={() => setOpened(true)}
                title={"nav bar"}
            />
            <div style={{ width: '5px' }}></div>
        </Group>

        <SpotlightLayout data={finalArr}>
        <Outlet />
        </SpotlightLayout>
    </>
    )
}

export default NavTop