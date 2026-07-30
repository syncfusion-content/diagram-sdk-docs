import {
  Diagram,
  BpmnDiagrams,
  randomId,
  Node,
} from '@syncfusion/ej2-diagrams';
Diagram.Inject(BpmnDiagrams);
let diagram: Diagram = new Diagram({
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

(document.getElementById('addTextAnnotationNode') as HTMLInputElement).onclick = () => {
  let textAnnotation = {
    id: 'textAnnotation' + randomId(),
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
  diagram.add(textAnnotation as Node);
};

(document.getElementById('addTextAnnotationAlone') as HTMLInputElement).onclick = () => {
  let textAnnotation = {
    id: 'textAnnotationAlone' + randomId(),
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
  diagram.add(textAnnotation as Node);
};

(document.getElementById('addTextAnnotation') as HTMLInputElement).onclick = () => {
  let event = diagram.nodes[0];
  let textAnnotation = {
    name: 'newAnnotation' + randomId(),
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
