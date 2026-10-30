import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const designer = workflowInstance.current;
        const file = event.currentTarget.files?.[0];
        if (designer && file) {
            designer.importWorkflow(file).catch((error) => {
                console.error(error);
            });
        }
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" />
            <input type="file" onChange={handleFileChange} />
        </>
    );
}
