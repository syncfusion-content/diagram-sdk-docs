

import {
    Diagram,
    ConnectorModel,
    NodeModel
  } from '@syncfusion/ej2-diagrams';
  //Initializes the nodes
  let node: NodeModel = {
    id: 'node1',
    width: 90,
    height: 70,
    offsetX: 120,
    offsetY: 100,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
  };
  let node2: NodeModel = {
    id: 'node2',
    width: 90,
    height: 70,
    offsetX: 150,
    offsetY: 120,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
  };
  let node3: NodeModel = {
    id: 'node3',
    width: 90,
    height: 70,
    offsetX: 170,
    offsetY: 150,
    style: {
        fill:   '#6BA5D7',
        strokeColor: 'white',
        strokeWidth: 1
    },
  };
  
  //Initializes the diagram component
  let diagram: Diagram = new Diagram({
    width: '100%',
    height: '350px',
    nodes: [node, node2, node3]
  });
  diagram.appendTo('#element');
  
  
  (document.getElementById('sendToBack') as HTMLInputElement).onclick = () => {
    diagram.sendToBack();
  };
  
  