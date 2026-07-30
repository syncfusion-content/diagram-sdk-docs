import {
  Diagram,
  NodeModel,
  FixedUserHandleEventsArgs,
  ConnectorModel,
} from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
      id:"node1",
      offsetX: 250,
      offsetY: 250,
      width: 100,
      height: 100,
      style: {
          fill: '#6BA5D7',
          strokeColor: 'white'
      },
      fixedUserHandles: [{ offset: { x: 0, y: 0 }, margin: { right: 20 }, width: 50, height: 20, id: 'usercon1' }]
  }
];
let connectors: ConnectorModel[] = [
  {
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
          x: 400,
          y: 200
      },
      targetPoint: {
          x: 500,
          y: 300
      }, type: 'Orthogonal',
      fixedUserHandles: [{ offset: 0.5, width: 120, alignment: 'Before', height: 20, id: 'usercon2', displacement: { x: 10, y: 10 } }]
  }
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  nodes: nodes,
  connectors: connectors,
  fixedUserHandleTemplate: "#fixeduserhandletemplate"
});

diagram.appendTo('#element');

((document.getElementById("colorPicker"))as HTMLSelectElement).onchange = function()
{
    let currentColor =  (document.getElementById('colorPicker') as HTMLSelectElement).value;
    diagram.nodes[0].style.fill = currentColor;
}
