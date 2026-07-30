import { Diagram, NodeModel, Rect } from '@syncfusion/ej2-diagrams';
let nodes: NodeModel[] = [
  {
    id: 'Start',
    width: 100,
    height: 100,
    offsetX: 300,
    offsetY: 50,
    style: { fill: '#6BA5D7' },
    annotations: [
      {
        id: 'label1',
        content: 'Start',
      },
    ],
    shape: {
      type: 'Flow',
      shape: 'Terminator',
    },
  },
];
//ScrollableArea from 0 to 1500 in horizontal axis and 0 to 1500 in vertical axis
let area = new Rect(0, 0, 1500, 1500);
let diagram: Diagram = new Diagram({
  width: 1000,
  height: '500px',
  nodes: nodes,
  rulerSettings: { showRulers: true },
  // set the autoScrollBorder
  scrollSettings: {
    canAutoScroll: true,
    //Sets the scroll limit
    scrollLimit: 'Limited',
    //Sets scrollableArea
    scrollableArea: area,
  },
});

diagram.appendTo('#element');
//To change scroll limit dynamically.
(document.getElementById('scrollLimit') as HTMLInputElement).onchange = (args: any) => {
  diagram.scrollSettings.scrollLimit = args.target.value;
  diagram.dataBind();
};
