

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { DiagramComponent, Inject, HierarchicalTree, LayoutAnimation } from '@syncfusion/ej2-react-diagrams';


//Initialize nodes 
let nodes = [
    {
        id: 'Node1',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 50,
        annotations: [{ content: 'Node1' }],
        style: { fill: '#6BA5D7', strokeColor: 'white' },
    },
    {
        id: 'Node2',
        width: 140,
        height: 50,
        offsetX: 200,
        offsetY: 140,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Node2' }],
    },
    {
        id: 'Node4',
        width: 140,
        height: 50,
        offsetX: 520,
        offsetY: 140,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Node4' }],
    },
    {
        id: 'Child1',
        width: 140,
        height: 50,
        offsetX: 150,
        offsetY: 230,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Child1' }],
    },
    {
        id: 'Child2',
        width: 140,
        height: 50,
        offsetX: 300,
        offsetY: 230,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Child2' }],
    },
    {
        id: 'Child3',
        width: 140,
        height: 50,
        offsetX: 450,
        offsetY: 230,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Child3' }],
    },
    {
        id: 'Child4',
        width: 140,
        height: 50,
        offsetX: 600,
        offsetY: 230,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Child4' }],
    }
];

let connectors = [
    {
        id: 'connector1',
        sourceID: 'Node1',
        targetID: 'Node2',
        type: 'Orthogonal',
    },
    {
        id: 'connector2',
        sourceID: 'Node1',
        targetID: 'Node4',
        type: 'Orthogonal',
    },
    {
        id: 'connector3',
        sourceID: 'Node2',
        targetID: 'Child1',
        type: 'Orthogonal',
    },
    {
        id: 'connector5',
        sourceID: 'Node2',
        targetID: 'Child2',
        type: 'Orthogonal',
    },
    {
        id: 'connector6',
        sourceID: 'Node4',
        targetID: 'Child3',
        type: 'Orthogonal',
    },
    {
        id: 'connector7',
        sourceID: 'Node4',
        targetID: 'Child4',
        type: 'Orthogonal',
    }
];

const layout = {
    type: 'HierarchicalTree',
};

export default function App() {
    let diagramInstance;

    // Function to handle animation state changes
    function animationComplete() {
        console.log('Animation complete');
        diagramInstance.nodes[0].style.fill =
            diagramInstance.nodes[0].style.fill === '#6BA5D7' ? 'red' : '#6BA5D7';
        diagramInstance.dataBind();

        //customize
    }
    return (
        <div>
            <DiagramComponent
                id="container"
                width={'80%'}
                height={'550px'}
                nodes={nodes}
                connectors={connectors}
                ref={(diagram) => (diagramInstance = diagram)}
                // Event Triggers when animation complete
                animationComplete={animationComplete}
                //Uses layout to auto-arrange nodes on the diagram page
                layout={layout}
                getNodeDefaults={(node) => {
                    node.expandIcon = { shape: 'ArrowDown', width: 20, height: 15, };
                    node.collapseIcon = { shape: 'ArrowUp', width: 20, height: 15, };
                }}
            >

                {/* Inject necessary services for the diagram */}
                <Inject services={[LayoutAnimation, HierarchicalTree]} />
            </DiagramComponent>

        </div>
    );
}

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);

