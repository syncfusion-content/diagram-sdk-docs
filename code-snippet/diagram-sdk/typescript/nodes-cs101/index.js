ej.diagrams.Diagram.Inject(ej.diagrams.HierarchicalTree);
var nodes = [
    {
        id: 'Start', width: 140, height: 50, offsetX: 300, offsetY: 50,
        annotations: [{
            content: 'Node1'
        }],
 style: { fill: '#6BA5D7', strokeColor: 'white' },
        expandIcon: {shape: 'Minus', width: 20, height: 20,fill:'red',borderColor:'blue',iconColor:'white',cornerRadius:7,borderWidth:2.5},
        collapseIcon: {shape: 'Plus', width: 20, height: 20 ,fill:'green',borderColor:'blue',iconColor:'white',cornerRadius:7,borderWidth:2.5}
    },
    {
        id: 'Init', width: 140, height: 50, offsetX: 300, offsetY: 140,
 style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{
            content: 'Node2'
        }],
        
    }
];
var connectors = [{
    // Unique name for the connector
    id: "connector1",
    // Source and Target node's name to which connector needs to be connected.
    sourceID: "Start",
    targetID: "Init",
    type: 'Orthogonal'
}];

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes, connectors: connectors,
    layout:{type:'HierarchicalTree'}
    }, '#element');


