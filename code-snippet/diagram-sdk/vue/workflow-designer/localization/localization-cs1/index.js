import Vue from 'vue';
import { WorkflowDesignerPlugin } from '@syncfusion/ej2-vue-workflow-designer';
Vue.use(WorkflowDesignerPlugin);
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

new Vue({
    el: '#app',
    template: `
        <div id="app">
            <ejs-workflowdesigner ref="workflow"
                id="workflow"
                locale="de-DE"
                height="450px"></ejs-workflowdesigner>
        </div>
    `,
    name: 'app',
    methods: {

    }
});
