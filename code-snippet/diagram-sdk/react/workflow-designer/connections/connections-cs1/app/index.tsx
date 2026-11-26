import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';
import type { WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

type WorkflowInput = Parameters<WorkflowDesignerComponent['importWorkflow']>[0];

const workflowDefinition: WorkflowInput = {
    schemaVersion: '1.1', id: 'condition-workflow', name: 'Condition branches',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 100, y: 220 } },
        { id: 'check', stepType: 'Condition', name: 'Check value', position: { x: 350, y: 220 }, props: { conditions: [{ field: '10', valueType: 'Number', operator: 'GreaterThan', value: '5' }] } },
        { id: 'yes', stepType: 'End', name: 'True', position: { x: 620, y: 120 } },
        { id: 'no', stepType: 'End', name: 'False', position: { x: 620, y: 320 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'check' },
        { id: 'c2', sourceStepId: 'check', sourcePort: 'true', targetStepId: 'yes' },
        { id: 'c3', sourceStepId: 'check', sourcePort: 'false', targetStepId: 'no' }
    ]
};

function App() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    React.useEffect(() => {
        workflowInstance.current?.importWorkflow(workflowDefinition).catch((error: WorkflowImportError) => {
            console.error(error.code, error.message);
        });
    }, []);

    return (
        <WorkflowDesignerComponent
            id="workflow"
            ref={workflowInstance}
            width="100%"
            height="600px"
        />
    );
}

ReactDOM.createRoot(document.getElementById('sample')!).render(<App />);
