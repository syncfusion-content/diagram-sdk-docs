var connector = {
     id: 'connector', type: 'Orthogonal',
        sourcePoint: { x: 200, y: 200 },
        targetPoint: { x: 300, y: 300 },
        annotations: [
            {
                content: 'connector1', offset: 0.5,
                constraints: ej.diagrams.AnnotationConstraints.Interaction | ej.diagrams.AnnotationConstraints.Drag,
                dragLimit: { left: 20, right: 20, top: 20, bottom: 20 }
            }
        ]
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', connectors: [connector]
    }, '#element');

