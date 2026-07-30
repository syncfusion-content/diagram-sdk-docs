


import {
    Diagram, ConnectorModel, Node, Animation, Container, TextElement, StackPanel, SelectorConstraints, ImageElement,
    DataBinding, HierarchicalTree, LayoutAnimation
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(DataBinding, HierarchicalTree);
import {
    DataManager,
    Query
} from '@syncfusion/ej2-data';
import {
    NodeModel,
    Orientation,
    VerticalAlignment,
    PathElement,
    HorizontalAlignment,
    DiagramNativeElement,
    IconShapeModel
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(LayoutAnimation);
//Initializes data source
let data: object[] = [
    {
        'Id': 'parent1',
        'Name': 'Maria ',
        'Designation': 'Managing Director',
        'RatingColor': '#C34444'
    },
    {
        'Id': 'parent',
        'Name': ' sam',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent1',
        'RatingColor': '#C34444'
    },
    {
        'Id': 'parent3',
        'Name': ' sam geo',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent1',
        'RatingColor': '#C34444'
    },
    {
        'Id': '80',
        'Name': ' david',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent3',
        'RatingColor': '#C34444'
    },
    {
        'Id': '82',
        'Name': ' pirlo',
        'Designation': 'Managing Director',
        'ReportingPerson': 'parent',
        'RatingColor': '#C34444'
    }
];
let items: DataManager = new DataManager(data as JSON[], new Query().take(7));
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '590px',
    selectedItems: {
        constraints: ~SelectorConstraints.ResizeAll
    },
    snapSettings: {
        constraints: 0
    },
    layout: {
        // set enableAnimation as true
        enableAnimation: true,
        type: 'OrganizationalChart',
        margin: {
            top: 20
        },// define the getLayoutInfo
        getLayoutInfo: (node: Node, tree: TreeInfo) => {
            if (!tree.hasSubTree) {
                tree.orientation = 'vertical';
                tree.type = 'alternate';
            }
        }
    },// define the dataSourceSettings
    dataSourceSettings: {
        id: 'Id',
        parentId: 'ReportingPerson',
        dataManager: items
    },
    // define the node defaults
    getNodeDefaults: (obj: Node, diagram: Diagram) => {
        obj.expandIcon = {
            height: 15,
            width: 15,
            shape: "Plus",
            fill: 'lightgray',
            offset: {
                x: .5,
                y: .85
            }
        }
        obj.collapseIcon.offset = {
            x: .5,
            y: .85
        }
        obj.collapseIcon.height = 15;
        obj.collapseIcon.width = 15;
        obj.collapseIcon.shape = "Minus";
        obj.height = 50;
        obj.borderColor = 'white';
        obj.backgroundColor = '#6BA5D7';
        obj.borderWidth = 1;
        obj.style = {
            fill: 'transparent',
            strokeWidth: 2
        };
        return obj;
    },// define the connector defaults
    getConnectorDefaults: (connector: ConnectorModel, diagram: Diagram) => {
        connector.style = {
            strokeColor: '#6BA5D7',
            strokeWidth: 2
        };
        connector.targetDecorator.style.fill  =  '#6BA5D7';
        connector.targetDecorator.style.strokeColor  =  '#6BA5D7';
        connector.targetDecorator.shape = 'None';
        connector.type = 'Orthogonal';
        return connector;
    }
});
diagram.appendTo('#element');


