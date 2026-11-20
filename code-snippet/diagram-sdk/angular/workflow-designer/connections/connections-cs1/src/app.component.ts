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
            height="600px"
            (created)="onCreated()"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    @ViewChild('workflow')
    public workflow?: WorkflowDesignerComponent;

    public workflowDefinition: WorkflowInput = {
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
