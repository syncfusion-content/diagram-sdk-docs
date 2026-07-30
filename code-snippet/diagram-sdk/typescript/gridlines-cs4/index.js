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
    constraints: (ej.diagrams.SnapConstraints.SnapToLines) | (ej.diagrams.SnapConstraints.ShowLines)
};
var diagram = new ej.diagrams.Diagram({
    width: '800px',
    height: '500px',
    nodes: nodes,
    getNodeDefaults: function(node) {
        node.height = 100;
        node.width = 100;
        node.style.fill = '#6BA5D7';
        node.style.strokeColor = 'white';
        return node;
    },
    snapSettings: snapSettings
}, '#element');

