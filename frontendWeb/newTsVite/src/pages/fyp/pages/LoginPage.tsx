import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

import TopNavBar from '../smallComp/loginComp/TopNavBar';
import TopIntroComp from '../smallComp/loginComp/TopIntroComp';

import MiddleIntroComp from '../smallComp/loginComp/MiddleIntroComp';

import FooterComp from '../smallComp/loginComp/FooterComp';
import BottomNavComp from '../smallComp/loginComp/BottomNavComp';

function LoginPage() {

    let navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const redirectUrl = searchParams.get('redirectUrl'); 

    useEffect(() => {
        document.title = "Leafers - Home";
        redirectUrl && navigate('/' + redirectUrl);
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <motion.div
                initial={{ x: 600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -600, opacity: 0 }}
                transition={{ duration: 0.5 }}
            >
                <div>
                    <TopNavBar />

                    <TopIntroComp/>
                    <MiddleIntroComp/>

                    <FooterComp/>
                    <BottomNavComp/>
                </div>

            </motion.div>
        </>
    )
}

export default LoginPage;