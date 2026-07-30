ej.diagrams.Diagram.Inject(ej.diagrams.Flowchart);
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    layout: { type: 'Flowchart' },
    getNodeDefaults: function (obj) {
      obj.width = 120;
      obj.height = 50;
      if (obj.shape.shape === 'Decision') {
        obj.height = 80;
      }
      obj.annotations[0].style.bold = true;
      return obj;
    }, getConnectorDefaults: function (connector) {
      connector.type = 'Orthogonal';
      connector.style.strokeColor = '#6CA0DC';
      connector.targetDecorator.style = { fill: '#6CA0DC', strokeColor: '#6CA0DC' };
      return connector;
    }
  });
  diagram.appendTo('#element');

let mermaidFlowchartData = `flowchart TD
    A[Start] --> B(Process)
    B -.- C{Decision}
    C --Yes--> D[Plan 1]
    C ==>|No| E[Plan 2]
    style A fill:#90EE90,stroke:#333,stroke-width:2px;
    style B fill:#4682B4,stroke:#333,stroke-width:2px;
    style C fill:#FFD700,stroke:#333,stroke-width:2px;
    style D fill:#FF6347,stroke:#333,stroke-width:2px;
    style E fill:#FF6347,stroke:#333,stroke-width:2px;`;

(document.getElementById('loadMermaidFlowchart')).onclick = function () {
  // load the mermaid flowchart data to diagram
  //parameter: mermaidFlowchartData - mermaid format string data for flowchart
  diagram.loadDiagramFromMermaid(mermaidFlowchartData);
};


