import { Group, Button, Modal, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { useState } from 'react';
import { QuestionMark } from 'tabler-icons-react';
import { useReward } from 'react-rewards';

function QuestionMarkBox() {
    const { colorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';

    const [opened, setOpened] = useState(false);
    const { reward, isAnimating } = useReward('rewardId', 'emoji',{
        lifetime: 250,
        elementSize: 35,
        emoji: ['🤓', '😊', '🥳','🎉']
    });

    return (
        <>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title="Hello there"
        >
            <Group position='center'>
                <Button
                    disabled={isAnimating}
                    onClick={reward}
                    id="rewardId"
                >
                    Try Click me
                </Button>
            </Group>
        </Modal>

        <ActionIcon
            variant="outline"
            color={dark ? 'yellow' : 'blue'}
            onClick={() => setOpened(true)}
            title="questionMarkBox"
        >
            <QuestionMark size={18} />
        </ActionIcon>
        </>
    );
}

export default QuestionMarkBox
