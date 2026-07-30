var diagram;
var nodes = [{
    id: "node5",
    width: 100,
    height: 100,
    offsetX: 100,
    offsetY: 100,
    style: {
      strokeColor: "#6BA5D7",
      fill: "#6BA5D7"
    },
    annotations: [{
        content: "Custom Template",
        offset: {
          y: 1
        },
        verticalAlignment: "Top"
      }]
  }];
var count = 11;
var getTextElement = function(text) {
  var textElement = new ej.diagrams.TextElement();
  textElement.id = "text" + count;
  textElement.width = 50;
  textElement.height = 20;
  textElement.content = text;
  count++;
  return textElement;
};
var addRows = function(column) {
  column.children.push(getTextElement("Row1"));
  column.children.push(getTextElement("Row2"));
  column.children.push(getTextElement("Row3"));
  column.children.push(getTextElement("Row4"));
};

//Initializes diagram control
diagram = new ej.diagrams.Diagram({
  width: 900,
  height: 900,
  nodes: nodes,
  setNodeTemplate: function(obj, diagram) {
    if (obj.id.indexOf("node5") !== -1) {
      var table = new ej.diagrams.StackPanel();
      table.orientation = "Horizontal";
      var column1 = new ej.diagrams.StackPanel();
      column1.children = [];
      column1.children.push(getTextElement("Column1"));
      addRows(column1);
      var column2 = new ej.diagrams.StackPanel();
      column2.children = [];
      column2.children.push(getTextElement("Column2"));
      addRows(column2);
      table.children = [column1, column2];
      return table;
    }
    return null;
    },
}, '#element');

