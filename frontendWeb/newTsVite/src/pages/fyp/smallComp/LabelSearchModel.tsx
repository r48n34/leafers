import { Button, Group, TextInput, Modal, Input } from '@mantine/core';
import { useEffect, useState } from 'react';
import { useT } from "talkr";

import { Search } from 'tabler-icons-react';
import DataTable from 'react-data-table-component';

const columns = [
    {
        name: 'labels',
        selector: (row:any) => row.labels,
    },
    {
        name: 'Search url',
        selector: (row:any) => (
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

function stringArrayToDisplayArr(arr:string[]){
    return arr.map( v => {
        return {
            labels: v
        }
    })
}

interface DisplayArr {
    labels: string
}

function SearchLabelDetails({ labelsArr }:{ labelsArr:string[] }){
    const { T } = useT();

    const [ opened, setOpened ] = useState(false);
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
                columns={columns}
                data={displayArr}
            />
        </Modal>

        <Group position="center">
            <Button leftIcon={<Search size={20}/>} color="gray" onClick={() => setOpened(true)}>{T("Knowmore")}</Button>
        </Group>
        </>
    )


}

// export { labelSearchModel }
export default SearchLabelDetails