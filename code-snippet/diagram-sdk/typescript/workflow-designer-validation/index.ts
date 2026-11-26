import { WorkflowDesigner, WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

type WorkflowInput = Parameters<WorkflowDesigner['importWorkflow']>[0];

const workflowDefinition: WorkflowInput = {
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

function validateButton(): void {
    alert(designer.validateWorkflow().isValid ? 'Workflow is valid' : 'Workflow is invalid');
}

const designer: WorkflowDesigner = new WorkflowDesigner({
    width: '100%',
    height: '600px'
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch((error: WorkflowImportError) => {
    console.error(error.code, error.message);
});
document.getElementById('validateButton')!.addEventListener('click', validateButton);
