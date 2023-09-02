import { useEffect, useState } from "react";
import { Progress, Modal, Text, Space } from "@mantine/core";

// import { Wheel } from 'react-custom-roulette'
// import { useReward } from 'react-rewards';

type LoadingModalProps = {
    loadingProgress: number;
}

// const spinData = [1,2,3,4,5,6,7,8,9,10].map( v => {
//     return {
//         option: v
//     }
// }) as any
    
function LoadingModal({ loadingProgress }: LoadingModalProps){

    const [ opened, setOpened ] = useState<boolean>(true);
    // const [ spinning, setSpinning ] = useState<boolean>(false);

    // const { reward } = useReward('rewardIdBtn', 'emoji',{
    //     lifetime: 250,
    //     elementSize: 35,
    //     emoji: ['🤓', '😊', '🥳','🎉']
    // });

    useEffect(() => {
        if(loadingProgress === 1){
            setOpened(false)
        }
    }, [loadingProgress]);

    return (
        <>
        <Modal
            opened={opened}
            onClose={() => console.log("bye")}
            centered={true}
            size="60%"
            closeOnClickOutside={false}
            closeOnEscape={false}
            withCloseButton={false}
        >
            <>
            <Text style={{ fontSize:"1.5rem" }} align="center"> Modal loading</Text>
            <Space h="sm" />
            <Progress 
                color="lime" 
                animate 
                radius="xl" 
                size="xl" 
                value={loadingProgress * 100} 
                label={`${(loadingProgress * 100).toFixed(1)}%`}
            />
            <Space h="sm" />

            <Text style={{ fontSize:"1rem" }} align="center">
                If the loading stuck, please try to reload (F5) the pages.
            </Text>

            {/* <Group position="center">
                <Wheel
                    mustStartSpinning={spinning}
                    prizeNumber={Math.floor(Math.random() * spinData.length)}
                    data={spinData}
                    backgroundColors={['#3e3e3e', '#df3428']}
                    textColors={['#ffffff']}
                    onStopSpinning={ () => {
                        setSpinning(false);
                        // reward();
                    }}
                />
            </Group> */}
{/* 
            <Group position="center">
                <Button 
                    id="rewardIdBtn"
                    onClick={ () => setSpinning(true) } disabled={spinning} 
                > 
                    Spin 
                </Button>
            </Group>
      */}
            </>
        </Modal>
        </>
    )
}
    
export default LoadingModal
