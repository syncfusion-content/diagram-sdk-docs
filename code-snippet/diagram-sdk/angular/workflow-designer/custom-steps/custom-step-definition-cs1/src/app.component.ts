import { Component } from '@angular/core';
import { WorkflowDesignerComponent, WorkflowDesignerModule } from '@syncfusion/ej2-angular-workflow-designer';

@Component({
    imports: [WorkflowDesignerModule],
    standalone: true,
    selector: 'app-container',
    template: `
        <ejs-workflowdesigner #workflow
            id="workflow"
            height="640px"
            [stepCollectionSettings]="stepCollectionSettings"></ejs-workflowdesigner>
    `
})
export class AppComponent {
    public stepCollectionSettings: WorkflowDesignerComponent['stepCollectionSettings'] = {
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
}
