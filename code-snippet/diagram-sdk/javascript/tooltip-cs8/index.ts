import {
    ConnectorConstraints,
    Diagram,
    NodeModel,
    SnapConstraints,
    AnnotationConstraints,
    DiagramConstraints,
    NodeConstraints,
  } from '@syncfusion/ej2-diagrams';
  
  let nodes: NodeModel[] = [
    {
        id: 'node1',
        offsetX: 250,
        offsetY: 150,
        width: 100,
        height: 100,
        style: {
            fill: '#6BA5D7',
            strokeColor: 'white'
        },
        annotations: [{
                id: 'label1',
                content: 'Rectangle',
                tooltip: {
                    content: 'Rectangle',
                    position: 'TopRight',
                    relativeMode: 'Object',
                },
                constraints: AnnotationConstraints.Tooltip,
            }],
    }
];


let diagram: Diagram = new Diagram({
  width: '100%',
  height: '350px',
  nodes: nodes,

});
diagram.appendTo('#element');