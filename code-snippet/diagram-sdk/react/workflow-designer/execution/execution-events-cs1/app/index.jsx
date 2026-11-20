import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

const workflowDefinition = {
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
    const workflowInstance = React.useRef(null);

    React.useEffect(() => {
        workflowInstance.current?.importWorkflow(workflowDefinition).catch((error) => {
            console.error(error.code, error.message);
        });
    }, []);

    function runWorkflow() {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }
        designer.runExecution();
    }

    function onExecutionStepFailed(args) {
        console.warn(args.step.name, args.error.code, args.error.message);
    }

    function onExecutionCompleted(args) {
        console.log('Run finished:', args.result.status);
        if (args.result.error) {
            console.error(args.result.error.type, args.result.error.message);
        }
    }

    return (
        <>
            <button type="button" onClick={runWorkflow}>Run workflow</button>
            <WorkflowDesignerComponent
                id="workflow"
                ref={workflowInstance}
                width="100%"
                height="600px"
                executionStepFailed={onExecutionStepFailed}
                executionCompleted={onExecutionCompleted}
            />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
