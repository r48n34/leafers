import { Paper, Grid, Group, RingProgress, Center, Text, Space, Button, UnstyledButton, Skeleton } from "@mantine/core";
import { ChartInfographic } from 'tabler-icons-react';
import { MessageObject } from "../../pages/PredictPage";

function ModelResultBox({ message, isLoading = false }: { message: MessageObject, isLoading: boolean }): any {

    const obj = [
        {
            title: "Top 1:",
            value: message.top1 && (message.top1.label),
            search: true,
            possValue: message.top1 ? +(+message.top1.confident * 100).toFixed(2) : 0,
            gridSize: 12
        },
        {
            title: "Top 2:",
            value: message.top2 && (message.top2.label),
            search: true,
            possValue: message.top2 ? +(+message.top2.confident * 100).toFixed(2) : 0,
            gridSize: 6
        },
        {
            title: "Top 3:",
            value: message.top3 && (message.top3.label),
            search: true,
            possValue: message.top3 ? +(+message.top3.confident * 100).toFixed(2) : 0,
            gridSize: 6
        },
        {
            title: "Top 4:",
            value: message.top4 && (message.top4.label),
            search: true,
            possValue: message.top4 ? +(+message.top4.confident * 100).toFixed(2) : 0,
            gridSize: 4
        },
        {
            title: "Top 5:",
            value: message.top5 && (message.top5.label),
            search: true,
            possValue: message.top5 ? +(+message.top5.confident * 100).toFixed(2) : 0,
            gridSize: 4
        },

    ]

    if (isLoading) {
        return (
            <>
                <Text weight={700} style={{ fontSize: "2rem" }} align="left">
                    Possibility
                </Text>
                <Space h="md" />
                <Grid grow>
                    {[12, 6, 6, 4, 4].map((v, i) => (
                        <Grid.Col md={v} key={v + "-" + i} >
                            <Paper withBorder p="md" radius="md">
                                <Group align={"center"}>
                                    <Skeleton height={80} circle mb="xl" mt={12}/>
                                    <Skeleton height={18} mt={6} width="50%" radius="xl" />
                                </Group>
                            </Paper>
                        </Grid.Col>
                    ))}
                </Grid>
            </>
        )
    }

    return (
        <>
            <Text weight={700} style={{ fontSize: "2rem" }} align="left">
                Possibility
            </Text>
            <Space h="md" />

            <Grid grow>
                {obj.map((v) => (
                    <Grid.Col md={v.gridSize} key={v.title} >
                        <Paper withBorder p="md" radius="md">
                            <Group>
                                <RingProgress
                                    size={100}
                                    roundCaps
                                    thickness={8}
                                    sections={[{ value: v.possValue, color: "#68b5e8" }]}
                                    label={
                                        <Center>
                                            <Text color="dimmed" size="sm" weight={700}>
                                                {v.possValue}%
                                            </Text>
                                        </Center>
                                    }
                                />

                                <div>
                                    <Text weight={700} size="xl" align="left">
                                        {v.title}
                                    </Text>

                                    <UnstyledButton
                                        onClick={() => {
                                            if (!v.value) {
                                                return
                                            }
                                            window.open("http://www.google.com/search?q=" + v.value, '_blank');
                                        }}
                                    >
                                        <Text style={{ fontSize: "1.5rem" }} weight={700}>
                                            {v.value}
                                        </Text>

                                    </UnstyledButton>

                                </div>
                            </Group>

                        </Paper>
                    </Grid.Col>
                ))}
            </Grid>
        </>
    )

}

export default ModelResultBox