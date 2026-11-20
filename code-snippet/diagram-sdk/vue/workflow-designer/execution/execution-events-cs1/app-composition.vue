<template>
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
</template>

<script setup>
import { ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

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

const workflow = ref(null);

function onCreated() {
    const designer = workflow.value.ej2Instances;
    designer.importWorkflow(workflowDefinition).catch((error) => {
        console.error(error.code, error.message);
    });
}

function runWorkflow() {
    const designer = workflow.value.ej2Instances;
    designer.runExecution();
}

function onExecutionStepFailed(args) {
    console.warn(args.step.name, args.error.code, args.error.message);
}

function onExecutionCompleted(args) {
    console.log('Run finished:', args.result.status);
    if (args.result.error) {
        console.error(args.result.error.type, args.result.error.message);
    }
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/workflow-designer/index.css";
</style>
