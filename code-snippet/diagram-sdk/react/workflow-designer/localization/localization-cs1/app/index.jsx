import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';
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

function App() {
    return (
        <WorkflowDesignerComponent
            id="workflow"
            locale="de-DE"
            height="450px"
        />
    );
}

ReactDOM.createRoot(document.getElementById('sample')).render(<App />);
