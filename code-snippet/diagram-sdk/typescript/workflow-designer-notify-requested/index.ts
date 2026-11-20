import { WorkflowDesigner, WorkflowNotifyRequestedEventArgs, WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

type WorkflowInput = Parameters<WorkflowDesigner['importWorkflow']>[0];

const workflowDefinition: WorkflowInput = {
    schemaVersion: '1.1', id: 'notify-workflow', name: 'Notify customer',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'notify', stepType: 'Notify', name: 'Notify customer', position: { x: 380, y: 200 }, props: { channel: 'Email', to: 'customer@example.com', subject: 'Order update', message: 'Your order has shipped.' } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'notify' },
        { id: 'c2', sourceStepId: 'notify', targetStepId: 'end' }
    ]
};

function onNotifyRequested(args: WorkflowNotifyRequestedEventArgs): void {
    // '/api/notify' stands for your application's notification endpoint.
    fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stepId: args.step.id, notification: args.notification }),
        signal: args.signal
    })
        .then((response: Response) => {
            if (!response.ok) {
                // fetch resolves for HTTP 4xx and 5xx responses, so fail the step explicitly.
                args.fail(new Error('Notification failed with HTTP ' + response.status));
                return;
            }
            args.complete({ sent: true });
        })
        .catch((error: Error) => args.fail(error));
}

function runWorkflow(): void {
    designer.runExecution();
}

const designer: WorkflowDesigner = new WorkflowDesigner({
    width: '100%',
    height: '600px',
    notifyRequested: onNotifyRequested
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch((error: WorkflowImportError) => {
    console.error(error.code, error.message);
});
document.getElementById('runWorkflow')!.addEventListener('click', runWorkflow);
