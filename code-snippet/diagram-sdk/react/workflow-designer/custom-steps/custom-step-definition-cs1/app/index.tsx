import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

type WorkflowProps = React.ComponentProps<typeof WorkflowDesignerComponent>;

const stepCollectionSettings: WorkflowProps['stepCollectionSettings'] = {
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
};

function App() {
    return (
        <WorkflowDesignerComponent
            id="workflow"
            height="640px"
            stepCollectionSettings={stepCollectionSettings}
        />
    );
}

ReactDOM.createRoot(document.getElementById('sample')!).render(<App />);
