import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

const workflowDefinition = {
    schemaVersion: '1.1', id: 'validation-workflow', name: 'Validation',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'variable', stepType: 'SetVariable', name: 'Set value', position: { x: 380, y: 200 }, props: { variables: [{ variableName: 'amount', value: '100', valueType: 'Number' }] } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'variable' },
        { id: 'c2', sourceStepId: 'variable', targetStepId: 'end' }
    ]
};

function App() {
    const workflowInstance = React.useRef(null);

    React.useEffect(() => {
        workflowInstance.current?.importWorkflow(workflowDefinition).catch((error) => {
            console.error(error.code, error.message);
        });
    }, []);

    function validateButton() {
        const designer = workflowInstance.current;
        if (!designer) {
            return;
        }
        alert(designer.validateWorkflow().isValid ? 'Workflow is valid' : 'Workflow is invalid');
    }

    return (
        <>
            <button type="button" onClick={validateButton}>Validate workflow</button>
            <WorkflowDesignerComponent
                id="workflow"
                ref={workflowInstance}
                width="100%"
                height="600px"
            />
        </>
    );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
