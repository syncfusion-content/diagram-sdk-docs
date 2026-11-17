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
<script>
import { DiagramComponent, DiagramTools } from '@syncfusion/ej2-vue-diagrams';

let nodes = [{
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
let connectors = [{ id: 'connector1', sourceID: 'negativeNode', targetID: 'positiveNode' }];

export default {
    name: "App",
    components: {
        "ejs-diagram": DiagramComponent
    },
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            connectors: connectors,
            tool: DiagramTools.ZoomPan,
            rulerSettings: { showRulers: true },
            scrollSettings: { restrictNegativeAxis: false }
        }
    },
    methods: {
        // Toggles restrictNegativeAxis at runtime
        onChange(args) {
            const diagram = this.$refs.diagramObj.ej2Instances;
            diagram.scrollSettings.restrictNegativeAxis = args.target.checked;
            diagram.dataBind();
        }
    }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
</style>
