<template>
    <div id="app">
        <button type="button" class="update-button" @click="updateNode"> Update Node Data </button>
        <ejs-diagram id="diagram" ref="diagram" :width='width' :height='height' :nodes='nodes'  :nodeTemplate="nodeTemplate"></ejs-diagram>
    </div>
</template>
<script>

import { createApp, ref } from "vue";
import { DiagramComponent } from '@syncfusion/ej2-vue-diagrams';

/*
 * Vue component used as the node template.
 * EJ2 injects the corresponding node model into "data".
 */
 const itemVue = createApp({}).component('nodeTemplate', {
  template: `
    <div
      style="
        background: #e3165b;
        color: white;
        border-radius: 5px;
        text-align: center;
        height: 100%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        box-sizing: border-box;
        overflow: hidden;
      "
    >
      <div style="font-weight: bold; font-size: 14px;">
        {{ data.addInfo.title }}
      </div>

      <div style="font-size: 12px; margin-top: 5px;">
        {{ data.addInfo.department }}
      </div>
    </div>
  `,

  data() {
    return {
      data: {
        addInfo: {
          title: '',
          department: ''
        }
      }
    };
  }
});

const nodes = [
  {
    id: 'node1',
    offsetX: 150,
    offsetY: 150,
    width: 120,
    height: 120,

    // Required for rendering the Vue HTML template
    shape: {
      type: 'HTML'
    },

    // addInfo must be defined at the node level
    addInfo: {
      title: 'Employee',
      department: 'Engineering'
    }
  }
];

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
            nodeTemplate: function () {
              return { template: itemVue };
            },
        }
    },
    methods: {
      updateNode() {
        const diagramComponent = this.$refs.diagram;

        if (!diagramComponent) {
          return;
        }

        const diagramInstance = diagramComponent.ej2Instances;
        const node = diagramInstance.nodes[0];

        node.addInfo.title = 'Manager';
        node.addInfo.department = 'Human Resources';

        // Render the annotation template with the updated addInfo
        diagramInstance.refreshTemplate(node);

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

.update-button {
margin-bottom: 10px;
}

</style>