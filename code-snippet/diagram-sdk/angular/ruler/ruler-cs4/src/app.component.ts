import { Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import { DiagramModule, DiagramComponent ,RulerSettingsModel, MeasurementUnit} from '@syncfusion/ej2-angular-diagrams';


@Component({
imports: [
         DiagramModule
    ],
    providers: [ ],
    standalone: true,
    selector: "app-container",
    template: `<div>
        <div style="margin-bottom: 10px;">
            <label for="unit">Select ruler unit: </label>
            <select id="unit" (change)="onUnitChange($event)">
                <option value="Pixel">Pixel</option>
                <option value="Point">Point</option>
                <option value="Inch" selected>Inch</option>
                <option value="Millimeter">Millimeter</option>
                <option value="Centimeter">Centimeter</option>
            </select>
        </div>
        <ejs-diagram #diagram id="diagram" width="100%" height="600px" [rulerSettings]='rulerSettings'></ejs-diagram>
    </div>`,
    encapsulation: ViewEncapsulation.None
})
export class AppComponent {
     @ViewChild('diagram')
    public diagram?: DiagramComponent;
    public rulerSettings: RulerSettingsModel = {
        showRulers: true,
        // Display the ruler values in inches.
        measurementUnit: 'Inch'
    }
    // Change the ruler measurement unit at runtime.
    public onUnitChange(args: Event): void {
        this.diagram!.rulerSettings.measurementUnit = (args.target as HTMLSelectElement).value as MeasurementUnit;
        this.diagram!.dataBind();
    }
}


