import {
  Diagram,
  ConnectorModel,
  ICollectionChangeEventArgs,
} from '@syncfusion/ej2-diagrams';

let connectors: ConnectorModel[] = [
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
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  connectors: connectors,
  collectionChange: function (args: ICollectionChangeEventArgs) {
    console.log('collectionChange');
    //Customize
  },
});
diagram.appendTo('#element');

(document.getElementById('add') as HTMLInputElement).onclick = () => {
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
(document.getElementById('remove') as HTMLInputElement).onclick = () => {
  let connector =
    diagram.selectedItems.connectors.length > 0
      ? diagram.selectedItems.connectors[0]
      : diagram.connectors[0];
  diagram.remove(connector);
};
