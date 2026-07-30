import {
  Diagram,
  NodeModel,
  ErShapeModel,
  ErDiagrams
} from "@syncfusion/ej2-diagrams";

Diagram.Inject(ErDiagrams);

// Define an ER entity with customized header
const customer: NodeModel = {
  id: 'Customer',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'CUSTOMER TABLE',
        style: {
          color: 'white',
          fontSize: 13,
          bold: true,
          fontFamily: 'Arial'
        }
      },
      height: 35,
      style: {
        fill: '#2E75B6'
      }
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true
      },
      {
        id: 'cust_name',
        name: 'FirstName',
        dataType: 'VARCHAR(50)'
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)'
      }
    ]
  } as ErShapeModel
};

// Initialize diagram control
const diagram: Diagram = new Diagram({
  width: '100%',
  height: '400px',
  nodes: [customer]
});

diagram.appendTo("#element");