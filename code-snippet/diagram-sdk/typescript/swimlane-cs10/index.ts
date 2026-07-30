


import { Diagram, NodeModel } from '@syncfusion/ej2-diagrams';
let node: NodeModel = {  
   shape: {
                type: 'SwimLane',
                orientation: 'Horizontal',
                //Intialize header to swimlane
                header: {
                    annotation: { content: 'ONLINE PURCHASE STATUS' },
                    height: 50, style: { fontSize: 11 },
                },
                 lanes: [
                    {
                        id: 'stackCanvas1',
                        height: 100,
                        header: {
                            annotation: { content: 'CUSTOMER' }, width: 50,
                            style: { fontSize: 11 }
                        },
                        // Set the children of lane
                          children: [
                            {
                            id: 'node1',
                            annotations: [
                                {
                                    content: 'Consumer learns \n of product',
                                    style: { fontSize: 11 }
                                }
                            ],
                            margin: { left: 60, top: 30 },
                            height: 40, width: 100,
                        }, {
                            id: 'node2',
                            shape: { type: 'Flow', shape: 'Decision' },
                            annotations: [
                              {
                                content: 'Does \n Consumer want \nthe product',
                                style: { fontSize: 11 }
                              }
                            ],
                            margin: { left: 200, top: 20 },
                            height: 60, width: 120,
                          },
                        ],
                    },

                ],
                phases: [
                    {
                        id: 'phase1', offset: 170,
                        header: { annotation: { content: 'Phase' } }
                    },
                    ],
                phaseSize: 20,
            },
           offsetX: 300, offsetY: 200,
         height: 200,
         width: 350  
};
// initialize Diagram component
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '600px',
    // Add node
    nodes: [node]
});
// render initialized Diagram
diagram.appendTo('#element');



