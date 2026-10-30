import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    const workflowInstance = React.useRef<WorkflowDesignerComponent>(null);

    function onBeforeConnect(args: any) {
        if (args.connection.sourceStepId === 'start') {
            args.cancel = true;
        }
    }

    return (
        <WorkflowDesignerComponent
            id="workflow"
            ref={workflowInstance}
            height="640px"
            beforeConnect={onBeforeConnect}
        />
    );
}
