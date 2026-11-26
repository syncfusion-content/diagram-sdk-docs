import Vue from 'vue';
import { WorkflowDesignerPlugin } from '@syncfusion/ej2-vue-workflow-designer';
Vue.use(WorkflowDesignerPlugin);

const workflowDefinition = {
    schemaVersion: '1.1', id: 'credit-workflow', name: 'Credit check',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 120, y: 200 } },
        { id: 'credit', stepType: 'Custom', customStepId: 'check-credit-score', name: 'Check Credit Score', position: { x: 380, y: 200 }, props: { applicant: 'Jane Doe', bureau: 'experian', minimumScore: 650 } },
        { id: 'end', stepType: 'End', name: 'End', position: { x: 640, y: 200 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'credit' },
        { id: 'c2', sourceStepId: 'credit', targetStepId: 'end' }
    ]
};

const stepCollectionSettings = {
    custom: [{
            id: 'check-credit-score',
            name: 'Check Credit Score',
            description: 'Looks up the credit score of an applicant.',
            iconCss: 'e-icons e-check',
            fields: [
                { key: 'applicant', label: 'Applicant', type: 'TextBox', required: true },
                { key: 'bureau', label: 'Credit bureau', type: 'DropDownList', defaultValue: 'experian',
                    options: [{ text: 'Experian', value: 'experian' }, { text: 'Equifax', value: 'equifax' }] },
                { key: 'minimumScore', label: 'Minimum score', type: 'NumericTextBox', defaultValue: 650,
                    validation: { min: 300, max: 850 } }
            ]
        }]
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
                :stepCollectionSettings="stepCollectionSettings"
                :customExecutionRequested="onCustomExecutionRequested"
                :created="onCreated"></ejs-workflowdesigner>
        </div>
    `,
    name: 'app',
    data: function () {
        return {
            stepCollectionSettings: stepCollectionSettings
        };
    },
    methods: {
        onCreated: function () {
            const designer = this.$refs.workflow.ej2Instances;
            designer.importWorkflow(workflowDefinition).catch((error) => {
                console.error(error.code, error.message);
            });
        },
        onCustomExecutionRequested: function (args) {
            if (args.step.customStepId !== 'check-credit-score') {
                args.fail(new Error('Unknown custom step: ' + args.step.customStepId));
                return;
            }
            const props = args.step.props;
            // '/api/credit-score' stands for your application's endpoint.
            fetch('/api/credit-score?applicant=' + encodeURIComponent(String(props.applicant)), { signal: args.signal })
                .then((response) => response.json())
                .then((data) => args.complete({ score: data.score, passed: data.score >= Number(props.minimumScore) }))
                .catch((error) => args.fail(error));
        },
        runWorkflow: function () {
            const designer = this.$refs.workflow.ej2Instances;
            designer.runExecution();
        }
    }
});
