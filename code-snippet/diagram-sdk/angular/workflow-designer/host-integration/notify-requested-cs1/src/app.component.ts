import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';
import type { WorkflowNotifyRequestedEventArgs, WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

type WorkflowInput = Parameters<WorkflowDesignerComponent['importWorkflow']>[0];

@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <button type="button" (click)="runWorkflow()">Run workflow</button>
        <ejs-workflowdesigner #workflow
            id="workflow"
            width="100%"
            height="600px"
            (notifyRequested)="onNotifyRequested($event)"
            (created)="onCreated()"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    @ViewChild('workflow')
    public workflow?: WorkflowDesignerComponent;

    public workflowDefinition: WorkflowInput = {
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

    public onCreated(): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        designer.importWorkflow(this.workflowDefinition).catch((error: WorkflowImportError) => {
            console.error(error.code, error.message);
        });
    }

    public onNotifyRequested(args: WorkflowNotifyRequestedEventArgs): void {
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

    public runWorkflow(): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        designer.runExecution();
    }
}
