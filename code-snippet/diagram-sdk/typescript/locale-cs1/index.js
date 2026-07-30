ej.diagrams.Diagram.Inject(
    ej.diagrams.UndoRedo,
    ej.diagrams.DiagramContextMenu
  );
  
  var diagram;
  
  ej.base.setCulture('de');
  
  ej.base.L10n.load({
    'de-DE': {
      diagram: {
        Cut: 'Corte',
        Copy: 'Copia',
        Paste: 'Pasta',
        Undo: 'Deshacer',
        Redo: 'Rehacer',
        SelectAll: 'Seleccionar todo',
        Grouping: 'Agrupación',
        Group: 'Grupo',
        Ungroup: 'Desagrupar',
        Order: 'Fin',
        BringToFront: 'Traer a delante',
        MoveForward: 'Movimiento adelante',
        SendToBack: 'Enviar a espalda',
        SendBackward: 'Enviar hacia atrás',
      },
    },
  });
  
  // tslint:disable-next-line:max-func-body-length
  
  var nodes = [
    {
      id: 'Node1',
      offsetX: 300,
      offsetY: 288,
      annotations: [{ content: 'Node1' }],
    },
    {
      id: 'Node2',
      offsetX: 150,
      offsetY: 250,
      annotations: [{ content: 'Node2' }],
    },
  ];
  //Initialize the diagram
  diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '645px',
    nodes: nodes,
    //Sets the default values of a nodes
    getNodeDefaults: function (obj) {
      obj.width = 100;
      obj.height = 100;
      obj.shape = { shape: 'Ellipse' };
      return obj;
    },
    //Set locale
    locale: 'de-DE',
    //set context menu
    contextMenuSettings: {
      show: true,
    },
  
    created: function () {
      diagram.fitToPage({ mode: 'Width' });
    },
  });
  diagram.appendTo('#element');
  