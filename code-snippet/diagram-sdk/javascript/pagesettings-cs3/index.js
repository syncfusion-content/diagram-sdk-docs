var diagram;
var connector = {
  id: 'connector1',
  sourceID: 'node1',
  targetID: 'node2',
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
  },
};
var node = {
  id: 'node1',
  width: 100,
  height: 100,
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
  },
  offsetX: 100,
  offsetY: 100,
  annotations: [
    {
      content: 'Node1',
    },
  ],
};
var node2 = {
  id: 'node2',
  width: 100,
  height: 100,
  style: {
    strokeColor: '#6BA5D7',
    fill: '#6BA5D7',
  },
  offsetX: 300,
  offsetY: 350,
  annotations: [
    {
      content: 'Node2',
    },
  ],
};
diagram = new ej.diagrams.Diagram(
  {
    width: '1000px',
    height: '500px',
    getNodeDefaults: function (node) {
      node.height = 100;
      node.width = 100;
      node.style.fill = '#6BA5D7';
      node.style.strokeColor = 'white';
      return node;
    },
    getConnectorDefaults: function (obj) {
      obj.style.strokeColor = '#6BA5D7';
      obj.style.fill = '#6BA5D7';
      obj.style.strokeWidth = 2;
      obj.targetDecorator.style.fill = '#6BA5D7';
      obj.targetDecorator.style.strokeColor = '#6BA5D7';
      return obj;
    },
    nodes: [node, node2],
    connectors: [connector],
    pageSettings: {
      // Sets the Multiple page for diagram
      multiplePage: true,
      // Sets the Page Break for diagram
      showPageBreaks: true,
      width: 300,
      height: 300,
    },
  },
  '#element'
);
