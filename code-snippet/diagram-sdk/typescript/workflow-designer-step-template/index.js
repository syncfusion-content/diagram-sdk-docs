"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_workflow_designer_1 = require("@syncfusion/ej2-workflow-designer");
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
    var statusText = {
        idle: 'Not run yet', running: 'Running', completed: 'Completed', failed: 'Failed'
    };
    var card = document.createElement('div');
    card.className = 'step-card step-' + args.state;
    var title = document.createElement('strong');
    title.textContent = args.step.name; // textContent keeps user-entered names safe
    var type = document.createElement('span');
    type.textContent = args.step.stepType;
    var status = document.createElement('small');
    status.textContent = statusText[args.state];
    card.append(title, type, status);
    return card;
}
function applyStepDefaults(step) {
    // Give every step room for the template content.
    step.size = { width: 220, height: 96 };
    return step;
}
function runWorkflow() {
    designer.runExecution();
}
var designer = new ej2_workflow_designer_1.WorkflowDesigner({
    width: '100%',
    height: '600px',
    workflowStepTemplate: stepTemplate,
    stepDefaults: applyStepDefaults
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch(function (error) {
    console.error(error.code, error.message);
});
document.getElementById('runWorkflow').addEventListener('click', runWorkflow);
