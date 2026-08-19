

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent, Inject, IExportOptions, NodeModel,
  PrintAndExport, SnapConstraints, SnapSettingsModel, PageSettingsModel } from "@syncfusion/ej2-react-diagrams";

let snapSettings: SnapSettingsModel = { constraints: SnapConstraints.None };
let pageSettings: PageSettingsModel = {
  width: 400,
  height: 300,
  showPageBreaks: true,
  multiplePage: true,
};

export default function App() {
  let diagramInstance: DiagramComponent;

  // Initialize Nodes for the diagram
  let nodes: NodeModel[] = [
    {
      id: 'node1',
      width: 100,
      height: 50,
      offsetX: 100,
      offsetY: 100,
      style: { strokeColor: '#868686', fill: '#d5f5d5' },
      annotations: [{ content: 'Node 1' }],
    },
    {
      id: 'node2',
      width: 100,
      height: 75,
      offsetX: 500,
      offsetY: 100,
      shape: { type: 'Basic', shape: 'Diamond' },
      style: { strokeColor: '#8f908f', fill: '#e2f3fa' },
      annotations: [{ content: 'Node 2' }],
    }
  ];

  //Function to print the diagram objects.
  function handleExport() {
    let exportOptions: IExportOptions = {};
    //Sets the multiple page as true for the exported image
    exportOptions.multiplePage = true;
    exportOptions.region = 'PageSettings';
    diagramInstance.exportDiagram(exportOptions);
  };

  return (
    // Initialize Diagram component
    <div>
      <button id="export" onClick={handleExport}>Export Diagram</button>
      <DiagramComponent
        id="container"
        ref={(diagram: any) => (diagramInstance = diagram)}
        width={'100%'}
        height={'600px'}
        nodes={nodes}
        snapSettings={snapSettings}
        pageSettings={pageSettings}
      >
        <Inject services={[PrintAndExport]} />
      </DiagramComponent>
    </div>
  );
};

// Render the App component into the 'diagram' element in the DOM
const root = ReactDOM.createRoot(document.getElementById("diagram") as HTMLElement);
root.render(<App />);

