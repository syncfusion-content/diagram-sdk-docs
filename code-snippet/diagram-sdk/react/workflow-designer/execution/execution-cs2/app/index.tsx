import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    function onExecutionStepFailed(args: any) {
        console.warn(args.step.name, args.error.code, args.error.message);
    }

    function onExecutionCompleted(args: any) {
        console.log('Run finished:', args.result.status);
    }
    
    return (
        <WorkflowDesignerComponent
            id="workflow"
            height="500px"
            executionStepFailed={onExecutionStepFailed}
            executionCompleted={onExecutionCompleted}
        />
    );
}
