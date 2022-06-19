import { signOutAcc } from '../services/firebaseUse';

import { Button } from '@mantine/core';

import { useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { useT } from 'talkr';
const MySwalLogout = withReactContent(Swal)

function LogoutBtn({ format }:{ format: "btn" | "text" }) {
    const { T } = useT();
    let navigate = useNavigate();

    async function logoutHelper(){
        await signOutAcc();
        navigate('/');

        MySwalLogout.fire({
            icon: 'success',
            title: 'Logout success',
            showConfirmButton: true,
            timer: 2000,
            backdrop: true
        });
    }

    if(format === "btn"){
        return(
            <Button size="xs" variant="light"  onClick={ async () => logoutHelper() }> 
                {T("SignOut")} 
            </Button>
        );
    }

    if(format === "text"){
        return(
            <h5 color="white" onClick={ async () => logoutHelper() }> 
                {" "} {T("SignOut")} <FiLogOut/> 
            </h5>
        );
    }

    return(<></>);
}

export default LogoutBtn