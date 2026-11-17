

import * as React from "react";
import * as ReactDOM from "react-dom";
import { DiagramComponent } from "@syncfusion/ej2-react-diagrams";

function App() {
    let diagramInstance;
    // Change the ruler measurement unit at runtime.
    const onUnitChange = (args) => {
        diagramInstance.rulerSettings.measurementUnit = args.target.value;
        diagramInstance.dataBind();
    };
    return (
        <div>
            <div style={{ marginBottom: '10px' }}>
                <label htmlFor="unit">Select ruler unit: </label>
                <select id="unit" defaultValue="Inch" onChange={onUnitChange}>
                    <option value="Pixel">Pixel</option>
                    <option value="Point">Point</option>
                    <option value="Inch">Inch</option>
                    <option value="Millimeter">Millimeter</option>
                    <option value="Centimeter">Centimeter</option>
                </select>
            </div>
            <DiagramComponent id="container" ref={diagram => (diagramInstance = diagram)} width={'100%'} height={'600px'} rulerSettings={{ showRulers: true, measurementUnit: 'Inch' }}></DiagramComponent>
        </div>);
}
const root = ReactDOM.createRoot(document.getElementById('diagram'));
root.render(<App />);


