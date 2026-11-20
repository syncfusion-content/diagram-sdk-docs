<template>
    <div id="app">
        <button type="button" @click="validateButton">Validate workflow</button>
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            width="100%"
            height="600px"
            :created="onCreated"></ejs-workflowdesigner>
    </div>
</template>

<script>
import { WorkflowDesignerComponent } from '@syncfusion/ej2-vue-workflow-designer';

const workflowDefinition = {
    schemaVersion: '1.1', id: 'validation-workflow', name: 'Validation',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'variable', stepType: 'SetVariable', name: 'Set value', position: { x: 380, y: 200 }, props: { variables: [{ variableName: 'amount', value: '100', valueType: 'Number' }] } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'variable' },
        { id: 'c2', sourceStepId: 'variable', targetStepId: 'end' }
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
        validateButton: function () {
            const designer = this.$refs.workflow.ej2Instances;
            alert(designer.validateWorkflow().isValid ? 'Workflow is valid' : 'Workflow is invalid');
        }
    }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/workflow-designer/index.css";
</style>
