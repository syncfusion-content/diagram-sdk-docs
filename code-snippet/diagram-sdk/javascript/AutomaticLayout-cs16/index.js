ej.diagrams.Diagram.Inject(
    ej.diagrams.DataBinding,
    ej.diagrams.HierarchicalTree
  );
  var data = [
    { Name: 'Steve-Ceo' },
    { Name: 'Kevin-Manager', ReportingPerson: 'Steve-Ceo', color: 'darkcyan' },
    { Name: 'Peter-Manager', ReportingPerson: 'Steve-Ceo', color: 'white' },
    {
      Name: 'John- Manager',
      ReportingPerson: 'Peter-Manager',
      color: 'darkcyan',
    },
    { Name: 'Mary-CSE ', ReportingPerson: 'Peter-Manager', color: 'white' },
    { Name: 'Jim-CSE ', ReportingPerson: 'Kevin-Manager', color: 'darkcyan' },
    { Name: 'Martin-CSE', ReportingPerson: 'Kevin-Manager', color: 'white' },
  ];
  
  var items = new ej.data.DataManager(data, new ej.data.Query().take(7));
  
  var diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '550px',
    layout: {
      type: 'HierarchicalTree',
      bounds: new ej.diagrams.Rect(0, 0, 500, 500),
      horizontalSpacing: 25,
      verticalSpacing: 30,
      horizontalAlignment: 'Left',
      verticalAlignment: 'Top',
    },
    dataSourceSettings: {
      id: 'Name',
      parentId: 'ReportingPerson',
      dataManager: items,
    },
    getNodeDefaults: (obj) => {
      obj.width = 200;
      obj.height = 60;
      return obj;
    },
    getConnectorDefaults: (connector) => {
      connector.style = {
        strokeColor: '#6BA5D7',
        strokeWidth: 2,
      };
      connector.targetDecorator.style.fill = '#6BA5D7';
      connector.targetDecorator.style.strokeColor = '#6BA5D7';
      connector.targetDecorator.shape = 'None';
      connector.type = 'Orthogonal';
      return connector;
    },
    setNodeTemplate: function (obj) {
      let container = new ej.diagrams.StackPanel();
      container.width = 200;
      container.height = 60;
      container.cornerRadius=10;
      container.style.fill = 'skyblue';
      container.horizontalAlignment = 'Left';
      container.orientation = 'Horizontal';
      container.id = obj.data.Name + '_StackContainter';
      let innerContent = new ej.diagrams.ImageElement();
      innerContent.id = obj.data.Name + '_innerContent';
      innerContent.width = 40;
      innerContent.height = 40;
      innerContent.margin.left = 20;
      innerContent.style.fill = 'lightgrey';
      let text = new ej.diagrams.TextElement();
      text.content = 'Name: ' + obj.data.Name;
      text.margin = { left: 10, top: 5 };
      text.id = obj.data.Name + '_textContent';
      text.style.fill = 'green';
      text.style.color = 'white';
      if (obj.data.Name === 'Steve-Ceo') {
        text.style.fill = 'black';
        text.style.color = 'white';
      }
      container.children = [innerContent, text];
      return container;
    },
  });
  diagram.appendTo('#element');
  