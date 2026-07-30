var nodes = [
    {
        id: 'event1', style: { strokeWidth: 2 },
        height: 70, width: 70, offsetX: 400, offsetY: 200,
        shape: { type: 'Bpmn', shape: 'Event',
            event: { event: 'Start', trigger: 'None' },
        },
    },
    //node with target
    {
        id: 'textNode1', width: 70, height: 70,
        offsetX: 400, offsetY: 400,
        annotations: [{ content: 'textNode1' }],
        shape: {
            type: 'Bpmn', shape: 'TextAnnotation',
            textAnnotation: { textAnnotationDirection: 'Auto', textAnnotationTarget: 'event1' }
        }
    },
    //Node without target
    {
        id: 'textNode2', width: 70, height: 70,
        offsetX: 800, offsetY: 250,
        annotations: [{ content: 'textNode2' }],
        shape: {
            type: 'Bpmn', shape: 'TextAnnotation',
            textAnnotation: { textAnnotationDirection: 'Auto', textAnnotationTarget: '' }
        }
    },
]

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
    }, '#element');


