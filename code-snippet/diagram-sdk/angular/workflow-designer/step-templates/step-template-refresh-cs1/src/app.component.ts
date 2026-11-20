import { Component, ViewChild } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';
import type { WorkflowStepTemplateArgs, WorkflowStep, WorkflowSelectionChangedEventArgs, WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

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
            [workflowStepTemplate]="stepTemplate"
            [stepDefaults]="applyStepDefaults"
            (selectionChanged)="onSelectionChanged($event)"
            (created)="onCreated()"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    @ViewChild('workflow')
    public workflow?: WorkflowDesignerComponent;

    public selectedStepId: string = '';

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
        const card: HTMLElement = document.createElement('div');
        card.className = 'step-card' + (args.step.id === this.selectedStepId ? ' is-selected' : '');
        card.textContent = args.step.name;
        return card;
    };

    public applyStepDefaults = (step: WorkflowStep): WorkflowStep => {
        step.size = { width: 220, height: 96 };
        return step;
    };

    public onSelectionChanged(args: WorkflowSelectionChangedEventArgs): void {
        const designer = this.workflow;
        if (!designer) {
            return;
        }

        const previous: string = this.selectedStepId;
        this.selectedStepId = args.selectedItem && (args.selectedItem as { stepType?: string }).stepType ? args.selectedItem.id : '';
        if (previous) { designer.refreshWorkflowStepTemplate(previous); }
        if (this.selectedStepId) { designer.refreshWorkflowStepTemplate(this.selectedStepId); }
    }
}
