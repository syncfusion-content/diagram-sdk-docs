
let nodes = [

    {
      // Position of the node
      offsetX: 350,
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
            collapsed: true,
            type: 'Transaction',
            //Sets transaction
            transaction: {
              success: {
                id: 'success',
                event: 'Start',
                trigger: 'None',
              },
              failure: {
                id: 'failure',
                event: 'ThrowingIntermediate',
                trigger: 'Error',
              },
              cancel: {
                id: 'cancel',
                event: 'End',
                trigger: 'Cancel',
              },
            },
          },
        },
      },
    },
  ];

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: nodes
    }, '#element');


