import {
  Diagram,
  NodeModel,
  Snapping,
  FitOptionsModel,
} from '@syncfusion/ej2-diagrams';
let diagram: Diagram;
Diagram.Inject(Snapping);

let nodes: NodeModel[] = [
  {
    id: 'Node1',
    offsetX: 200,
    offsetY: 200,
    width: 100,
    height: 100,
    annotations: [{ content: 'Node fits at the center of view port' }],
  },
];
//Initializes diagram control
diagram = new Diagram({
  width: '100%',
  height: '645px',
  nodes: nodes,
  pageSettings: {
    width: 500,
    height: 500,
    background: { color: 'grey' },
    fitOptions: {
      // Fits the content to the center of the viewport
      canFit: true,
      // Allows zooming in to fit smaller content
      canZoomIn: true,
      // Specifies the region to fit to the center
      region: 'Content',
      // Specifies the mode of fitOptions
      mode: 'Page',
      // Defines the margin around the fitted content
      margin: { left: 50, right: 50, top: 50, bottom: 50 },
    } as FitOptionsModel,
  },
});
diagram.appendTo('#element');
