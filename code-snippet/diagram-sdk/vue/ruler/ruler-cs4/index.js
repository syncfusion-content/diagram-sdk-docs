
import Vue from 'vue';
import { DiagramPlugin } from '@syncfusion/ej2-vue-diagrams';
Vue.use(DiagramPlugin);

new Vue({
    el: '#app',
    template: `
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
`,

    name: 'app',
    data() {
        return {
            width: "100%",
            height: "600px",
            rulerSettings: {
                showRulers: true,
                measurementUnit: 'Inch'
            }
        }
    },
    methods: {
        onUnitChange(args) {
            const diagram = this.$refs.diagramObj.ej2Instances;
            diagram.rulerSettings.measurementUnit = args.target.value;
            diagram.dataBind();
        }
    }

});