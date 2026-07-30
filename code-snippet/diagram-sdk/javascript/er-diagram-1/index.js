ej.diagrams.Diagram.Inject(ej.diagrams.ErDiagrams);

// Define a basic ER entity (Customer table)
var customer = {
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
  }
};

// Initialize diagram control
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '400px',
    nodes: [customer]
  },
  '#element'
);