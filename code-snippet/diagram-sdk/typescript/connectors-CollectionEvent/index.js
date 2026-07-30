ej.diagrams.Diagram.Inject(ej.diagrams.ConnectorEditing);
var connectors = [
  {
    id: 'connector1',
    type: 'Straight',
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    sourcePoint: {
      x: 100,
      y: 100,
    },
    targetPoint: {
      x: 200,
      y: 200,
    },
  },
  {
    id: 'connector2',
    type: 'Straight',
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    sourcePoint: {
      x: 300,
      y: 100,
    },
    targetPoint: {
      x: 400,
      y: 200,
    },
  },
];

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    connectors: connectors,
    collectionChange: function (args) {
      console.log('collectionChange');
      //customize
    },
  },
  '#element'
);
document.getElementById('add').onclick = () => {
  let connector = {
    type: 'Straight',
    style: {
      strokeColor: '#6BA5D7',
      fill: '#6BA5D7',
      strokeWidth: 2,
    },
    targetDecorator: {
      style: {
        fill: '#6BA5D7',
        strokeColor: '#6BA5D7',
      },
    },
    sourcePoint: {
      x: 100,
      y: 300,
    },
    targetPoint: {
      x: 200,
      y: 500,
    },
  };
  diagram.add(connector);
};
document.getElementById('remove').onclick = () => {
  let connector =
    diagram.selectedItems.connectors.length > 0
      ? diagram.selectedItems.connectors[0]
      : diagram.connectors[0];
  diagram.remove(connector);
};
