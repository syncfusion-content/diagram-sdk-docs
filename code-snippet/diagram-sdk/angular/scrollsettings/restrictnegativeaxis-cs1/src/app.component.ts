import { Component, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent, NodeModel, ConnectorModel, ScrollSettingsModel, RulerSettingsModel, DiagramTools } from '@syncfusion/ej2-angular-diagrams';

@Component({
imports: [
         DiagramModule
    ],

providers: [ ],
standalone: true,
    selector: "app-container",
    template: `<div style="padding-bottom: 10px;">
        <input type="checkbox" id="restrictNegativeAxis" (change)="onChange($event)" />
        <label for="restrictNegativeAxis">Restrict Negative Axis</label>
    </div>
    <ejs-diagram #diagram id="diagram" width="100%" height="580px" [tool]="tool" [scrollSettings]="scrollSettings" [rulerSettings]="rulerSettings" [nodes]="nodes" [connectors]="connectors">
    </ejs-diagram>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    public nodes: NodeModel[] = [
        {
            id: 'negativeNode',
            offsetX: -150, offsetY: -100,
            width: 140, height: 60,
            style: { fill: '#6BA5D7', strokeColor: 'white' },
            annotations: [{ content: 'Negative Region Node' }]
        },
        {
            id: 'positiveNode',
            offsetX: 250, offsetY: 150,
            width: 140, height: 60,
            style: { fill: '#6BA5D7', strokeColor: 'white' },
            annotations: [{ content: 'Positive Region Node' }]
        }
    ];
    public connectors: ConnectorModel[] = [
        { id: 'connector1', sourceID: 'negativeNode', targetID: 'positiveNode' }
    ];
    @ViewChild("diagram")
    public diagram?: DiagramComponent;
    public tool: DiagramTools = DiagramTools.ZoomPan;
    public scrollSettings: ScrollSettingsModel = { restrictNegativeAxis: false };
    public rulerSettings: RulerSettingsModel = { showRulers: true };
    // Toggles restrictNegativeAxis at runtime
    onChange(args: Event): void {
        this.diagram!.scrollSettings.restrictNegativeAxis = (args.target as HTMLInputElement).checked;
        this.diagram!.dataBind();
    }
}
