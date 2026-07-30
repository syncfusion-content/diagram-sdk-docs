var diagram = new  ej.diagrams.Diagram({
    width: 700, height: 700, created: () => {
        var node = {
                   shape: {
                type:'Text',
            }
        };
        diagram.drawingObject = node;
        diagram.tool = ej.diagrams.DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');


