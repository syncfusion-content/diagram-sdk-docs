var workflowDefinition = {
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
function runWorkflow() {
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
var designer = new ej.workflowdesigner.WorkflowDesigner({
    width: '100%',
    height: '600px',
    executionStepFailed: onExecutionStepFailed,
    executionCompleted: onExecutionCompleted
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch(function (error) {
    console.error(error.code, error.message);
});
document.getElementById('runWorkflow').addEventListener('click', runWorkflow);
