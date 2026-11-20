<template>
    <div id="app">
        <button type="button" @click="runWorkflow">Run workflow</button>
        <ejs-workflowdesigner ref="workflow"
            id="workflow"
            width="100%"
            height="600px"
            :notifyRequested="onNotifyRequested"
            :created="onCreated"></ejs-workflowdesigner>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { WorkflowDesignerComponent as EjsWorkflowdesigner } from '@syncfusion/ej2-vue-workflow-designer';

const workflowDefinition = {
    schemaVersion: '1.1', id: 'notify-workflow', name: 'Notify customer',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'notify', stepType: 'Notify', name: 'Notify customer', position: { x: 380, y: 200 }, props: { channel: 'Email', to: 'customer@example.com', subject: 'Order update', message: 'Your order has shipped.' } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'notify' },
        { id: 'c2', sourceStepId: 'notify', targetStepId: 'end' }
    ]
};

const workflow = ref(null);

function onCreated() {
    const designer = workflow.value.ej2Instances;
    designer.importWorkflow(workflowDefinition).catch((error) => {
        console.error(error.code, error.message);
    });
}

function onNotifyRequested(args) {
    // '/api/notify' stands for your application's notification endpoint.
    fetch('/api/notify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ stepId: args.step.id, notification: args.notification }),
        signal: args.signal
    })
        .then((response) => {
        if (!response.ok) {
            // fetch resolves for HTTP 4xx and 5xx responses, so fail the step explicitly.
            args.fail(new Error('Notification failed with HTTP ' + response.status));
            return;
        }
        args.complete({ sent: true });
    })
        .catch((error) => args.fail(error));
}

function runWorkflow() {
    const designer = workflow.value.ej2Instances;
    designer.runExecution();
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/workflow-designer/index.css";
</style>
