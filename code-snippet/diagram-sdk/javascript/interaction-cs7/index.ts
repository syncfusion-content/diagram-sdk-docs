


import { Diagram, NodeModel, ConnectorModel } from '@syncfusion/ej2-diagrams';
let node: NodeModel = {
    offsetX: 150,
    offsetY: 150,
    width: 100,
    height: 100,
    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },
     fixedUserHandles: [{offset: { x: 0, y: 0 },margin: { right: 20 }, width: 20, height: 20,
           padding:{left:3,right:3,top:3,bottom:3},iconStrokeColor:'white',fill:'black',  id: 'user1', pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
};
let connector: ConnectorModel = {
    id: 'connector1',
    type: 'Orthogonal',
    sourcePoint: { x: 300, y: 100 },
    targetPoint: { x: 400, y: 200 },
     fixedUserHandles: [{ offset: 0.5, width: 20, alignment: 'Before', padding:{left:3,right:3,top:3,bottom:3},iconStrokeColor:'white',fill:'black', height: 20, id: 'usercon1',  displacement:{x:10,y:10}, pathData: 'M60.3,18H27.5c-3,0-5.5,2.4-5.5,5.5v38.2h5.5V23.5h32.7V18z M68.5,28.9h-30c-3,0-5.5,2.4-5.5,5.5v38.2c0,3,2.4,5.5,5.5,5.5h30c3,0,5.5-2.4,5.5-5.5V34.4C73.9,31.4,71.5,28.9,68.5,28.9z M68.5,72.5h-30V34.4h30V72.5z' }]
};
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    nodes: [node],
    connectors: [connector]
});
diagram.appendTo('#element');



