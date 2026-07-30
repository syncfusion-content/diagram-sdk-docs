let nodes = [{
    id: 'node1',
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
        strokeColor: '#6BA5D7',
        fill: '#6BA5D7'
    }
}];

var snapSettings = {
    horizontalGridlines: {
        snapIntervals: [10]
    },
    verticalGridlines: {
        snapIntervals: [10]
    },
    constraints: (ej.diagrams.SnapConstraints.All)
};
var diagram = new ej.diagrams.Diagram({
    width: '800px',
    height: '500px',
    getNodeDefaults: function(node) {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
    nodes: nodes,
    snapSettings: snapSettings
}, '#element');

