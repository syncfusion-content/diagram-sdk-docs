<template>
    <div id="app">
        <button type="button" @click="runWorkflow">Run workflow</button>
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            width="100%"
            height="600px"
            :customExecutionRequested="onCustomExecutionRequested"
            :created="onCreated"></ejs-workflowdesigner>
    </div>
</template>

<script>
import { WorkflowDesignerComponent } from '@syncfusion/ej2-vue-workflow-designer';

const workflowDefinition = {
    schemaVersion: '1.1', id: 'custom-workflow', name: 'Custom execution',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'custom', stepType: 'Custom', name: 'Create invoice', position: { x: 380, y: 200 }, props: { actionType: 'createInvoice', input: { orderId: 'SO-1001' } } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'custom' },
        { id: 'c2', sourceStepId: 'custom', targetStepId: 'end' }
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
        onCustomExecutionRequested: function (args) {
            args.complete({ invoiceId: 'INV-1001' });
            alert('Custom execution completed!');
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
</style>
