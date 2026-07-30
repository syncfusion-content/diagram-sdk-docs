


import {
    Diagram,
    NodeModel,
    DiagramConstraints,
    NodeConstraints
} from '@syncfusion/ej2-diagrams';
import {
    NodeAnimationSettings
} from '@syncfusion/ej2-navigations';

//Initializes the diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '350px',
    constraints: DiagramConstraints.Default | DiagramConstraints.Tooltip,
    //Defines nodes
    nodes: [{
        id: "node1",
        width: 100,
        height: 100,
        annotations: [{
            id: 'label',
            content: 'Rectangle',
            offset: {
                x: 0.5,
                y: 0.5
            },
            style: {
                color: 'white'
            }
        }],
        offsetX: 200,
        offsetY: 200,
        style: {
            strokeColor: '#6BA5D7',
            fill: '#6BA5D7'
        },
        constraints: NodeConstraints.Default | NodeConstraints.Tooltip,
        //Defines mouse over tooltip for a node
        tooltip: {
            //Sets the content of the tooltip
            content: getContent(),
            //Sets the position of the tooltip
            position: 'TopLeft',
            //Sets the tooltip position relative to the node
            relativeMode: 'Object'
        }
    }]
}, '#element');

function getContent(): HTMLElement {
    let tooltipContent: HTMLElement = document.createElement('div');
    tooltipContent.innerHTML = '<div style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;"> <span style="margin: 10px;"> Tooltip !!! </span> </div>';
    return tooltipContent;
}



