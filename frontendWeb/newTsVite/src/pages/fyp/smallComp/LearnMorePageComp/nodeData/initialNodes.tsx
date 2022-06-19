import GoogleImagesComp from "../sectorDescComp/GoogleImagesComp";
import LocalPCScrappedComp from "../sectorDescComp/LocalPCScrappedComp";
import PythonScraperComp from "../sectorDescComp/PythonScraperComp";
import PythonDataProcessingComp from "../sectorDescComp/PythonDataProcessingComp";
import TsExpressNodeServerComp from "../sectorDescComp/TsExpressNodeServerComp";
import PostgresServerComp from "../sectorDescComp/PostgresServerComp";

export interface NodesInterface {
    id: string;
    type: string;
    data?: { 
        label?: any; 
    };
    position: {
        x: number;
        y: number;
    };
    style?: any;
    displayComp?: React.Component | string
}


export const initialNodes = [
    {
        id: 'gp_A',
        type: 'group',
        data: { label: null },
        position: { x: 235, y: -20 },
        style: {
          width: 180,
          height: 720,
        },
    },
    {
        id: 'gp_B',
        type: 'group',
        data: { label: null },
        position: { x: -15, y: -20 },
        style: {
          width: 180,
          height: 600,
        },
    },
    {
        id: 'gp_C',
        type: 'group',
        data: { label: null },
        position: { x: 480, y: 380 },
        style: {
          width: 380,
          height: 180,
        },
    },
    {
        id: 'gp_D',
        type: 'group',
        data: { label: null },
        position: { x: 880, y: 380 },
        style: {
          width: 190,
          height: 180,
        },
    },
    {
        id: 'gp_E',
        type: 'group',
        data: { label: null },
        position: { x: 480, y: 570 },
        style: {
          width: 380,
          height: 100,
        },
    },
    {
        id: 'gp_F',
        type: 'group',
        data: { label: null },
        position: { x: 480, y: 680 },
        style: {
          width: 380,
          height: 200,
        },
    },
    {
        id: '1',
        type: "input",
        data: { label: 'Google images' },
        subGroup: "CNN model training pipline",
        position: { x: 250, y: 0 },
        displayComp:(<GoogleImagesComp/>)
    },
    {
        id: '2',
        data: { label: 'Local PC scraped data' },
        subGroup: "CNN model training pipline",
        position: { x: 250, y: 100 },
        displayComp:(<LocalPCScrappedComp/>)
    },
    {
        id: '3',
        data: { label: 'Python Scraper' },
        subGroup: "CNN model training pipline",
        position: { x: 250, y: 200 },
        displayComp:(<PythonScraperComp/>)
    },
    {
        id: '4',
        type: "output",
        data: { label: 'Python Data process' },
        subGroup: "CNN model training pipline",
        position: { x: 250, y: 300 },
        displayComp:(<PythonDataProcessingComp/>)
    },
    {
        id: '5',
        data: { label: 'Google Drive Storage' },
        subGroup: "CNN model training pipline",
        position: { x: 250, y: 400 },
    },
    {
        id: '6',
        data: { label: 'Model Training' },
        subGroup: "CNN model training pipline",
        position: { x: 250, y: 500 },
    },
    {
        id: '7',
        type: "input",
        data: { label: 'Typescript express node.js' },
        subGroup: "Local support utilis",
        position: { x: 0, y: 0 },
        displayComp:(<TsExpressNodeServerComp/>)
    },
    {
        id: '8',
        data: { label: 'Postgres SQl server' },
        subGroup: "Local support utilis",
        position: { x: 0, y: 100 },
        displayComp:(<PostgresServerComp/>)
    },
    {
        id: '9',
        data: { label: 'Checking & filtering' },
        subGroup: "Local support utilis",
        position: { x: 0, y: 200 },
    },
    {
        id: '10',
        data: { label: 'Checking & filtering' },
        subGroup: "Local support utilis",
        position: { x: 0, y: 300 },
    },
    {
        id: '11',
        data: { label: 'Scaling & Report' },
        subGroup: "Local support utilis",
        position: { x: 0, y: 400 },
    },
    {
        id: '12',
        data: { label: 'Valid & tune' },
        subGroup: "Local support utilis",
        position: { x: 0, y: 500 },
    },
    {
        id: '13',
        data: { label: 'HDF5 to tfjs model' },
        subGroup: "Model serve",
        position: { x: 250, y: 600 },
    },
    {
        id: '14',
        data: { label: 'Online model (Github)' },
        subGroup: "Model serve",
        position: { x: 500, y: 600 },
    },
    {
        id: '15',
        data: { label: 'Online prediction (Azure function)' },
        subGroup: "Model serve",
        position: { x: 700, y: 600 },
    },
    {
        id: '16',
        data: { label: 'Android app' },
        subGroup: "Hosting services (Application)",
        position: { x: 500, y: 700 },
    },
    {
        id: '17',
        data: { label: 'Offline model (Download)' },
        subGroup: "Hosting services (Application)",
        type: "output",
        position: { x: 500, y: 800 },
    },
    {
        id: '18',
        data: { label: 'Google play' },
        type: "output",
        subGroup: "Hosting services (Application)",
        position: { x: 700, y: 700 },
    },
    {
        id: '19',
        data: { label: 'Website' },
        subGroup: "Hosting services (Web)",
        position: { x: 500, y: 500 },
    },
    {
        id: '20',
        type: "output",
        data: { label: 'Azure / Vercel Hosting' },
        subGroup: "Hosting services (Web)",
        position: { x: 500, y: 400 },
    },
    {
        id: '21',
        data: { label: 'API Call' },
        subGroup: "Hosting services (Web)",
        position: { x: 700, y: 500 },
    },
    {
        id: '22',
        data: { label: 'Firebase Auth' },
        subGroup: "Authentication & database (noSQLl)",
        position: { x: 900, y: 500 },
    },
    {
        id: '23',
        data: { label: 'Firebase Firestore' },
        subGroup: "Authentication & database (noSQLl)",
        type: "output",
        position: { x: 900, y: 400 },
    },
    // {
    //     id: 'ex1',
    //     type: "input",
    //     data: { label: 'Google images' },
    //     subGroup: "CNN model training pipline",
    //     position: { x: 250, y: 0 },
    // },

];