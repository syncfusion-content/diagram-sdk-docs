ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var connector1 = {
    id: 'connector1',
    type:'Orthogonal',
    sourcePoint:{x:250,y:250},
    targetPoint:{x:350,y:350},
    segments:[
        {   type:'Orthogonal',
            direction:"Right",
            length:70
        },
        {   
            type:'Orthogonal',
            direction: "Bottom",
            length: 20
        }
            ],
    constraints: ej.diagrams.ConnectorConstraints.Default | ej.diagrams.ConnectorConstraints.DragSegmentThumb
};
var diagram = new ej.diagrams.Diagram({
    width: 1500, height: 1000,
    connectors: [connector1],segmentThumbShape: 'Square',
}, '#element');


