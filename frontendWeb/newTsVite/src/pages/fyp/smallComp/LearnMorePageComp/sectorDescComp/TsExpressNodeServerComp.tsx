import { Text } from '@mantine/core';
import { Prism } from '@mantine/prism';

const demoCode = `
import express from 'express';
import expressSession from 'express-session';
import { Client } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

// skipped more for reading...

const PORT = 8080;
app.listen(PORT, () => {
    console.log(\`Listening at http://localhost:8080}/\`);
});
`;


function TsExpressNodeServerComp(){
    return (
        <>
        <Text>A simple web server is hosted for data checking and vaildations</Text>
        <Prism language="typescript">{demoCode}</Prism>
        <Text color="gray" size="xs">Samples of the server code.</Text>

        </>
    )
}
    
export default TsExpressNodeServerComp
