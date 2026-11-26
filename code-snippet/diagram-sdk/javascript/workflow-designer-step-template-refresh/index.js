var selectedStepId = '';
var workflowDefinition = {
    schemaVersion: '1.1', id: 'template-workflow', name: 'Step template',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 100, y: 200 } },
        { id: 'wait', stepType: 'Delay', name: 'Wait', position: { x: 380, y: 200 }, props: { delayType: 'Fixed', duration: 1, timeUnit: 'Seconds' } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 660, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'wait' },
        { id: 'c2', sourceStepId: 'wait', targetStepId: 'end' }
    ]
};
function stepTemplate(args) {
    var card = document.createElement('div');
    card.className = 'step-card' + (args.step.id === selectedStepId ? ' is-selected' : '');
    card.textContent = args.step.name;
    return card;
}
function applyStepDefaults(step) {
    step.size = { width: 220, height: 96 };
    return step;
}
function onSelectionChanged(args) {
    var previous = selectedStepId;
    selectedStepId = args.selectedItem && args.selectedItem.stepType ? args.selectedItem.id : '';
    if (previous) {
        designer.refreshWorkflowStepTemplate(previous);
    }
    if (selectedStepId) {
        designer.refreshWorkflowStepTemplate(selectedStepId);
    }
}
var designer = new ej.workflowdesigner.WorkflowDesigner({
    width: '100%',
    height: '600px',
    workflowStepTemplate: stepTemplate,
    stepDefaults: applyStepDefaults,
    selectionChanged: onSelectionChanged
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch(function (error) {
    console.error(error.code, error.message);
});
