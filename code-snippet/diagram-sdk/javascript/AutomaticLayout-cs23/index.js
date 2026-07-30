ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
var nodes = [];
var connectors = [];

function ConnectNodes(parentNode, childNode) {
    var connector = {
        id: parentNode.id + childNode.id,
        sourceID: parentNode.id,
        targetID: childNode.id,
        targetDecorator: { shape: 'None' }
    }
    return connector;
}

function GetRectangle(name) {
    var shape = { type: 'Basic', shape: 'Ellipse' };
    var node = { id: name, height: 25, width: 25, borderColor: '#5e5e5e', borderWidth: 1, style: { fill: '#ff6329' }, shape: shape };
    return node;
}

function populateNodes() {
    var parentRect = GetRectangle("p");
    nodes.push(parentRect);
    for (var i = 0; i < 2; i++) {
        var childRect_i = GetRectangle("c" + i);
        nodes.push(childRect_i);
        for (var j = 0; j < 2; j++) {
            var childRect_j = GetRectangle("c" + i + j);
            nodes.push(childRect_j);
            for (var k = 0; k < 6; k++) {
                var childRect_k = GetRectangle("c" + i + j + k);
                nodes.push(childRect_k);
                connectors.push(ConnectNodes(childRect_j, childRect_k));
            }
            connectors.push(ConnectNodes(childRect_i, childRect_j));
        }
        connectors.push(ConnectNodes(parentRect, childRect_i));
    }
    return nodes;
}

populateNodes();
var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '550px',
    layout: { type: 'SymmetricalLayout', springLength: 80, springFactor: 0.8, maxIteration: 500, margin: { left: 20, top: 20 } },
    nodes: nodes, connectors: connectors,
});
diagram.appendTo('#element');

