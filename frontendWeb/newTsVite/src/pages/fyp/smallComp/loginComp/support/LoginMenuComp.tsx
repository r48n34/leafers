import { Menu, Button } from '@mantine/core';
import { signInWithGoogle, signInWithGithub, signInWithFacebook } from '../../../services/firebaseUse';

import { FcGoogle } from 'react-icons/fc';
import { FaGithub, FaFacebook } from "react-icons/fa";
import { Login } from 'tabler-icons-react';
import { useT } from "talkr";

function LoginMenuComp(){
    const { T } = useT();

    return (
        <>
        <Menu shadow="md">
            <Menu.Target>
                <Button rightIcon={<Login size={14} />} color="dark">
                    {T("LoginServices")}
                </Button>
            </Menu.Target>

            <Menu.Dropdown>
                <Menu.Label style={{ textAlign:"left" }}>{T("SocialPlatform")}</Menu.Label>
                <Menu.Item onClick={() => signInWithGoogle()} icon={<FcGoogle size={14} />}>{T("GoogleLogin")}</Menu.Item>
                <Menu.Item onClick={() => signInWithFacebook()} icon={<FaFacebook size={14} />}>{T("FacebookLogin")}</Menu.Item>

                <Menu.Label style={{ textAlign:"left" }}>{T("Developers")}</Menu.Label>
                <Menu.Item onClick={() => signInWithGithub()} icon={<FaGithub size={14} />}>{T("GithubLogin")}</Menu.Item>
            </Menu.Dropdown>
        </Menu>
        </>
    )
}
    
export default LoginMenuComp
