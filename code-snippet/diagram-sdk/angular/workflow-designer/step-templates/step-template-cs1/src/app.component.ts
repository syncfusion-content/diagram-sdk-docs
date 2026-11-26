import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';
import type { WorkflowStepTemplateArgs, WorkflowStep, WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

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
            [workflowStepTemplate]="stepTemplate"
            [stepDefaults]="applyStepDefaults"
            (created)="onCreated()"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    @ViewChild('workflow')
    public workflow?: WorkflowDesignerComponent;

    public workflowDefinition: WorkflowInput = {
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

    public onCreated(): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        designer.importWorkflow(this.workflowDefinition).catch((error: WorkflowImportError) => {
            console.error(error.code, error.message);
        });
    }

    public stepTemplate = (args: WorkflowStepTemplateArgs): HTMLElement => {
        const statusText: { [state: string]: string } = {
            idle: 'Not run yet', running: 'Running', completed: 'Completed', failed: 'Failed'
        };
        const card: HTMLElement = document.createElement('div');
        card.className = 'step-card step-' + args.state;
        const title: HTMLElement = document.createElement('strong');
        title.textContent = args.step.name;      // textContent keeps user-entered names safe
        const type: HTMLElement = document.createElement('span');
        type.textContent = args.step.stepType;
        const status: HTMLElement = document.createElement('small');
        status.textContent = statusText[args.state];
        card.append(title, type, status);
        return card;
    };

    public applyStepDefaults = (step: WorkflowStep): WorkflowStep => {
        // Give every step room for the template content.
        step.size = { width: 220, height: 96 };
        return step;
    };

    public runWorkflow(): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        designer.runExecution();
    }
}
