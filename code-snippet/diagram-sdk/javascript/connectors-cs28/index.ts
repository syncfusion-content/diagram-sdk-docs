


import {Diagram,ConnectorModel} from '@syncfusion/ej2-diagrams';

let connectors: ConnectorModel = {
    id: 'connector1',
    // Defines the z-index value for the connector
    zIndex: 2,
    type: 'Straight',
    sourcePoint: {
        x: 300,
        y: 100
    },
    targetPoint: {
        x: 300,
        y: 200
    }
};
let connectors2: ConnectorModel = {
    id: 'connector2',
    type: 'Straight',
    // Defines the z-index value for the connector
    zIndex: 1,
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
    width: '100%',
    getConnectorDefaults: (obj: ConnectorModel): ConnectorModel => {
        obj.style.strokeColor = '#6BA5D7';
        obj.style.fill = '#6BA5D7';
        obj.style.strokeWidth = 2;
        obj.targetDecorator.style.fill = '#6BA5D7';
        obj.targetDecorator.style.strokeColor = '#6BA5D7';
        return obj;
    },
    height: '600px',
    connectors: [connectors, connectors2]
});

diagram.appendTo('#element');



