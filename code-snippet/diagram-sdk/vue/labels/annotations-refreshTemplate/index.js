
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

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

new Vue({
el: '#app',
template: `
<div id="app">
    <button type="button" class="update-button" @click="updateAnnotation">Update Annotation Data </button>
    <ejs-diagram id="diagram"  ref="diagram" :width='width' :height='height' :nodes='nodes' :annotationTemplate='annotationTemplate' ></ejs-diagram>
</div>
`,

    name: 'app'
    data() {
        return {
            width: "100%",
            height: "600px",
            nodes: nodes,
            annotationTemplate: '#annotationTemplate'
        }
    },
    methods: {
        updateAnnotation() {
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
    }
});