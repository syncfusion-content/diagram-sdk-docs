var workflowDefinition = {
    schemaVersion: '1.1', id: 'condition-workflow', name: 'Condition branches',
    workflowSteps: [
        { id: 'start', stepType: 'ManualTrigger', name: 'Start', position: { x: 100, y: 220 } },
        { id: 'check', stepType: 'Condition', name: 'Check value', position: { x: 350, y: 220 }, props: { conditions: [{ field: '10', valueType: 'Number', operator: 'GreaterThan', value: '5' }] } },
        { id: 'yes', stepType: 'End', name: 'True', position: { x: 620, y: 120 } },
        { id: 'no', stepType: 'End', name: 'False', position: { x: 620, y: 320 } }
    ],
    workflowConnections: [
        { id: 'c1', sourceStepId: 'start', targetStepId: 'check' },
        { id: 'c2', sourceStepId: 'check', sourcePort: 'true', targetStepId: 'yes' },
        { id: 'c3', sourceStepId: 'check', sourcePort: 'false', targetStepId: 'no' }
    ]
};
function applyConnectionDefaults(connection) {
    connection.type = 'Bezier';
    connection.targetDecorator = 'Arrow';
    if (connection.sourcePort === 'true') {
        connection.style = { strokeColor: '#107c10', strokeWidth: 2 };
    }
    else if (connection.sourcePort === 'false') {
        connection.style = { strokeColor: '#ca5010', strokeWidth: 2 };
    }
    else {
        connection.style = { strokeColor: '#8a8886', strokeWidth: 2 };
    }
    return connection;
}
var designer = new ej.workflowdesigner.WorkflowDesigner({
    width: '100%',
    height: '600px',
    connectionDefaults: applyConnectionDefaults
});
designer.appendTo('#workflowDesigner');
designer.importWorkflow(workflowDefinition).catch(function (error) {
    console.error(error.code, error.message);
});
