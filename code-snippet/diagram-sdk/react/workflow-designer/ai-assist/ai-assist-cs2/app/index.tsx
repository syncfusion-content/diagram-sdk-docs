import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    async function generateWorkflow() {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }

        await designer.generateWorkflow('Every morning, fetch open tickets and email a summary to the team');
        await designer.updateWorkflowFromPrompt('Add an approval step before the email is sent');
    }

    return (
        <>
            <WorkflowDesignerComponent id="workflow" ref={workflowInstance} height="500px" aiAssistSettings={{ enabled: true }} />
            <button onClick={generateWorkflow}>Generate workflow</button>
        </>
    );
}
