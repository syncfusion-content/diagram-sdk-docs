


import {Diagram,ConnectorModel} from '@syncfusion/ej2-diagrams';
let connectors: ConnectorModel = [{
    id: "connector1",
    sourcePoint: {
        x: 100,
        y: 100
    },
    targetPoint: {
        x: 200,
        y: 200
    }
}]
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    connectors: connectors,
});
diagram.appendTo('#element');
// Update the connector properties at the run time
diagram.connectors[0].style.strokeColor = '#6BA5D7';
diagram.connectors[0].style.fill = '#6BA5D7';
diagram.connectors[0].style.strokeWidth = 2;
diagram.connectors[0].targetDecorator.style.fill = '#6BA5D7';
diagram.connectors[0].targetDecorator.style.strokeColor = '#6BA5D7';
diagram.connectors[0].sourcePoint.x = 150;
diagram.connectors[0].targetPoint.x = 150;
diagram.dataBind();



