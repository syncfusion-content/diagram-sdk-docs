ej.diagrams.Diagram.Inject(ej.diagrams.DataBinding, ej.diagrams.HierarchicalTree);
var data = [
        {
            "Id": "parent", "Name": "Maria Anders", "Designation": "Managing Director",
            "ImageUrl": "../content/images/radialtree/Clayton.png", "IsExpand": "true", "RatingColor": "#C34444"
        },
        {
            "Id": 1, "Name": "Ana Trujillo", "Designation": "Project Manager",
            "ImageUrl": "../content/images/radialtree/Thomas.PNG", "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": "parent"
        },
        {
            "Id": 2, "Name": "Lino Rodri", "Designation": "Project Manager",
            "ImageUrl": "../content/images/radialtree/Robin.PNG", "IsExpand": "true",
            "RatingColor": "#68C2DE", "ReportingPerson":  "parent"
        },
        {
            "Id": 3, "Name": "Philip Cramer", "Designation": "Project Manager",
            "ImageUrl": "../content/images/radialtree/Robin.PNG", "IsExpand": "true",
            "RatingColor": "#68C2DE", "ReportingPerson":  "parent"
        },
        {
            "Id": 4, "Name": "Pedro Afonso", "Designation": "Project Manager",
            "ImageUrl": "../content/images/radialtree/Paul.png", "IsExpand": "true",
            "RatingColor": "#68C2DE", "ReportingPerson":  1
        },
        {
            "Id": 5, "Name": "Anto Moreno", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/image53.png", "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 1
        },
        {
            "Id": 6, "Name": "Elizabeth Roel", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Maria.png", "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 2
        },
        {
            "Id": 7, "Name": "Aria Cruz", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Jenny.png", "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 3  
        },
        {
            "Id": 8, "Name": "Eduardo Roel", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/image55.png", "IsExpand": "true",
            "RatingColor": "#93B85A", "ReportingPerson": 1
        },
        {
            "Id": 9, "Name": "Howard Snyd", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Jenny.png", "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": 1
        },
        {
            "Id": 10, "Name": "Daniel Tonini", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Thomas.png", "IsExpand": "true",
            "RatingColor": "#93B85A", "ReportingPerson": 1
        },
        {
            "Id": 11, "Name": "Nardo Batista", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Maria.PNG", "IsExpand": "true",
            "RatingColor": "#68C2DE", "ReportingPerson": 1
        },
        {
            "Id": 12, "Name": "Michael Holz", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Thomas.PNG", "IsExpand": "true",
            "RatingColor": "#68C2DE", "ReportingPerson": 1
        },
        {
            "Id": 13, "Name": "Kloss Perrier", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Clayton.png", "IsExpand": "None",
            "RatingColor": "#93B85A", "ReportingPerson": 1
        },
        {
            "Id": 14, "Name": "Liz Nixon", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Jenny.png", "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": 1
        },
        {
            "Id": 15, "Name": "Paul Henriot", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Thomas.png", "IsExpand": "false",
            "RatingColor": "#D46E89", "ReportingPerson": 1
        },
        {
            "Id": 16, "Name": "Paula Parente", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/John.png", "IsExpand": "None",
            "RatingColor": "#EBB92E", "ReportingPerson": 1
        },
        {
            "Id": 17, "Name": "Matti Kenna", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Jenny.png", "IsExpand": "None",
            "RatingColor": "#93B85A", "ReportingPerson": 3
        },
        {
            "Id": 18, "Name": "Laura Callahan", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Robin.png", "IsExpand": "false",
            "RatingColor": "#D46E89", "ReportingPerson": 3
        },
        {
            "Id": 19, "Name": "Simon Roel", "Designation": "Project Lead",
            "ImageUrl": "../content/images/radialtree/Clayton.png", "IsExpand": "true",
            "RatingColor": "#93B85A", "ReportingPerson": 3
        },
        {
            "Id": 20, "Name": "Thomas Hardy", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image57.png", "IsExpand": "false",
            "RatingColor": "#68C2DE", "ReportingPerson": 3
        },
        {
            "Id": 21, "Name": "Martín Kloss", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/Robin.png", "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 3
        },
        {
            "Id": 22, "Name": "Maria Larsson", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image51.png", "IsExpand": "false",
            "RatingColor": "#EBB92E", "ReportingPerson": 3
        },
        {
            "Id": 23, "Name": "Diego Roel", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image55.png", "IsExpand": "false",
            "RatingColor": "#D46E89", "ReportingPerson": 3
        },
        {
            "Id": 24, "Name": "José Pedro ", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/Thomas.png", "IsExpand": "true",
            "RatingColor": "#D46E89", "ReportingPerson": 3
        },
        {
            "Id": 25, "Name": "Manu Pereira", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image56.png", "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 3
        },
        {
            "Id": 26, "Name": "Annette Roel", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image55.png", "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 2
        },
        {
            "Id": 27, "Name": "Catherine Kaff", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image57.png", "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 2
        },
        {
            "Id": 28, "Name": "Lúcia Carvalho", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/Robin.PNG", "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 2
        },
        {
            "Id": 29, "Name": "Alej Camino", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/Thomas.PNG", "IsExpand": "false",
            "RatingColor": "#93B85A", "ReportingPerson": 2
        },
        {
            "Id": 30, "Name": "Liu Wong", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image57.png", "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 2
        },
        {
            "Id": 31, "Name": "Karin Josephs", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image55.png", "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 2
        },
        {
            "Id": 32, "Name": "Ruby Anabela ", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/Thomas.png", "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 2
        },
        {
            "Id": 33, "Name": "Pirkko King", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/Robin.png", "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 2
        },
        {
            "Id": 34, "Name": "Karl Jablonski", "Designation": "Senior S/w Engg",
            "ImageUrl": "../content/images/radialtree/image53.png", "IsExpand": "None",
            "RatingColor": "#D46E89", "ReportingPerson": 2
        },
        
    ];

var items = new ej.data.DataManager(data , new ej.data.Query().take(5));

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '590px',
    snapSettings: { constraints: 0 },
    layout: {
        type: 'RadialTree', horizontalSpacing: 30, verticalSpacing: 30, root: 'parent'
    },
    dataSourceSettings: {
        id: 'Id', parentId: 'ReportingPerson', dataManager: items
    },

    getNodeDefaults: (obj, diagram) => {
        obj.height = 15;
        obj.width = 15;
        obj.backgroundColor = 'lightgrey';
        obj.style = { fill: 'transparent', strokeWidth: 2 };
        return obj;
    }, getConnectorDefaults: (connector, diagram) => {
        connector.targetDecorator.shape = 'None';
        connector.type = 'Straight';
        return connector;
    },
});
diagram.appendTo('#element');

