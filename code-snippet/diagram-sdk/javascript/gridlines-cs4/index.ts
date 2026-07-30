


import {Diagram,SnapConstraints,SnapSettingsModel,Snapping,NodeModel} from '@syncfusion/ej2-diagrams';
Diagram.Inject(Snapping);
let snapSettings: SnapSettingsModel = {
    // Enables the object to snap with both horizontal and Vertical gridlines
    constraints: SnapConstraints.SnapToLines | SnapConstraints.ShowLines
};
let nodes: NodeModel[] = [{
    id: 'node1',
    style:{fill:'#6BA5D7',strokeColor:'#6BA5D7'},
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
}];
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '500px',
    nodes: nodes,
    snapSettings: snapSettings
});
diagram.appendTo('#element');



