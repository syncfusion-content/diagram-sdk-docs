var diagram = new ej.diagrams.Diagram({
    width: 700, height: 700, created: () => {
        var node = {
            id: "Path",
            style: { fill: "#fbe172" },
            annotations: [{
                content: "Path"
            }],
            shape: {
                type:'Path',
                data: 'M13.560 67.524 L 21.941 41.731 L 0.000 25.790 L 27.120 25.790 L 35.501 0.000 L 43.882 25.790 L 71.000 25.790 L 49.061 41.731 L 57.441 67.524 L 35.501 51.583 z'
            }
        };
        diagram.drawingObject = node;
        diagram.tool = ej.diagrams.DiagramTools.DrawOnce;
        diagram.dataBind();
    }
});
diagram.appendTo('#element');

