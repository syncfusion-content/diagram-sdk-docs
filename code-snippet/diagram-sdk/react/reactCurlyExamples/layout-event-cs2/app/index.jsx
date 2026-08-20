

function handleLayoutUpdated(args){
    if (args.state === 'Started') {
        console.log('Layout started rendering');
    }
}

const layout = {
    type: 'HierarchicalTree'
}

<DiagramComponent id="diagram" width={'100%'} height={'550px'}
    nodes={nodes} connectors={connectors}
    layout={layout}
    // Event Triggers when the state of the layout rendering changes
    layoutUpdated={handleLayoutUpdated}>
    {/* Inject necessary services for the diagram */}
    <Inject services={[HierarchicalTree]} />
</DiagramComponent>

