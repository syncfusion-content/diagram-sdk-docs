
var diagram = new ej.diagrams.Diagram({
    width: 700, height: 700, created: () => {
        var connectors = {
            id: 'connector1',
            type: 'Straight',
           segments: [{ type: "polyline" }]
        }
        diagram.drawingObject = connectors;
        diagram.tool = ej.diagrams.DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');

