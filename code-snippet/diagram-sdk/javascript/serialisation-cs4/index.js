var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '600px',
  });
diagram.appendTo('#element');

var mermaidData = `
 sequenceDiagram
    participant User
    participant Controller
    participant Service
    participant Database

    User->>Controller: sendRequest()
    activate Controller

    Controller->>Service: processRequest()
    activate Service

    Service->>Database: queryData()
    activate Database
    Database-->>Service: returnData()
    deactivate Database

    Service-->>Controller: returnResponse()
    deactivate Service

    Controller-->>User: sendResponse()
    deactivate Controller`;

(document.getElementById('loadMermaidSeqDiagram')).onclick = function () {
  // load the mermaid sequence diagram data to diagram
  //parameter: mermaidData - mermaid format string data for UML Sequence Diagram
  diagram.loadDiagramFromMermaid(mermaidData);
};

