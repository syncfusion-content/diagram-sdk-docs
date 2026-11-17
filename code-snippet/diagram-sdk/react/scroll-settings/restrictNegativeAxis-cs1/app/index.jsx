import * as React from "react";
import * as ReactDOM from "react-dom";
import {
    DiagramComponent,
    DiagramTools
} from "@syncfusion/ej2-react-diagrams";
let nodes = [
    {
        id: 'negativeNode',
        offsetX: -150, offsetY: -100,
        width: 140, height: 60,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Negative Region Node' }]
    },
    {
        id: 'positiveNode',
        offsetX: 250, offsetY: 150,
        width: 140, height: 60,
        style: { fill: '#6BA5D7', strokeColor: 'white' },
        annotations: [{ content: 'Positive Region Node' }]
    }
];
let connectors = [
    { id: 'connector1', sourceID: 'negativeNode', targetID: 'positiveNode' }
];
function App() {
    let diagramInstance;
    // Toggles restrictNegativeAxis at runtime
    const onChange = (args) => {
        diagramInstance.scrollSettings.restrictNegativeAxis = args.target.checked;
        diagramInstance.dataBind();
    };
    return (
        <div>
            <div style={{ paddingBottom: '10px' }}>
                <input type="checkbox" id="restrictNegativeAxis" onChange={onChange} />
                <label htmlFor="restrictNegativeAxis">Restrict Negative Axis</label>
            </div>
            <DiagramComponent
                id="container"
                ref={(diagram) => (diagramInstance = diagram)}
                width={'100%'}
                height={'600px'}
                nodes={nodes}
                connectors={connectors}
                tool={DiagramTools.ZoomPan}
                rulerSettings={{ showRulers: true }}
                scrollSettings={{ restrictNegativeAxis: false }}
            />
        </div>
    );
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);
