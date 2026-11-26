import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

const workflowDefinition = {
    schemaVersion: '1.1', id: 'custom-workflow', name: 'Custom execution',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'custom', stepType: 'Custom', name: 'Create invoice', position: { x: 380, y: 200 }, props: { actionType: 'createInvoice', input: { orderId: 'SO-1001' } } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'custom' },
        { id: 'c2', sourceStepId: 'custom', targetStepId: 'end' }
    ]
};

function App() {
    const workflowInstance = React.useRef(null);

    React.useEffect(() => {
        workflowInstance.current?.importWorkflow(workflowDefinition).catch((error) => {
            console.error(error.code, error.message);
        });
    }, []);

    function onCustomExecutionRequested(args) {
        args.complete({ invoiceId: 'INV-1001' });
        alert('Custom execution completed!');
    }

    function runWorkflow() {
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
                customExecutionRequested={onCustomExecutionRequested}
            />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
