import { Diagram, NodeModel, ConnectorModel,MindMap,DataBinding } from '@syncfusion/ej2-diagrams';
Diagram.Inject(MindMap,DataBinding);

let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  layout:{
    type:'MindMap',
    verticalSpacing: 50,
    horizontalSpacing: 50,
    orientation: 'Horizontal',
},
  getNodeDefaults: function (obj: NodeModel) {
    obj.width = 120;
    obj.height = 50;
    obj.annotations[0].style.bold = true;
    return obj;
}, getConnectorDefaults: function (connector: ConnectorModel) {
    connector.type = 'Orthogonal';
    connector.style.strokeColor = '#6CA0DC';
    connector.targetDecorator.shape = 'None';
    return connector;
}
});

diagram.appendTo('#element');

let mermaidMindmapData = `mindmap
                            root((mindmap))
                              Origins
                                Popularisation
                              Research
                                On effectivness<br/>and features
                                On Automatic creation
                              Tools
                                Pen and paper
                                Mermaid`;

(document.getElementById('loadMermaidMindmap') as HTMLElement).onclick = function () {
  // load the mermaid mindmap data to diagram
  //parameter: mermaidMindmapData - mermaid format string data for mindmap
  diagram.loadDiagramFromMermaid(mermaidMindmapData);
};

