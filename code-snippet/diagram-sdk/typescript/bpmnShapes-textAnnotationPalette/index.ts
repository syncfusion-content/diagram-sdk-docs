import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);

/**
 * BPMNShapes_Events
 */

import {
  Diagram,
  NodeModel,
  Node,
  BpmnDiagrams,
  UndoRedo,
  SymbolPalette,
  BpmnShapeModel,
  DiagramContextMenu,
  ConnectorModel,
  BpmnGatewayModel,
  ContextMenuSettingsModel,
  IDragEnterEventArgs,
  BpmnEvents,
  BpmnFlowModel,
} from '@syncfusion/ej2-diagrams';
import { MenuEventArgs } from '@syncfusion/ej2-navigations';

// tslint:disable
Diagram.Inject(BpmnDiagrams, UndoRedo, DiagramContextMenu);
SymbolPalette.Inject(BpmnDiagrams);

let diagram: Diagram;
let nodes: NodeModel[] = [];
let shape: BpmnFlowModel = {
  type: 'Bpmn',
  flow: 'Association',
  association: 'Directional',
};
let connectors: ConnectorModel[] = [];
let bpmnShapes: NodeModel[] = [
  {
    id: 'Start',
    width: 35,
    height: 35,
    shape: {
      type: 'Bpmn',
      shape: 'Event',
      event: { event: 'Start' },
    },
  },
  {
    id: 'Gateway',
    width: 35,
    height: 35,
    offsetX: 100,
    offsetY: 100,
    shape: {
      type: 'Bpmn',
      shape: 'Gateway',
      gateway: { type: 'Exclusive' } as BpmnGatewayModel,
    },
  },
  {
    id: 'DataObject',
    width: 35,
    height: 35,
    offsetX: 500,
    offsetY: 100,
    shape: {
      type: 'Bpmn',
      shape: 'DataObject',
      dataObject: { collection: false, type: 'None' },
    },
  },
  {
    id: 'textAnnotation',
    width: 35,
    height: 35,
    shape: {
      type: 'Bpmn',
      shape: 'TextAnnotation',
    },
    annotations: [{ content: 'textAnnotation' }],
  },
];

function dragEnter(args: IDragEnterEventArgs): void {
  let obj: NodeModel = args.element as NodeModel;
  if (obj instanceof Node) {
    let bpmnShape: BpmnShapeModel = obj.shape as BpmnShapeModel;
    if (!bpmnShape.activity.subProcess.collapsed) {
      bpmnShape.activity.subProcess.transaction.cancel.visible = true;
      bpmnShape.activity.subProcess.transaction.failure.visible = true;
      bpmnShape.activity.subProcess.transaction.success.visible = true;
    } else {
      let oWidth: number = obj.width;
      let oHeight: number = obj.height;
      let ratio: number = 100 / obj.width;
      obj.width = 100;
      obj.height *= ratio;
      obj.offsetX += (obj.width - oWidth) / 2;
      obj.offsetY += (obj.height - oHeight) / 2;
    }
  }
}

function getSymbolDefaults(symbol: NodeModel): void {
  symbol.style.strokeColor = '#757575';
}

diagram = new Diagram({
  width: '800px',
  height: '445px',
  nodes: nodes,
  connectors: connectors,
  snapSettings: { constraints: 0 },
  dragEnter: dragEnter,
});
diagram.appendTo('#element');
diagram.fitToPage({ mode: 'Width' });

let palette: SymbolPalette = new SymbolPalette({
  expandMode: 'Multiple',
  symbolMargin: { left: 15, right: 15, top: 15, bottom: 15 },
  symbolHeight: 60,
  symbolWidth: 60,
  palettes: [
    {
      id: 'Bpmn',
      expanded: true,
      symbols: bpmnShapes,
      iconCss: 'shapes',
      title: 'BPMN Shapes',
    },
  ],
  width: '100%',
  height: '471px',
  getNodeDefaults: getSymbolDefaults,
});
palette.appendTo('#palette');
