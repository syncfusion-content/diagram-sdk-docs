import * as React from 'react';
import { WorkflowDesignerComponent } from '@syncfusion/ej2-react-workflow-designer';

function WorkflowCanvas() {
    function onBeforeRequestSend(args: any) {
        if (args.requestType === 'ApiRequest') {
            const url: string = String(args.request.url);
            if (!url.startsWith('https://api.mycompany.com/')) {
                args.cancel = true;
            }
        }
    }

    return <WorkflowDesignerComponent id="workflow" height="500px" beforeRequestSend={onBeforeRequestSend} />;
}
