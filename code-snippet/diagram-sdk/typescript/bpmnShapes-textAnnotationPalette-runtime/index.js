var diagram = new ej.diagrams.Diagram({
  width: '100%',
  height: '600px',
  nodes: [
    {
      id: 'event',
      offsetX: 200,
      offsetY: 200,
      width: 70,
      height: 70,
      shape: { type: 'Bpmn', shape: 'Event' },
      style: { fill: '#64Abbd' },
    },
  ],
});
diagram.appendTo('#element');

document.getElementById('addTextAnnotationNode').onclick = () => {
  let textAnnotation = {
    id: 'textAnnotation' + ej.diagrams.randomId(),
    offsetX: 300,
    offsetY: 100,
    width: 100,
    height: 40,
    annotations: [{ content: 'Text Annotation' }],
    shape: {
      type: 'Bpmn',
      shape: 'TextAnnotation',
      textAnnotation: {
        //Parent node of text annotation
        textAnnotationTarget: 'event',
        textAnnotationDirection: 'Auto',
      },
    },
  };
  /**
   * parameter 1 - TextAnnotation to be added to the event node
   */
  diagram.add(textAnnotation);
};

document.getElementById('addTextAnnotationAlone').onclick = () => {
  let textAnnotation = {
    id: 'textAnnotationAlone' + ej.diagrams.randomId(),
    offsetX: 300,
    offsetY: 300,
    width: 100,
    height: 70,
    annotations: [{ content: 'Text Annotation' }],
    shape: {
      type: 'Bpmn',
      shape: 'TextAnnotation',
    },
  };
  /**
   * parameter 1 - TextAnnotation to be added to diagram without parent
   */
  diagram.add(textAnnotation);
};

document.getElementById('addTextAnnotation').onclick = () => {
  let event = diagram.nodes[0];
  let textAnnotation = {
    name: 'newAnnotation' + ej.diagrams.randomId(),
    angle: 0,
    length: 100,
    width: 100,
    height: 40,
    text: 'New Annotation',
  };
  /**
   * parameter 1 - TextAnnotation to be added
   * parameter 2 - The parent node where the text annotation will be added as a child.
   */
  diagram.addTextAnnotation(textAnnotation, event);
};
