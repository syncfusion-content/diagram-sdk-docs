import {
  Diagram,
  NodeModel,
  ErShapeModel,
  ErDiagrams
} from '@syncfusion/ej2-diagrams';

Diagram.Inject(ErDiagrams);

// Define a basic ER entity (Customer table)
const customer: NodeModel = {
  id: 'Customer',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Customer'
      }
    },
    fields: [
      {
        id: 'cust_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true,
        constraints: ['NotNull']
      },
      {
        id: 'cust_firstname',
        name: 'FirstName',
        dataType: 'VARCHAR(50)',
        constraints: ['NotNull']
      },
      {
        id: 'cust_email',
        name: 'Email',
        dataType: 'VARCHAR(100)',
        constraints: ['Unique']
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

diagram.appendTo('#element');