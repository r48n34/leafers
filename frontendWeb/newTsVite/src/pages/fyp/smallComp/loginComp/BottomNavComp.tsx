import { Container, UnstyledButton, useMantineColorScheme } from "@mantine/core"
import { FaGithub, FaGooglePlay, FaChevronUp } from "react-icons/fa";
    
function BottomNavComp(){
    const { colorScheme } = useMantineColorScheme();
    
    return (
        <div className='fixed-bottom' style={{ marginBottom: '10px' }}>
        <Container fluid style={{ display: "flex", justifyContent: "space-between" }}>

            <div>
                <a href={"https://github.com/r48n34/leafers"} target="_blank" rel="noreferrer">
                    <FaGithub size={40} color={colorScheme === 'dark' ? "#FFFFFF" : "#121212"} />
                </a>
                {"  "}
                <a href={"https://play.google.com/store/apps/details?id=leafers.apk"} target="_blank" rel="noreferrer">
                    <FaGooglePlay size={40} color={"#3BCCFF"} />
                </a>
            </div>

            <div>
                <UnstyledButton  onClick={() => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    })
                }}>
                    <FaChevronUp size={40} color={colorScheme === 'dark' ? "#FFFFFF" : "#121212"} />
                </UnstyledButton >
            </div>

        </Container>

    </div>
    )
}
    
export default BottomNavComp
