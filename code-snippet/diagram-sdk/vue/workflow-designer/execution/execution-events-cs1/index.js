import Vue from 'vue';
import { WorkflowDesignerPlugin } from '@syncfusion/ej2-vue-workflow-designer';
Vue.use(WorkflowDesignerPlugin);

const workflowDefinition = {
    schemaVersion: '1.1', id: 'execution-workflow', name: 'Run workflow',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'delay', stepType: 'Delay', name: 'Wait', position: { x: 380, y: 200 }, props: { delayType: 'Fixed', duration: 1, timeUnit: 'Seconds' } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'delay' },
        { id: 'c2', sourceStepId: 'delay', targetStepId: 'end' }
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
                :executionStepFailed="onExecutionStepFailed"
                :executionCompleted="onExecutionCompleted"
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
        runWorkflow: function () {
            const designer = this.$refs.workflow.ej2Instances;
            designer.runExecution();
        },
        onExecutionStepFailed: function (args) {
            console.warn(args.step.name, args.error.code, args.error.message);
        },
        onExecutionCompleted: function (args) {
            console.log('Run finished:', args.result.status);
            if (args.result.error) {
                console.error(args.result.error.type, args.result.error.message);
            }
        }
    }
});
