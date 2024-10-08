import { useEffect, useState } from 'react';
import { useNavigate, Outlet } from "react-router-dom";
import firebase from 'firebase/compat/app';

import { openSpotlight } from '@mantine/spotlight';
import { Drawer, UnstyledButton, Text, Group, Burger, Avatar, Space } from '@mantine/core';

import { userdataCheck, addCollectionsTwoLayer } from '../services/firebaseUse'

import { useDispatch, useSelector } from 'react-redux'
import { setUserData, setUserSetting } from '../counterSlice'

import { Search } from 'tabler-icons-react';
import { FiLogOut } from 'react-icons/fi';
import { FaCog, FaHistory, FaDatabase, FaBong } from 'react-icons/fa'; //FaGhost

import LogoutBtn from "./LogoutBtn"
import ThemeToggleBtn from './grandComp/ThemeToggleBtn';
import SpotlightLayout from './grandComp/SpotlightLayout';
import ToggleLanguageBtn from './loginComp/support/ToggleLanguageBtn';

import { RootState } from '../store';
import { useT } from 'talkr';

import '../cssFile/navTopcss.css';

function NavTop(){
    const { T } = useT();
    let navigate = useNavigate();

    const dispatch = useDispatch();
    const userData = useSelector( (state:RootState) => state.counter.userData);
    const userSetting = useSelector( (state:RootState) => state.counter.userSetting);
    const isGuest = useSelector( (state:RootState) => state.counter.isGuest);

    const [ opened, setOpened ] = useState<boolean>(false);

    const navArray = [
        { title: T("PredictModel") as string, routeSrc: "/fyp/select", icon: <FaBong/>, requireLoginShow: false, showsAfterLogin: true },
        { title: T("Setting") as string, routeSrc: "/fyp/setting", icon: <FaCog/>, requireLoginShow: true, showsAfterLogin: true },
        { title: T("History") as string, routeSrc: "/fyp/history", icon: <FaHistory/>, requireLoginShow: true, showsAfterLogin: true },
        { title: T("Serverpredict") as string, routeSrc: "playsApi/Flowers400", icon: <FaDatabase/>, requireLoginShow: false, showsAfterLogin: true },
        { title: T("BackHome") as string, routeSrc: "/", icon: <FiLogOut/>, requireLoginShow: false, showsAfterLogin: false },
    ]

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
                else {

                    if(isGuest){
                        return
                    }

                    navigate('/');
                    dispatch( setUserData({} as any) );
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
                        {T("Hello")} {userData.displayName || "User"}!  
                    </h5>

                    {!isGuest && <LogoutBtn format="btn"/>}

                    <ThemeToggleBtn/>
                    <ToggleLanguageBtn/>

                </Group>
            }
            padding="xl"
            size="xl"
        >
            <Space h="sm"/>
            {finalArr.map( v => (
                    <div key={v.title as string} style={{ marginTop:"1rem"}}>
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
            <UnstyledButton onClick={() => openSpotlight()}><Search size={26} /></UnstyledButton>
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