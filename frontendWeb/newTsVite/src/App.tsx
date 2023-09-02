
import { useEffect, lazy, Suspense } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setInitOffModelData } from "./pages/fyp/counterSlice";
import { AnimatePresence } from 'framer-motion';

import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
import { useHotkeys, useLocalStorage } from '@mantine/hooks';

import { ModalsProvider } from '@mantine/modals';
import { NotificationsProvider } from '@mantine/notifications';
// import { ParallaxProvider } from 'react-scroll-parallax';

import LoadingPage from "./pages/fyp/smallComp/LoadingPage";

import 'sweetalert2/dist/sweetalert2.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { AppDispatch } from "./pages/fyp/store";

const LoginPage = lazy(() => import('./pages/fyp/pages/LoginPage') );
const SelectModel = lazy(() => import('./pages/fyp/pages/SelectModel') );
const PredictPage = lazy(() => import('./pages/fyp/pages/PredictPage') );
const HistoryPage = lazy(() => import('./pages/fyp/pages/HistoryPage') );
const SettingPage = lazy(() => import('./pages/fyp/pages/SettingPage') );
// const LearnMorePage = lazy(() => import('./pages/fyp/pages/LearnMorePage') );

const ApiUsePredictPage = lazy(() => import('./pages/fyp/pages/ApiUsePredictPage') );
const NavTop = lazy(() => import('./pages/fyp/smallComp/NavTop') );

function App() {

  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = (value?: ColorScheme) => setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  useHotkeys([
    ['mod+J', () => toggleColorScheme()]
  ]);

  const dispatch = useDispatch<AppDispatch>();
  const location = useLocation();

  useEffect( () => {
    dispatch( setInitOffModelData() )
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <ModalsProvider>
    <NotificationsProvider>
      {/* <ParallaxProvider> */}
      <Suspense fallback={<LoadingPage/>}>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes location={location} key={location.pathname}>

          <Route path="/" element={ <LoginPage /> }/>
          {/* <Route path="/LearnMore" element={ <LearnMorePage /> }/> */}

          <Route path="/fyp" element={<NavTop/>}>
            <Route path="select" element={<SelectModel/>}/>
            <Route path="history" element={<HistoryPage/>}/>
            <Route path="setting" element={<SettingPage/>}/>
            <Route path="plays/:mdName" element={<PredictPage/>}/>
            <Route path="playsApi/:mdName" element={<ApiUsePredictPage/>}/>
          </Route>

          <Route path="*" element={<Navigate to="/" />}/>
          
        </Routes>
      </AnimatePresence>  
      </Suspense>
      {/* </ParallaxProvider> */}
    </NotificationsProvider>
    </ModalsProvider>
    </MantineProvider>
    </ColorSchemeProvider>
    </>
  );
}

export default App;
