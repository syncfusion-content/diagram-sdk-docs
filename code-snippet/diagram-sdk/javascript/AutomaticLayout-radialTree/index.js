ej.diagrams.Diagram.Inject(
  ej.diagrams.DataBinding,
  ej.diagrams.HierarchicalTree
);
const nodes = [
  { id: 'Maria Anders' },
  { id: 'Ana Trujillo' },
  { id: 'Lino Rodri' },
  { id: 'Philip Cramer' },
  { id: 'Pedro Afonso' },
  { id: 'Paul Henriot' },
  { id: 'Laura Callahan' },
  { id: 'Anto Moreno' },
  { id: 'Elizabeth Roel' },
  { id: 'Aria Cruz' },
  { id: 'Eduardo Roel' },
  { id: 'Howard Snyd' },
  { id: 'Daniel Tonini' },
  { id: 'Nardo Batista' },
  { id: 'Michael Holz' },
  { id: 'Kloss Perrier' },
  { id: 'Liz Nixon' },
  { id: 'Paula Parente' },
  { id: 'Matti Kenna' },
];
const connectors = [
  {
    id: 'Maria Anders-Ana Trujillo',
    sourceID: 'Maria Anders',
    targetID: 'Ana Trujillo',
  },
  {
    id: 'Maria Anders-Lino Rodri',
    sourceID: 'Maria Anders',
    targetID: 'Lino Rodri',
  },
  {
    id: 'Maria Anders-Philip Cramer',
    sourceID: 'Maria Anders',
    targetID: 'Philip Cramer',
  },
  {
    id: 'Maria Anders-Pedro Afonso',
    sourceID: 'Maria Anders',
    targetID: 'Pedro Afonso',
  },
  {
    id: 'Maria Anders-Paul Henriot',
    sourceID: 'Maria Anders',
    targetID: 'Paul Henriot',
  },
  {
    id: 'Maria Anders-Laura Callahan',
    sourceID: 'Maria Anders',
    targetID: 'Laura Callahan',
  },
  {
    id: 'Ana Trujillo-Anto Moreno',
    sourceID: 'Ana Trujillo',
    targetID: 'Anto Moreno',
  },
  {
    id: 'Ana Trujillo-Elizabeth Roel',
    sourceID: 'Ana Trujillo',
    targetID: 'Elizabeth Roel',
  },
  {
    id: 'Laura Callahan-Aria Cruz',
    sourceID: 'Laura Callahan',
    targetID: 'Aria Cruz',
  },
  {
    id: 'Laura Callahan-Eduardo Roel',
    sourceID: 'Laura Callahan',
    targetID: 'Eduardo Roel',
  },
  {
    id: 'Lino Rodri-Howard Snyd',
    sourceID: 'Lino Rodri',
    targetID: 'Howard Snyd',
  },
  {
    id: 'Lino Rodri-Daniel Tonini',
    sourceID: 'Lino Rodri',
    targetID: 'Daniel Tonini',
  },
  {
    id: 'Philip Cramer-Nardo Batista',
    sourceID: 'Philip Cramer',
    targetID: 'Nardo Batista',
  },
  {
    id: 'Philip Cramer-Michael Holz',
    sourceID: 'Philip Cramer',
    targetID: 'Michael Holz',
  },
  {
    id: 'Pedro Afonso-Kloss Perrier',
    sourceID: 'Pedro Afonso',
    targetID: 'Kloss Perrier',
  },
  {
    id: 'Pedro Afonso-Liz Nixon',
    sourceID: 'Pedro Afonso',
    targetID: 'Liz Nixon',
  },
  {
    id: 'Paul Henriot-Paula Parente',
    sourceID: 'Paul Henriot',
    targetID: 'Paula Parente',
  },
  {
    id: 'Paul Henriot-Matti Kenna',
    sourceID: 'Paul Henriot',
    targetID: 'Matti Kenna',
  },
];

var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '590px',
  snapSettings: { constraints: 0 },
  layout: {
    type: 'RadialTree',
    horizontalSpacing: 30,
    verticalSpacing: 30,
    root: 'parent',
  },
  nodes: nodes,
  connectors: connectors,

  getNodeDefaults: (obj, diagram) => {
    obj.height = 20;
    obj.width = 20;
    obj.backgroundColor = 'lightgrey';
    obj.style = {
      fill: '#6BA5D7',
      strokeWidth: 2,
      strokeColor: '#6BA5D7',
    };
    return obj;
  },
  getConnectorDefaults: (connector, diagram) => {
    connector.style = {
      strokeColor: '#6BA5D7',
      strokeWidth: 2,
    };
    connector.targetDecorator.style.fill = '#6BA5D7';
    connector.targetDecorator.style.strokeColor = '#6BA5D7';
    connector.targetDecorator.shape = 'None';
    connector.type = 'Straight';
    return connector;
  },
});
diagram.appendTo('#element');
