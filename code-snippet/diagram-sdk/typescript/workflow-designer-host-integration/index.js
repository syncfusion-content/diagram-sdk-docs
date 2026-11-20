"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ej2_workflow_designer_1 = require("@syncfusion/ej2-workflow-designer");
var workflowDefinition = {
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
function onCustomExecutionRequested(args) {
    args.complete({ invoiceId: 'INV-1001' });
    alert('Custom execution completed!');
}
function runWorkflow() {
    designer.runExecution();
}
var designer = new ej2_workflow_designer_1.WorkflowDesigner({
    width: '100%',
    height: '600px',
    customExecutionRequested: onCustomExecutionRequested
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch(function (error) {
    console.error(error.code, error.message);
});
document.getElementById('runWorkflow').addEventListener('click', runWorkflow);
