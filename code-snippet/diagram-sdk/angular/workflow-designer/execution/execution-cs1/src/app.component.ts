import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';
import type { WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

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
            (created)="onCreated()"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    @ViewChild('workflow')
    public workflow?: WorkflowDesignerComponent;

    public workflowDefinition: WorkflowInput = {
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

    public onCreated(): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        designer.importWorkflow(this.workflowDefinition).catch((error: WorkflowImportError) => {
            console.error(error.code, error.message);
        });
    }

    public runWorkflow(): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        designer.runExecution();
    }
}
