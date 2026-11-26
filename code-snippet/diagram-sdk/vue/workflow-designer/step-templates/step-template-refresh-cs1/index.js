import Vue from 'vue';
import { WorkflowDesignerPlugin } from '@syncfusion/ej2-vue-workflow-designer';
Vue.use(WorkflowDesignerPlugin);

let selectedStepId = '';

const workflowDefinition = {
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

new Vue({
    el: '#app',
    template: `
        <div id="app">
            <ejs-workflowdesigner ref="workflow"
                id="workflow"
                width="100%"
                height="600px"
                :workflowStepTemplate="stepTemplate"
                :stepDefaults="applyStepDefaults"
                :selectionChanged="onSelectionChanged"
                :created="onCreated"></ejs-workflowdesigner>
        </div>
    `,
    name: 'app',
    data: function () {
        return {
            selectedStepId: selectedStepId
        };
    },
    methods: {
        onCreated: function () {
            const designer = this.$refs.workflow.ej2Instances;
            designer.importWorkflow(workflowDefinition).catch((error) => {
                console.error(error.code, error.message);
            });
        },
        stepTemplate: function (args) {
            const card = document.createElement('div');
            card.className = 'step-card' + (args.step.id === selectedStepId ? ' is-selected' : '');
            card.textContent = args.step.name;
            return card;
        },
        applyStepDefaults: function (step) {
            step.size = { width: 220, height: 96 };
            return step;
        },
        onSelectionChanged: function (args) {
            const designer = this.$refs.workflow.ej2Instances;
            const previous = selectedStepId;
            selectedStepId = args.selectedItem && args.selectedItem.stepType ? args.selectedItem.id : '';
            if (previous) {
                designer.refreshWorkflowStepTemplate(previous);
            }
            if (selectedStepId) {
                designer.refreshWorkflowStepTemplate(selectedStepId);
            }
        }
    }
});
