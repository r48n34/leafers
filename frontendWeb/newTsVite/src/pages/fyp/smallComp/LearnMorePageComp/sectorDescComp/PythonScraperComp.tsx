import { Text, Space } from '@mantine/core';
import { Prism } from '@mantine/prism';

const demoCode = `
if __name__ == "__main__":
    arg = sys.argv
    aa = getSectorArr(9)
    t_list = [ threading.Thread(target=mainFunc, args=(i[0], i[1])) for i in aa ]
    for t in t_list:
        t.start()
    for t in t_list:
        t.join()
`;

function PythonScraperComp(){
    return (
        <>
        <Text>After targeted the classes, the python script will be used to scrape regarding images.</Text>
        <Space/>
        <Prism language="python">{demoCode}</Prism>
        <Text color="gray" size="xs">A sector of the python scrapper code.</Text>
        </>
    )
}
    
export default PythonScraperComp
