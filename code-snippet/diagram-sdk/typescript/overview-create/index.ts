/**
 * OverView
 */

import { Diagram, Overview, SnapConstraints } from '@syncfusion/ej2-diagrams';

// Initializtion of the diagram.
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '790px',
  nodes: [{ id: 'node1', offsetX: 400, offsetY: 400, height: 100, width: 200 }],
  scrollSettings: { scrollLimit: 'Diagram' },
  // Sets the constraints of the SnapSettings
  snapSettings: { constraints: SnapConstraints.None },
});
diagram.appendTo('#element');

// Initializtion of the Overview.
let overview: Overview = new Overview({
  width: '300px',
  height: '150ppx',
  sourceID: 'element',
});
overview.appendTo('#overview');
