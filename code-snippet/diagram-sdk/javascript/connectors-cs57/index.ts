


import {Diagram,DiagramConstraints,ConnectorConstraints,ConnectorModel} from '@syncfusion/ej2-diagrams';
let connectors: ConnectorModel = {
        id: "connector1",
        // Disables selection constraints
        constraints: ConnectorConstraints.Default & ~ConnectorConstraints.Select,
        type: 'Straight',
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
};
let diagram: Diagram = new Diagram({
    width: 1500,
    height: 1500,
    connectors: [connectors]
});
diagram.appendTo('#element');



