


import {Diagram,ConnectorModel} from '@syncfusion/ej2-diagrams';
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
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
});
diagram.appendTo('#element');
// Adds to the diagram
diagram.add(connectors)
// Remove from the diagram
diagram.remove(connectors)



