import { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setInitOffModelData } from "./pages/fyp/counterSlice";
import { AnimatePresence } from 'framer-motion';

import MouseParticles from 'react-mouse-particles'

import LoginPage from './pages/fyp/LoginPage'
import SelectModel from './pages/fyp/SelectModel'
import PredictPage from './pages/fyp/PredictPage';
import HistoryPage from './pages/fyp/HistoryPage';
import SettingPage from './pages/fyp/SettingPage';
import NavTop from './pages/fyp/smallComp/NavTop'

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

function App() {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect( () => {
    dispatch( setInitOffModelData() )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <AnimatePresence exitBeforeEnter initial={false}>

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LoginPage/>}/>

        <Route path="/fyp" element={<NavTop/>}>
          <Route path="select" element={<SelectModel/>}/>
          <Route path="history" element={<HistoryPage/>}/>
          <Route path="setting" element={<SettingPage/>}/>
          <Route path="plays/:mdName" element={<PredictPage/>}/>
        </Route>

        <Route path="*" element={<Navigate to="/" />}/>
        
      </Routes>
    </AnimatePresence>   

    <MouseParticles g={1} color="random" cull="col,image-wrapper"/>
    </div>
  );
}

export default App;
