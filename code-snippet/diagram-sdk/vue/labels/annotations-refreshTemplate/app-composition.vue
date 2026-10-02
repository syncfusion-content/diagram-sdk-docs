<template>
    <div id="app">
        <button type="button" class="update-button" @click="updateAnnotation">Update Annotation Data </button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes' :annotationTemplate='annotationTemplate'></ejs-diagram>
    </div>
</template>
<script setup>

import { onMounted, ref } from "vue";
import { DiagramComponent as EjsDiagram } from '@syncfusion/ej2-vue-diagrams';


const nodes = [
 {
    id: 'node1',
    offsetX: 150,
    offsetY: 150,
    width: 100,
    height: 100,

    style: {
        fill: '#6BA5D7',
        strokeColor: 'white'
    },

        annotations: [
            {
            id: 'annotation1',
            width: 100,
            height: 50,

            addInfo: {
                label: 'Start',
                priority: 'High'
            }
            }
        ]
    }
];

const diagram = ref(null);
const updateBtn = ref(null);
const width = "100%";
const height = "600px";


const updateAnnotation = function () {
     const diagramComponent = this.$refs.diagram;

    if (!diagramComponent) {
      return;
    }

    const diagramInstance = diagramComponent.ej2Instances;
    const node = diagramInstance.nodes[0];
    const annotation = node.annotations[0];

    annotation.addInfo.label = 'Process';
    annotation.addInfo.priority = 'Low';

    // Render the annotation template with the updated addInfo
    diagramInstance.refreshTemplate(annotation, node);
}

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-diagrams/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
.update-button {
margin-bottom: 10px;
}
</style>