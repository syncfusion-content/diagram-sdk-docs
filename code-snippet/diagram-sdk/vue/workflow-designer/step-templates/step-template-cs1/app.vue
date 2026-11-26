<template>
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
</template>

<script>
import { WorkflowDesignerComponent } from '@syncfusion/ej2-vue-workflow-designer';

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

export default {
    name: 'App',
    components: {
        'ejs-workflowdesigner': WorkflowDesignerComponent
    },
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
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/workflow-designer/index.css";
.step-card { display: flex; flex-direction: column; gap: 2px; padding: 8px 12px; height: 100%; box-sizing: border-box; border-radius: 6px; background: #ffffff; border: 1px solid #d1d1d1; }
.step-card small { color: #616161; }
.step-running { border-color: #0f6cbd; background: #ebf3fc; }
.step-completed { border-color: #107c10; background: #f1faf1; }
.step-failed { border-color: #c50f1f; background: #fdf3f4; }
.step-card.is-selected { border: 2px solid #0f6cbd; }
</style>
