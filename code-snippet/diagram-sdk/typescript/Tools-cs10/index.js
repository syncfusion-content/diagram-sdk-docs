
var diagram = new ej.diagrams.Diagram({
    width: 700, height: 700, created: () => {
        var drawingshape = { type: 'Basic', shape: 'Rectangle' };
        var node = {
            shape: drawingshape
        };
        diagram.drawingObject = node;
        diagram.tool = ej.diagrams.DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');



