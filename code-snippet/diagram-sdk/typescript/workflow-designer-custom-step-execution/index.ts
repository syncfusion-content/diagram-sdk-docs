import { WorkflowDesigner, WorkflowCustomExecutionRequestedEventArgs, WorkflowImportError } from '@syncfusion/ej2-workflow-designer';

type WorkflowInput = Parameters<WorkflowDesigner['importWorkflow']>[0];

const workflowDefinition: WorkflowInput = {
    schemaVersion: '1.1', id: 'credit-workflow', name: 'Credit check',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'credit', stepType: 'Custom', customStepId: 'check-credit-score', name: 'Check Credit Score', position: { x: 380, y: 200 }, props: { applicant: 'Jane Doe', bureau: 'experian', minimumScore: 650 } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'credit' },
        { id: 'c2', sourceStepId: 'credit', targetStepId: 'end' }
    ]
};

function onCustomExecutionRequested(args: WorkflowCustomExecutionRequestedEventArgs): void {
    if (args.step.customStepId !== 'check-credit-score') {
        args.fail(new Error('Unknown custom step: ' + args.step.customStepId));
        return;
    }
    const props: { [key: string]: unknown } = args.step.props as { [key: string]: unknown };
    // '/api/credit-score' stands for your application's endpoint.
    fetch('/api/credit-score?applicant=' + encodeURIComponent(String(props.applicant)), { signal: args.signal })
        .then((response: Response) => response.json())
        .then((data: { score: number }) => args.complete({ score: data.score, passed: data.score >= Number(props.minimumScore) }))
        .catch((error: Error) => args.fail(error));
}

function runWorkflow(): void {
    designer.runExecution();
}

const designer: WorkflowDesigner = new WorkflowDesigner({
    width: '100%',
    height: '600px',
    stepCollectionSettings: {
        custom: [{
            id: 'check-credit-score',
            name: 'Check Credit Score',
            description: 'Looks up the credit score of an applicant.',
            iconCss: 'e-icons e-check',
            fields: [
                { key: 'applicant', label: 'Applicant', type: 'TextBox', required: true },
                { key: 'bureau', label: 'Credit bureau', type: 'DropDownList', defaultValue: 'experian',
                  options: [{ text: 'Experian', value: 'experian' }, { text: 'Equifax', value: 'equifax' }] },
                { key: 'minimumScore', label: 'Minimum score', type: 'NumericTextBox', defaultValue: 650,
                  validation: { min: 300, max: 850 } }
            ]
        }]
    },
    customExecutionRequested: onCustomExecutionRequested
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch((error: WorkflowImportError) => {
    console.error(error.code, error.message);
});
document.getElementById('runWorkflow')!.addEventListener('click', runWorkflow);
