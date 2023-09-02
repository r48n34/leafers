import { Button, Group, TextInput, Modal } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useT } from "talkr";

import { Search } from 'tabler-icons-react';
import DataTable from 'react-data-table-component';

interface DisplayArr {
    labels: string
}

const columns = [
    {
        name: 'labels',
        selector: (row:DisplayArr) => row.labels,
    },
    {
        name: 'Search url',
        selector: (row:DisplayArr) => (
            <Button 
                onClick={ () => {
                    let scarchStr = row.labels.split(" ").join("+");
                    window.open("http://www.google.com/search?q=" + scarchStr, '_blank');
                }}
            >
                Know more
            </Button>
        ),
    }
]

function stringArrayToDisplayArr(arr: string[]){
    return arr.map( v => ({
        labels: v
    }))
}

function SearchLabelDetails({ labelsArr }:{ labelsArr:string[] }){
    const { T } = useT();

    const [ opened, setOpened ] = useState<boolean>(false);
    const [ searchString, setSearchString ] = useState<string>("");
    const [ displayArr, setDisplayArr ] = useState<DisplayArr[]>([]);

    useEffect(() => {
        setDisplayArr( stringArrayToDisplayArr(labelsArr) )
    }, [labelsArr]);

    useEffect(() => {

        if(searchString === ""){
            setDisplayArr( stringArrayToDisplayArr(labelsArr) )
            return
        }

        const finalArr = labelsArr.filter( v => v.toLowerCase().includes( searchString.toLowerCase() ));
        setDisplayArr( stringArrayToDisplayArr(finalArr) )

    }, [searchString]);

    return(
        <>
        <Modal
            opened={opened}
            onClose={() => setOpened(false)}
            title={T("Knowmore")}
            size="55%"
        >
            <TextInput
                icon={<Search size={20}/>}
                placeholder="Search"
                value={searchString}
                onChange={(event) => setSearchString(event.currentTarget.value)}
            />

            <DataTable
                pagination
                columns={columns as any}
                data={displayArr}
            />
        </Modal>

        <Group position="center">
            <Button leftIcon={<Search size={20}/>} color="gray" onClick={() => setOpened(true)}>{T("Knowmore")}</Button>
        </Group>
        </>
    )


}

export default SearchLabelDetails