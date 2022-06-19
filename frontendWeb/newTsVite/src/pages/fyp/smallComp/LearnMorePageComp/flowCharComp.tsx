import { useState } from 'react';
import ReactFlow, { Background, Controls, BackgroundVariant } from 'react-flow-renderer';

// import { Button } from '@mantine/core';
// import { useModals } from '@mantine/modals';

import { initialNodes, NodesInterface } from './nodeData/initialNodes';
import { initialEdges } from './nodeData/initialEdges';

function FlowCharComp(){

    // const modals = useModals();
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);

    // const openConfirmModal = (node:NodesInterface) => modals.openModal({
    //     id:"dataModel",
    //     title: node.data?.label,
    //     children: (
    //         <>
    //             {!!node.displayComp ? node.displayComp : <></>}
    //             <Button fullWidth onClick={() => modals.closeModal("dataModel")} mt="md">
    //                 OK
    //             </Button>
    //         </>
    //     ),
    // });

    return (
        <>
        <div style={{ height:"80vh", backgroundColor:"white" }}>
            <ReactFlow 
                nodes={nodes}
                edges={edges}
                onNodeClick={ (event:any, node:any) => {
                    // if(node.type && node.type === "group"){
                    //     return;
                    // }
                    console.log(node);
                    // openConfirmModal(node);
                }}
            >
                <Background variant={"lines" as BackgroundVariant} gap={20} size={4} />
                <Controls />
            </ReactFlow>

        </div>
        </>
    )
}
    
export default FlowCharComp