ej.diagrams.Diagram.Inject(ej.diagrams.ErDiagrams);

var customer = {
  id: 'Customer',
  offsetX: 250,
  offsetY: 100,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Customer'
      }
    },
    fields: [
      {
        id: 'customer_id',
        name: 'CustomerID',
        dataType: 'INT',
        isPrimaryKey: true
      }
    ]
  },
  style: {
    fill: '#ffffff',
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  }
};

var order = {
  id: 'Order',
  offsetX: 400,
  offsetY: 250,
  shape: {
    type: 'Er',
    header: {
      annotation: {
        content: 'Order'
      }
    },
    fields: [
      {
        id: 'order_id',
        name: 'OrderID',
        dataType: 'INT',
        isPrimaryKey: true
      },
      {
        id: 'customer_id_fk',
        name: 'CustomerID',
        dataType: 'INT',
        isForeignKey: true
      }
    ]
  },
  style: {
    fill: '#ffffff',
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  }
};

var relationship = {
  id: 'customer_order',
  sourceID: 'Customer',
  targetID: 'Order',
  shape: {
    type: 'Er',
    sourceMultiplicity: {
      type: 'One'
    },
    targetMultiplicity: {
      type: 'OneOrMany'
    }
  },
  style: {
    strokeColor: '#7c3aed',
    strokeWidth: 1.5
  },
  sourceDecorator: {
    style: {
      strokeColor: '#7c3aed',
      strokeWidth: 1.5
    }
  },
  targetDecorator: {
    style: {
      strokeColor: '#7c3aed',
      strokeWidth: 1.5
    }
  }
};

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '400px',
    nodes: [customer, order],
    connectors: [relationship],
    getConnectorDefaults: (connector) => {
      connector.cornerRadius = 10;
      connector.type = 'Orthogonal';
      return connector;
    }
  },
  '#element'
);