import {
  Diagram,
  HierarchicalTree,
  IDataLoadedEventArgs,
  ILoadEventArgs,
  DataBinding,
} from '@syncfusion/ej2-diagrams';
import { DataManager } from '@syncfusion/ej2-data';
Diagram.Inject(HierarchicalTree, DataBinding);
let data: Object = [
  { id: 'CEO', parent: null },
  { id: 'Manager', parent: 'CEO' },
  { id: 'Lead', parent: 'CEO' },
];
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px',
  layout: { type: 'HierarchicalTree' },
  dataSourceSettings: {
    id: 'id',
    parentId: 'parent',
    dataSource: new DataManager(data),
  },
  load: function (args: ILoadEventArgs) {
    //Triggers before diagram load
    console.log('Load event triggered');
  },
  dataLoaded: function (args: IDataLoadedEventArgs) {
    //Notifies after the data is loaded
    console.log('Data source loaded');
  },
  created: function () {
    console.log('Diagram Created');
  },
});
diagram.appendTo('#element');
