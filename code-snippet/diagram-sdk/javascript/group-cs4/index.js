var diagram;
var canvas;
var child1;
var child2;
canvas = new ej.diagrams.Canvas();
canvas.pivot = {
  x: 0,
  y: 0,
};
canvas.offsetX = 200;
canvas.offsetY = 100;
canvas.style.fill = '#6BA5D7';
child1 = new ej.diagrams.DiagramElement();
(child1.id = 'child1'), (child1.width = 100);
child1.height = 100;
child1.margin.left = child1.margin.top = 10;
child2 = new ej.diagrams.DiagramElement();
(child2.id = 'child2'), (child2.width = 100);
child2.height = 100;
child2.margin.left = 190;
child2.margin.top = 170;
child2.margin.bottom = 5;
child2.margin.right = 5;
canvas.children = [child1, child2];
diagram = new ej.diagrams.Diagram(
  {
    mode: 'SVG',
    width: '1000px',
    height: '600px',
    basicElements: [canvas],
  },
  '#element'
);
