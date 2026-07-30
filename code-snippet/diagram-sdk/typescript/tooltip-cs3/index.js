/**
 * Tooltip sample
 */
var diagram;

var node = {
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
    constraints: ej.diagrams.NodeConstraints.Default | ej.diagrams.NodeConstraints.Tooltip,
    //Defines mouse over tooltip for a node
        tooltip: {
            //Sets the content of the Tooltip
            content: getContent(),
            //Sets the position of the Tooltip
            position: 'TopLeft',
            //Sets the tooltip position relative to the node
            relativeMode: 'Object'
        }
};
diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '350px',
    constraints: ej.diagrams.DiagramConstraints.Default | ej.diagrams.DiagramConstraints.Tooltip,
    nodes: [node],
}, '#element');

function getContent() {
    var tooltipContent = document.createElement('div');
    tooltipContent.innerHTML = '<div> <rect  style="background-color: #f4f4f4; color: black; border-width:1px;border-style: solid;border-color: #d3d3d3; border-radius: 8px;white-space: nowrap;"> Tooltip !!! </rect> </div>';
    return tooltipContent;
}

