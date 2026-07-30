


import {
    Diagram, ConnectorModel, NodeModel, FlowchartLayout,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(FlowchartLayout);

//Initialize nodes
let nodes: NodeModel[] = [
  { id: '1', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'Start' }], style: { fill: '#6CA0DC' } },
  { id: '2', shape: { type: 'Flow', shape: 'Decision' }, annotations: [{ content: 'Decision?' }], style: { fill: '#6CA0DC' } },
  { id: '3', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process1' }], style: { fill: '#6CA0DC' } },
  { id: '4', shape: { type: 'Flow', shape: 'Process' }, annotations: [{ content: 'Process2' }], style: { fill: '#6CA0DC' } },
  { id: '5', shape: { type: 'Flow', shape: 'Terminator' }, annotations: [{ content: 'End' }], style: { fill: '#6CA0DC' } }
];
//Initialize connectors
let connectors: ConnectorModel[] = [
  { id: 'connector1', sourceID: '1', targetID: '2' },
  { id: 'connector2', sourceID: '2', targetID: '3',annotations: [{ content: 'Reject' }]  },
  { id: 'connector3', sourceID: '2', targetID: '4', annotations: [{ content: 'Accept' }] },
  { id: 'connector4', sourceID: '4', targetID: '5', },
];
  
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '550px',
    nodes: nodes,
    connectors: connectors,
    //Layout to auto-arrange nodes on the diagram page
    layout: {
        //Sets layout type
        type: 'Flowchart',
        //Customizes the flowchart layout
        flowchartLayoutSettings: {
          //Sets the yes branch values
          yesBranchValues: ["Yes", "Accept"],
          //Sets the no branch values
          noBranchValues: ["No", "Reject"]
      }
    },
    //Sets the default properties for nodes
    getNodeDefaults: function (obj: NodeModel) {
        obj.width = 120;
        obj.height = 50;
        if (obj.shape.shape === 'Decision') {
            obj.height = 80;
        }
        return obj;
    }, //Sets the default properties for connectors
    getConnectorDefaults: function (connector: ConnectorModel) {
      connector.type = 'Orthogonal';
      connector.style.strokeColor = '#6CA0DC';
      connector.targetDecorator.style = {fill: '#6CA0DC', strokeColor: '#6CA0DC'};
      return connector;
    }
});
diagram.appendTo('#element');



