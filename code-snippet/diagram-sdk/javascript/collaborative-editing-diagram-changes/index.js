// Initialize the diagram with enableCollaborativeEditing enabled
let diagram = new ej.diagrams.Diagram({
    width: '100%',
    height: '700px',
    nodes: [],
    connectors: [],
    enableCollaborativeEditing: true,
    
    // Listen to history changes
    historyChange: function(args) {
        if (args) {
            // Get diagram updates (incremental changes) and send to hub
            let diagramChanges = diagram.getDiagramUpdates(args);
            // When enableCollaborativeEditing is enabled, retrieve diagramChanges only after the group action completes (startGroup/endGroup).
            if (diagramChanges && diagramChanges.length > 0) {
                connection.invoke("BroadcastToOtherUsers", diagramChanges, roomName)
                    .catch(err => console.error("Send failed:", err));
            }
        }
    }
});

diagram.appendTo('#diagram');

// Listen for remote changes from other users
connection.on("ReceiveData", (diagramChanges) => {
    if (diagramChanges && diagramChanges.length > 0) {
        diagram.setDiagramUpdates(diagramChanges);
    }
});
