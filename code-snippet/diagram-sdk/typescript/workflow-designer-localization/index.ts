import { WorkflowDesigner } from '@syncfusion/ej2-workflow-designer';
import { L10n } from '@syncfusion/ej2-base';

L10n.load({
    'de-DE': {
        'workflow-designer': {
            'workflowSteps': 'Workflow-Schritte',
            'searchWorkflowSteps': 'Workflow-Schritte suchen',
            'categoryTriggers': 'Auslöser',
            'categoryActions': 'Aktionen',
            'executionLog': 'Ausführungsprotokoll',
            'executionCompleted': 'Ausführung abgeschlossen',
            'cancel': 'Abbrechen'
        }
    }
});

const designer: WorkflowDesigner = new WorkflowDesigner({
    locale: 'de-DE',
    height: '450px'
});
designer.appendTo('#workflowDesigner');
