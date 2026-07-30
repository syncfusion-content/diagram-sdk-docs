var diagram = new ej.diagrams.Diagram({
    width: 700, height: 700, created: () => {
        var connector =  { id: 'connector1', type: 'Freehand'};
        diagram.drawingObject = connector;
        diagram.tool = ej.diagrams.DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');

