var node = {
    // Position of the node
    offsetX: 100,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    shape: {
        type: 'Bpmn', shape: 'Activity', activity: {
            activity: 'Task', task: {
                compensation : true
            }
        },
    },
        };

var node2 = {
    // Position of the node
    offsetX: 300,
    offsetY: 100,
    // Size of the node
    width: 100,
    height: 100,
    shape: {
        type: 'Bpmn', shape: 'Activity', activity: {
            activity: 'SubProcess', subProcess: { collapsed: true, compensation : true }
        },
    },
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node, node2]
    }, '#element');


