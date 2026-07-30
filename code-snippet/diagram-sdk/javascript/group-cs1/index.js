var nodes = [{
        id: "rectangle1",
        offsetX: 100,
        offsetY: 100,
        width: 100,
        height: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        annotations: [{
            content: 'rectangle1'
        }]
    }, {
        id: "rectangle2",
        offsetX: 200,
        offsetY: 200,
        width: 100,
        height: 100,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        annotations: [{
            content: 'rectangle2'
        }]
    },
    {
        id: 'group',
        children: ['rectangle1', 'rectangle2'],
    },

];

var diagram = new ej.diagrams.Diagram({
    width: '1500px',
    height: '600px',
    getNodeDefaults: function(node) {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
    nodes: nodes,
}, '#element');

