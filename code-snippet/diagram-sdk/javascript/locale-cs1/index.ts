import { L10n, setCulture } from '@syncfusion/ej2-base';
import {
  Diagram,
  NodeModel,
  ConnectorModel,
  DiagramContextMenu,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(DiagramContextMenu);
let diagram: Diagram;

setCulture('de');

L10n.load({
  'de-DE': {
    diagram: {
      Cut: 'Corte',
      Copy: 'Copia',
      Paste: 'Pasta',
      Undo: 'Deshacer',
      Redo: 'Rehacer',
      SelectAll: 'Seleccionar todo',
      Grouping: 'Agrupación',
      Group: 'Grupo',
      Ungroup: 'Desagrupar',
      Order: 'Fin',
      BringToFront: 'Traer a delante',
      MoveForward: 'Movimiento adelante',
      SendToBack: 'Enviar a espalda',
      SendBackward: 'Enviar hacia atrás',
    },
  },
});

function getNodeDefaults(obj: NodeModel): NodeModel {
  obj.width = 100;
  obj.height = 100;
  obj.shape = { type: 'Basic', shape: 'Ellipse' };
  return obj;
}

//Sets the default values of a Connector
function getConnectorDefaults(connector: ConnectorModel): ConnectorModel {
  connector.targetDecorator.style = { fill: '#024249', strokeColor: '#024249' };
  return { style: { strokeColor: '#024249', strokeWidth: 2 } };
}

// tslint:disable-next-line:max-func-body-length

let nodes: NodeModel[] = [
  {
    id: 'Node1',
    offsetX: 300,
    offsetY: 288,
    annotations: [{ content: 'Node1' }],
  },
  {
    id: 'Node2',
    offsetX: 150,
    offsetY: 250,
    annotations: [{ content: 'Node2' }],
  },
];
//Initializes diagram control
diagram = new Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  getNodeDefaults: getNodeDefaults,
  //Sets the default values of a Connector
  getConnectorDefaults: getConnectorDefaults,
  //Set locale
  locale: 'de-DE',
  //set context menu
  contextMenuSettings: {
    show: true,
  },

  created: created,
});
diagram.appendTo('#element');
function created(): void {
  diagram.fitToPage({ mode: 'Width' });
}
