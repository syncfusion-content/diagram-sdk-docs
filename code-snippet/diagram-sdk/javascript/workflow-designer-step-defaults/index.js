var workflowDefinition = {
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
function applyStepDefaults(step) {
    step.size = { width: 180, height: 76 };
    if (step.stepType.indexOf('Trigger') !== -1) {
        step.appearance = { fill: '#ebf3fc', strokeColor: '#0f6cbd', strokeWidth: 2 };
    }
    else if (step.stepType === 'Condition' || step.stepType === 'Switch') {
        step.appearance = { fill: '#fff9f5', strokeColor: '#ca5010', strokeWidth: 2 };
    }
    return step;
}
var designer = new ej.workflowdesigner.WorkflowDesigner({
    width: '100%',
    height: '600px',
    stepDefaults: applyStepDefaults
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch(function (error) {
    console.error(error.code, error.message);
});
