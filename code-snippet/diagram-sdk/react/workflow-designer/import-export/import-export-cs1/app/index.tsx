import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function exportWorkflow() {
        const designer = workflowInstance.current;
        if (designer) {
            const json = designer.exportWorkflow();
            const copy = designer.getWorkflow();
            designer.saveWorkflow('order-check.json');
            console.log(json, copy);
        }
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />
            <button onClick={exportWorkflow}>Export workflow</button>
        </>
    );
}
