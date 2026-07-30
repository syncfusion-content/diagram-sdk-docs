import { SymbolPalette, Diagram } from '@syncfusion/ej2-diagrams';

// Template for the HTML and SVG Shape.
function template(obj: any) {
  if (obj.id == 'node1') {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#007BFF" /><path d="M6.5 7.5L17.5 16.5L12 21V3L17.5 7.5L6.5 16.5" fill="none" stroke="white" stroke-width="2" /></svg>';
  }
  return '<div style="height:100%; background:#e3daf1;font-family:Arial;padding-left:13px;"><div style="font-size:12px;font-weight:bold;margin-left:3px;padding-top: 16px;">📅Meeting</div><div style="font-size:10px;margin-left:5px;">Team Sync @4PM</div><div style="font-size:8px; color:#666;margin-left:5px;">Room 30</div></div>';
};

// Initialize Diagram component.
let diagram: Diagram = new Diagram({
  width: '100%',
  height: '600px'
});

// Initialize symbol palette.
let palette: SymbolPalette = new SymbolPalette({
  palettes: [
    {
      id: 'basic', expanded: true, symbols: [
        {
          id: 'node1',
          width: 100,
          height: 100,
          style: { fill: '#6BA5D7', strokeColor: 'white' },
          shape: {
            type: 'Native',
            scale: 'Stretch',
            content: template.bind(this)
          }
        },
        {
          id: 'node2',
          width: 100,
          height: 100,
          style: { fill: '#6BA5D7', strokeColor: 'white' },
          shape: {
            type: 'HTML',
            content: template.bind(this)
          }
        }
      ], title: 'HTML and SVG Shapes'
    }
  ]
});

// Render initialized symbol palette.
palette.appendTo('#element');

// Render initialized diagram.
diagram.appendTo('#diagram');