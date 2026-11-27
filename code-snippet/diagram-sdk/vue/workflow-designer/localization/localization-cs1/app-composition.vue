<template>
    <div id="app">
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            locale="de-DE"
            height="450px"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';
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
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/workflow-designer/index.css";
</style>
