var node = {
    shape: {
               type: 'SwimLane',
               orientation: 'Horizontal',
               // customize the swimlane header
                header: {
               annotation: { content: 'SALES PROCESS FLOW CHART', },
               height: 70, style: { fontSize: 11 }, style: { fill: 'pink' },
           },
               lanes: [
                   {
                       id: 'stackCanvas1',
                       height: 100,
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

var diagram = new ej.diagrams.Diagram({
   width: '100%', height: '600px', nodes: [node]
   });
   diagram.appendTo('#element');

   document.getElementById('updateHeaderStyle').onclick =
   () => {
     diagram.nodes[0].shape.header.style.fill = 'red';
     diagram.dataBind();
   };

