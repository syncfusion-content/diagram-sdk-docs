var connectors = {
        id: 'connector1',
        addInfo: 'connec',
        zIndex: 2,
        type: 'Straight',
        sourcePoint: {
            x: 300,
            y: 100
        },
        targetPoint: {
            x: 300,
            y: 200
        }
    };
    var connectors2 = {
        id: 'connector2',
        type: 'Straight',
        zIndex: 1,
        sourcePoint: {
            x: 100,
            y: 100
        },
        targetPoint: {
            x: 200,
            y: 200
        }
    };
    var diagram = new ej.diagrams.Diagram({
        width: '100%',
        getConnectorDefaults: function (obj) {
            obj.style.strokeColor = '#6BA5D7';
            obj.style.fill = '#6BA5D7';
            obj.style.strokeWidth = 2;
            obj.targetDecorator.style.fill = '#6BA5D7';
            obj.targetDecorator.style.strokeColor = '#6BA5D7';
            return obj;
        },
        height: '600px',
        connectors: [ connectors,connectors2]
    }, '#element');

