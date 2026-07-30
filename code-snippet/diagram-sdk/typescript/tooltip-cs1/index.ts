import {
    ConnectorConstraints,
    Diagram,
    DiagramConstraints,
    NodeConstraints,
  } from '@syncfusion/ej2-diagrams';
  let connector = {
    id: 'con1',
    sourcePoint: { x: 200, y: 100 },
    targetPoint: { x: 400, y: 250 },
    tooltip: { content: 'connector' },
    constraints:
      ConnectorConstraints.Default | ConnectorConstraints.InheritTooltip,
  };
  //Initializes the diagram component
  let diagram: Diagram = new Diagram(
    {
      width: '100%',
      height: '350px',
      constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
      //Defines nodes
      nodes: [
        {
          id: 'node1',
          width: 100,
          height: 100,
          annotations: [
            {
              id: 'label',
              content: 'Rectangle',
              offset: {
                x: 0.5,
                y: 0.5,
              },
              style: {
                color: 'white',
              },
            },
          ],
          offsetX: 200,
          offsetY: 200,
          style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7',
          },
          //To inherit diagram tooltip
          constraints: NodeConstraints.Default | NodeConstraints.InheritTooltip,
          //Defines mouse over tooltip for a node
          tooltip: {
            //Sets the content of the tooltip
            content: 'Node',
          },
        },
      ],
      connectors: [connector],
      //Defines mouse over tooltip for a node
      tooltip: {
        //Sets the content of the tooltip
        content: 'DiagramToolTip',
        //Sets the position of the tooltip
        position: 'BottomRight',
        //Sets the tooltip position relative to the node
        relativeMode: 'Object',
      },
    },
    '#element'
  );
  