let nodes = [
    {
        // Position of the node
        offsetX: 250,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as DataObject
        shape: {
            type: 'Bpmn',
            shape: 'DataObject',
            //Sets collection as true and type as Input
            dataObject: {
                collection: true,
                type: 'Input'
            }
        },
    },
    {
        // Position of the node
        offsetX: 450,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as DataObject
        shape: {
            type: 'Bpmn',
            shape: 'DataObject',
            //Sets collection as true and type as Input
            dataObject: {
                collection: false,
                type: 'Output'
            }
        }
    },
    {
        // Position of the node
        offsetX: 650,
        offsetY: 250,
        // Size of the node
        width: 100,
        height: 100,
        //Sets type as Bpmn and shape as DataObject
        shape: {
            type: 'Bpmn',
            shape: 'DataObject',
            //Sets collection as true and type as Input
            dataObject: {
                collection: false,
                type: 'None'
            }
        }
    },
];

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
    }, '#element');

