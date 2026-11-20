import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';
import type { WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

type WorkflowInput = Parameters<WorkflowDesignerComponent['importWorkflow']>[0];

@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            width="100%"
            height="640px"
            (created)="onCreated()"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    @ViewChild('workflow')
    public workflow?: WorkflowDesignerComponent;

    public paidExpression: string = '{' + '{$.previousStep.response.body.paid}' + '}';

    public workflowDefinition: WorkflowInput = {
        schemaVersion: '1.1',
        id: 'order-check',
        name: 'Order check',
        workflowSteps: [
            { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 100, y: 200 } },
            {
                id: 'getOrder', stepType: 'ApiRequest', name: 'Get order', position: { x: 340, y: 200 },
                props: { method: 'GET', url: 'https://example.com/api/orders/1' }
            },
            {
                id: 'isPaid', stepType: 'Condition', name: 'Is paid?', position: { x: 580, y: 200 },
                props: {
                    conditions: [{ field: paidExpression, valueType: 'Boolean', operator: 'IsTrue' }]
                }
            },
            { id: 'done', stepType: 'End', name: 'Done', position: { x: 820, y: 120 } },
            {
                id: 'remind', stepType: 'Notify', name: 'Send reminder', position: { x: 820, y: 280 },
                props: { channel: 'Email', to: 'customer@example.com', message: 'Your order is awaiting payment.' }
            }
        ],
        workflowConnections: [
            { id: 'c1', sourceStepId: 'start', targetStepId: 'getOrder' },
            { id: 'c2', sourceStepId: 'getOrder', targetStepId: 'isPaid' },
            { id: 'c3', sourceStepId: 'isPaid', sourcePort: 'true', targetStepId: 'done' },
            { id: 'c4', sourceStepId: 'isPaid', sourcePort: 'false', targetStepId: 'remind' }
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
}
