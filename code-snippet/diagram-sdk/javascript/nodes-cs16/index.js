var linearGradient;
 linearGradient = {
               //Start point of linear gradient
	            x1: 0, y1: 0,
	          //End point of linear gradient
	           x2: 50, y2: 50,
	         //Sets an array of stop objects
                stops: [{ color: 'white', offset: 0 },
                { color: '#6BA5D7', offset: 100 }],
                type: 'Linear'
            };
var radialGradient;
 radialGradient = {
                //Center point of outer circle
                cx: 50, cy: 50, 
                //Center point of inner circle
                fx: 25, fy: 25,
                //Radius of a radial gradient
                 r: 50,
                  //Sets an array of stop objects
                stops: [{ color: 'white', offset: 0 },
                { color: '#6BA5D7', offset: 100 }],
                type: 'Radial'
            };


var node = {
     // Position of the node
    offsetX: 250,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {gradient: linearGradient, strokeColor: 'white' }
    // Text(label) added to the node
        };

var node2 = {
    // Position of the node
    offsetX: 400,
    offsetY: 250,
    // Size of the node
    width: 100,
    height: 100,
    style: {gradient: radialGradient, strokeColor: 'white' }
        };

// initialize Diagram component

var diagram = new ej.diagrams.Diagram({
    width: '100%', height: '600px', nodes: [node, node2]
    }, '#element');

