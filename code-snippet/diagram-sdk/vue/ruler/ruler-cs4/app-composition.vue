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
<script setup>
import { ref } from 'vue';
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';

const diagramObj = ref(null);
const width = "600px";
const height = "600px";
const rulerSettings = {
    showRulers: true,
    // Display the ruler values in inches.
    measurementUnit: 'Inch'
}
// Change the ruler measurement unit at runtime.
const onUnitChange = (args) => {
    const diagram = diagramObj.value.ej2Instances;
    diagram.rulerSettings.measurementUnit = args.target.value;
    diagram.dataBind();
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/diagram/index.css";
</style>
