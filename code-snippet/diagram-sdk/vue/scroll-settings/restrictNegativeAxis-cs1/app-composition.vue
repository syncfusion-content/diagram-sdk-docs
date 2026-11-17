<template>
    <div id="app">
        <div style="padding-bottom: 10px;">
            <input type="checkbox" id="restrictNegativeAxis" @change="onChange" />
            <label for="restrictNegativeAxis">Restrict Negative Axis</label>
        </div>
        <ejs-diagram ref="diagramObj" id="diagram" :width='width' :height='height' :nodes='nodes' :connectors='connectors'
            :tool='tool' :rulerSettings='rulerSettings' :scrollSettings='scrollSettings'></ejs-diagram>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import { DiagramComponent as EjsDiagram, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

const diagramObj = ref(null);
const nodes = [{
    id: 'negativeNode',
    offsetX: -150, offsetY: -100,
    width: 140, height: 60,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Negative Region Node' }]
}, {
    id: 'positiveNode',
    offsetX: 250, offsetY: 150,
    width: 140, height: 60,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
    annotations: [{ content: 'Positive Region Node' }]
}];
const connectors = [{ id: 'connector1', sourceID: 'negativeNode', targetID: 'positiveNode' }];
const width = "100%";
const height = "600px";
const tool = DiagramTools.ZoomPan;
const rulerSettings = { showRulers: true };
const scrollSettings = { restrictNegativeAxis: false };

// Toggles restrictNegativeAxis at runtime
const onChange = (args) => {
    const diagram = diagramObj.value.ej2Instances;
    diagram.scrollSettings.restrictNegativeAxis = args.target.checked;
    diagram.dataBind();
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
