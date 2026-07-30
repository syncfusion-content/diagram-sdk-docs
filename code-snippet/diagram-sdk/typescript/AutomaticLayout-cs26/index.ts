


import {
    Diagram, ConnectorModel, NodeModel, DiagramConstraints,ConnectionPointOrigin,LineDistribution, ComplexHierarchicalTree, DataBinding
} from '@syncfusion/ej2-diagrams';
import { DataManager, Query } from '@syncfusion/ej2-data';
Diagram.Inject(DataBinding, ComplexHierarchicalTree, LineDistribution);
//Initializes data source
let Data: object[] =  [
        { "Name": "node11" },
        { "Name": "node12", "ReportingPerson": ["node114"] },
        { "Name": "node13", "ReportingPerson": ["node12"] },
        { "Name": "node14", "ReportingPerson": ["node12"] },
        { "Name": "node15", "ReportingPerson": ["node12"] },
        { "Name": "node116", "ReportingPerson": ["node22","node12"] },
        { "Name": "node16", "ReportingPerson": [] },
        { "Name": "node18", "ReportingPerson": [] },
        { "Name": "node21" },
        { "Name": "node22", "ReportingPerson": ["node114"] },
        { "Name": "node23", "ReportingPerson": ["node22"] },
        { "Name": "node24", "ReportingPerson": ["node22"] },
        { "Name": "node25", "ReportingPerson": ["node22"] },
        { "Name": "node26", "ReportingPerson": [] },
        { "Name": "node28", "ReportingPerson": [] },
        { "Name": "node31" },
        { "Name": "node114", "ReportingPerson": ["node11", "node21", "node31"]}
    ];
let items: DataManager = new DataManager(Data as JSON[], new Query().take(25));
// Initializes the diagram
let diagram: Diagram = new Diagram({
        width: '100%', height: '590px',
        layout: {
            type: 'ComplexHierarchicalTree',
            connectionPointOrigin: ConnectionPointOrigin.DifferentPoint,
            horizontalSpacing: 40, verticalSpacing: 40, horizontalAlignment: "Left", verticalAlignment: "Top",
            margin: { left: 0, right: 0, top: 0, bottom: 0 },
            orientation: 'TopToBottom'
        },
        getNodeDefaults: (obj: NodeModel) => {
            obj.width = 40; obj.height = 40;
            obj.shape = { type: 'Basic', shape: 'Rectangle' };
            obj.style = { fill: '#6BA5D7', strokeColor: 'none', strokeWidth: 2 };
            obj.borderWidth = 1;
            obj.backgroundColor = '#6BA5D7';
            return obj;
        },
        getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
            connector.type = 'Orthogonal';
            connector.cornerRadius = 7;
            connector.targetDecorator.height = 7;
            connector.targetDecorator.width = 7;
            connector.style = { strokeColor: '#6BA5D7', strokeWidth: 1 };
            connector.targetDecorator.style.fill  =  '#6BA5D7';
            connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
            return connector;
        },
        dataSourceSettings: { id: 'Name', parentId: 'ReportingPerson', dataSource: items },
        snapSettings: { constraints: 0 }
});
diagram.appendTo('#element');
diagram.fitToPage({ mode: 'Width' });



