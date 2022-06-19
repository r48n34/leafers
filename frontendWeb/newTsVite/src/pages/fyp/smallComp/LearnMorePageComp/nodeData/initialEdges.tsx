import { v4 as uuidv4 } from 'uuid';

export const initialEdges = [
    { id: uuidv4(), source: '1', target: '2' },
    { id: uuidv4(), source: '2', target: '3' },
    { id: uuidv4(), source: '3', target: '4' },
    { id: uuidv4(), source: '5', target: '6' },

    { id: uuidv4(), source: '6', target: '13' },

    { id: uuidv4(), source: '7', target: '8' },

    { id: uuidv4(), source: '8', target: '9' },
    { id: uuidv4(), source: '8', target: '3' },

    { id: uuidv4(), source: '9', target: '10' },
    { id: uuidv4(), source: '9', target: '4' },

    { id: uuidv4(), source: '10', target: '11' },
    { id: uuidv4(), source: '11', target: '12' },
    { id: uuidv4(), source: '11', target: '5' },

    { id: uuidv4(), source: '12', target: '6' },
    { id: uuidv4(), source: '13', target: '14' },

    { id: uuidv4(), source: '14', target: '15' },
    { id: uuidv4(), source: '14', target: '16' },
    { id: uuidv4(), source: '14', target: '19' },
    
    { id: uuidv4(), source: '15', target: '21' },

    { id: uuidv4(), source: '16', target: '18' },
    { id: uuidv4(), source: '16', target: '17' },

    { id: uuidv4(), source: '19', target: '20' },
    { id: uuidv4(), source: '19', target: '21' },

    { id: uuidv4(), source: '21', target: '22' },
    { id: uuidv4(), source: '22', target: '23' },

];
