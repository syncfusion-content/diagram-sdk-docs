var data = [
  { id: 'CEO', parent: null },
  { id: 'Manager', parent: 'CEO' },
  { id: 'Lead', parent: 'CEO' },
];
var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  layout: { type: 'HierarchicalTree' },
  dataSourceSettings: {
    id: 'id',
    parentId: 'parent',
    dataSource: new ej.data.DataManager(data),
  },
  load: function (args) {
    //Triggers before diagram load
    console.log('Load event triggered');
  },
  dataLoaded: function (args) {
    //Notifies after the data is loaded
    console.log('Data source loaded');
  },
  created: function () {
    console.log('Diagram Created');
  },
});
diagram.appendTo('#element');
