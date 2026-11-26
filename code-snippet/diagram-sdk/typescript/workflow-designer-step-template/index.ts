import { WorkflowDesigner, WorkflowStepTemplateArgs, WorkflowStep, WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

type WorkflowInput = Parameters<WorkflowDesigner['importWorkflow']>[0];

const workflowDefinition: WorkflowInput = {
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

function stepTemplate(args: WorkflowStepTemplateArgs): HTMLElement {
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
}

function applyStepDefaults(step: WorkflowStep): WorkflowStep {
    // Give every step room for the template content.
    step.size = { width: 220, height: 96 };
    return step;
}

function runWorkflow(): void {
    designer.runExecution();
}

const designer: WorkflowDesigner = new WorkflowDesigner({
    width: '100%',
    height: '600px',
    workflowStepTemplate: stepTemplate,
    stepDefaults: applyStepDefaults
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch((error: WorkflowImportError) => {
    console.error(error.code, error.message);
});
document.getElementById('runWorkflow')!.addEventListener('click', runWorkflow);
