import Vue from 'vue';
import { WorkflowDesignerPlugin } from '@syncfusion/ej2-vue-workflow-designer';
Vue.use(WorkflowDesignerPlugin);

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
            <button type="button" @click="runWorkflow">Run workflow</button>
            <ejs-workflowdesigner ref="workflow"
                id="workflow"
                width="100%"
                height="600px"
                :workflowStepTemplate="stepTemplate"
                :stepDefaults="applyStepDefaults"
                :created="onCreated"></ejs-workflowdesigner>
        </div>
    `,
    name: 'app',
    methods: {
        onCreated: function () {
            const designer = this.$refs.workflow.ej2Instances;
            designer.importWorkflow(workflowDefinition).catch((error) => {
                console.error(error.code, error.message);
            });
        },
        stepTemplate: function (args) {
            const statusText = {
                idle: 'Not run yet', running: 'Running', completed: 'Completed', failed: 'Failed'
            };
            const card = document.createElement('div');
            card.className = 'step-card step-' + args.state;
            const title = document.createElement('strong');
            title.textContent = args.step.name; // textContent keeps user-entered names safe
            const type = document.createElement('span');
            type.textContent = args.step.stepType;
            const status = document.createElement('small');
            status.textContent = statusText[args.state];
            card.append(title, type, status);
            return card;
        },
        applyStepDefaults: function (step) {
            // Give every step room for the template content.
            step.size = { width: 220, height: 96 };
            return step;
        },
        runWorkflow: function () {
            const designer = this.$refs.workflow.ej2Instances;
            designer.runExecution();
        }
    }
});
