<template>
    <div id="app">
        <div style="margin-bottom: 10px;">
            <label for="unit">Select ruler unit: </label>
            <select id="unit" @change="onUnitChange">
                <option value="Pixel">Pixel</option>
                <option value="Point">Point</option>
                <option value="Inch" selected>Inch</option>
                <option value="Millimeter">Millimeter</option>
                <option value="Centimeter">Centimeter</option>
            </select>
        </div>
        <ejs-diagram id="diagram" ref="diagramObj" :width='width' :height='height' :rulerSettings='rulerSettings'></ejs-diagram>
    </div>
</template>
<script>
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "600px",
            rulerSettings: {
                showRulers: true,
                // Display the ruler values in inches.
                measurementUnit: 'Inch'
            }
        }
    },
    methods: {
        // Change the ruler measurement unit at runtime.
        onUnitChange(args) {
            const diagram = this.$refs.diagramObj.ej2Instances;
            diagram.rulerSettings.measurementUnit = args.target.value;
            diagram.dataBind();
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/diagram/index.css";
</style>
