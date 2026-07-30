var nodes = [
    {
        id: 'Start', width: 100, height: 100, offsetX: 100, offsetY: 100,
         style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Task1', margin: { top: 20}, horizontalAlignment: 'Center' , verticalAlignment: 'Top', offset: { x: 0.5, y: 1} }]
    },
];
var connectors = [
    {
        sourcePoint: { x: 200, y: 100 },
        targetPoint: { x: 500, y: 300 },
        type: 'Orthogonal',
        //Path annotation offset
        annotations: [
          {
            content: 'annotation',
            offset: 0.2,
            margin: { left: 40 },
          },
        ],
      },
]



// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes,
    connectors:connectors
    }, '#element');

