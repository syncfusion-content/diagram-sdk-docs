
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);


function userHandleTemplate(name) {
  return `
<div style="width:50px;height:100%;display:flex;align-items:center;justify-content:center;background:${name === "Delete" ? "red" : "#4CAF50"};border-radius:4px;color:white;font-size:12px;font-weight:bold;">
${name}
</div>
`;
}

const nodes = [
  {
    id: 'node1',
    offsetX: 150,
    offsetY: 150,
    height: 100,
    width: 100,
    style: { fill: '#6BA5D7', strokeColor: 'white' },
  },
];

const userHandles = [
  {
    name: 'handle1',
    offset: 1,
    side: 'Right',
  }
];

new Vue({
  el: '#app',
  template: `
<div id="app">
   <button type="button" class="update-button" @click="updateUserHandle"> Update User Handle </button>
    <ejs-diagram id="diagram"  ref="diagram" :width='width' :height='height' :nodes='nodes' :selectedItems="selectedItems"
    :userHandleTemplate="userHandleTemplate" @created="onCreated" ></ejs-diagram>
</div>
`,

  name: 'app'
    data() {
    return {
      width: "100%",
      height: "600px",
      nodes: nodes,
      selectedItems: {
        userHandles
      },

      userHandleTemplate:
        userHandleTemplate('Edit')
    }
  },
  methods: {
    onCreated() {
      window.setTimeout(() => {
        const diagramInstance =
          this.$refs.diagram.ej2Instances;

        diagramInstance.select([
          diagramInstance.nodes[0]
        ]);
      }, 100);
    },

    updateUserHandle() {
      const diagramInstance = this.$refs.diagram.ej2Instances;

      const deleteTemplate = userHandleTemplate('Delete');
      // Update the Vue property
      this.userHandleTemplate = deleteTemplate;
      // Update the Diagram property
      diagramInstance.userHandleTemplate = deleteTemplate;
      // Refresh the Diagram template
      diagramInstance.refreshTemplate();

    }
  }
});