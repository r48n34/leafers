import { signOutAcc } from '../services/firebaseUse';
import { Nav, Button } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { FiLogOut } from 'react-icons/fi';

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwalLogout = withReactContent(Swal)

function LogoutBtn(props) {
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

    function BtnFormat(){
        return(
            <Button className="button" variant="dark" onClick={ async () => logoutHelper() }> Sign Out </Button>
        );
    }

    function TextFromat(){
        return(
            <Nav.Link onClick={ async () => logoutHelper() }> {" "} Logout <FiLogOut/> </Nav.Link>
        );
    }

    return( props.format === "btn" ? <BtnFormat/> : <TextFromat/>);
}

export default LogoutBtn