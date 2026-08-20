

function dataLoaded(args) {
  //We can get the diagram instance from the args.
  console.log(args);
}

//Configure data source for the diagram
const dataSourceSettings = {
  id: 'id',
  parentId: 'parentId',
  dataManager: new DataManager([
    { id: 'Start', parentId: null },
    { id: 'Init', parentId: 'Start' },
  ])
};

const layout = {
  type: 'HierarchicalTree',
};

<DiagramComponent id="diagram" width={'100%'} height={'600px'}
    dataSourceSettings={dataSourceSettings}
    //Event triggers after the diagram populates from the configured data source
    dataLoaded={dataLoaded}
    //Uses layout to auto-arrange nodes on the diagram page
    layout={layout}>
    {/* Inject necessary services for the diagram */}
    <Inject services={[DataBinding, HierarchicalTree]} />
</DiagramComponent>

