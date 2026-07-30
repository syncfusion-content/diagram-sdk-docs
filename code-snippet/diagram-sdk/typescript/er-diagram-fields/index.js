ej.diagrams.Diagram.Inject(ej.diagrams.ErDiagrams);

// Define an ER entity with various field properties
var product = {
  id: 'Product',
  offsetX: 300,
  offsetY: 200,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Product'
      }
    },
    fields: [
      {
        id: 'prod_id',
        name: 'ProductID',
        dataType: 'INT',
        isPrimaryKey: true,
        constraints: ['NotNull']
      },
      {
        id: 'prod_code',
        name: 'ProductCode',
        dataType: 'VARCHAR(50)',
        constraints: ['NotNull', 'Unique']
      },
      {
        id: 'prod_name',
        name: 'ProductName',
        dataType: 'VARCHAR(150)',
        constraints: ['NotNull']
      },
      {
        id: 'prod_price',
        name: 'Price',
        dataType: 'DECIMAL(10,2)',
        constraints: ['NotNull']
      },
      {
        id: 'prod_desc',
        name: 'Description',
        dataType: 'TEXT'
      },
      {
        id: 'prod_catid',
        name: 'CategoryID',
        dataType: 'INT',
        isForeignKey: true
      }
    ]
  }
};

// Initialize diagram control
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '400px',
    nodes: [product]
  },
  '#element'
);