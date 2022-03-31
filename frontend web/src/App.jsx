import { useEffect, lazy, Suspense  } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setInitOffModelData } from "./pages/fyp/counterSlice";
import { AnimatePresence } from 'framer-motion';

import LoadingPage from "./pages/fyp/smallComp/LoadingPage";

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

const LoginPage = lazy(() => import('./pages/fyp/LoginPage') );
const SelectModel = lazy(() => import('./pages/fyp/SelectModel') );
const PredictPage = lazy(() => import('./pages/fyp/PredictPage') );
const HistoryPage = lazy(() => import('./pages/fyp/HistoryPage') );
const SettingPage = lazy(() => import('./pages/fyp/SettingPage') );
const NavTop = lazy(() => import('./pages/fyp/smallComp/NavTop') );

function App() {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect( () => {
    dispatch( setInitOffModelData() )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <Suspense fallback={<LoadingPage/>}>
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes location={location} key={location.pathname}>

        <Route path="/" element={ <LoginPage /> }/>

        <Route path="/fyp" element={<NavTop/>}>
          <Route path="select" element={<SelectModel/>}/>
          <Route path="history" element={<HistoryPage/>}/>
          <Route path="setting" element={<SettingPage/>}/>
          <Route path="plays/:mdName" element={<PredictPage/>}/>
        </Route>

        <Route path="*" element={<Navigate to="/" />}/>
        
      </Routes>
    </AnimatePresence>  
    </Suspense> 
    </>
  );
}

export default App;
