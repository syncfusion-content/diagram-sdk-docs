<template>
    <div id="app">
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            height="640px"
            :stepCollectionSettings="stepCollectionSettings"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const stepCollectionSettings = {
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
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/workflow-designer/index.css";
</style>
