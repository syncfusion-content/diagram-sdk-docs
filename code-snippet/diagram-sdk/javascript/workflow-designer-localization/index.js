ej.base.L10n.load({
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
var designer = new ej.workflowdesigner.WorkflowDesigner({
    locale: 'de-DE',
    height: '450px'
});
designer.appendTo('#workflowDesigner');
