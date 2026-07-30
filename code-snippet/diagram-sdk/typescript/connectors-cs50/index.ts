


import {ConnectorModel,NodeModel,BasicShapeModel,Diagram} from '@syncfusion/ej2-diagrams';
let connectors: ConnectorModel = {
    id: "connector1",
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7',
        strokeWidth: 2
    },
    targetDecorator: {
        style: {
            fill: '#6BA5D7',
            strokeColor: '#6BA5D7'
        }
    },
    type: 'Orthogonal',
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    },
    // Flip the connector in horizontal direction
    flip:"Horizontal"
}
let diagram: Diagram = new Diagram({
    width: '100%',
    height: 900,
    connectors: [connectors],
});
diagram.appendTo('#element');



