var nodes = [
    {
      // Position of the node
      offsetX: 250,
      offsetY: 250,
      // Size of the node
      width: 100,
      height: 100,
      //Sets type as Bpmn and shape as activity
      shape: {
        type: 'Bpmn',
        shape: 'Activity',
        //Sets activity as SubProcess
        activity: {
          activity: 'SubProcess',
          //Sets the collapsed as true and type as Event
          subProcess: {
            collapsed: false,
            type: 'Event',
            //Sets event as Start and trigger as Message
            events: [
              {
                id: 'event',
                event: 'Start',
                trigger: 'Message',
                offset: { x: 0.5, y: 0 },
              },
            ],
          },
        },
      },
    }];
// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
    }, '#element');

