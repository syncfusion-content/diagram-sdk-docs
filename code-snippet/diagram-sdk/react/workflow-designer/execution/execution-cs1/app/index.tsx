import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';
import type { WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

type WorkflowInput = Parameters<WorkflowDesignerComponent['importWorkflow']>[0];

const workflowDefinition: WorkflowInput = {
    schemaVersion: '1.1', id: 'execution-workflow', name: 'Run workflow',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'delay', stepType: 'Delay', name: 'Wait', position: { x: 380, y: 200 }, props: { delayType: 'Fixed', duration: 1, timeUnit: 'Seconds' } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'delay' },
        { id: 'c2', sourceStepId: 'delay', targetStepId: 'end' }
    ]
};

function App() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    React.useEffect(() => {
        workflowInstance.current?.importWorkflow(workflowDefinition).catch((error: WorkflowImportError) => {
            console.error(error.code, error.message);
        });
    }, []);

    function runWorkflow(): void {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }

        designer.runExecution();
    }

    return (
        <>
            <button type="button" onClick={runWorkflow}>Run workflow</button>
            <WorkflowDesignerComponent
                id="workflow"
                ref={workflowInstance}
                width="100%"
                height="600px"
            />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('sample')!).render(<App />);
