import { Diagram, Node, Connector, DiagramElement } from '@syncfusion/ej2-diagrams';
import * as signalR from "@microsoft/signalr";

// Version tracking for optimistic concurrency
let userVersion: number = 0;

// Initialize diagram with enableCollaborativeEditing enabled
let diagram: Diagram = new Diagram({
    width: '100%',
    height: '700px',
    enableCollaborativeEditing: true,
    
    historyChange: function(args: any): void {
        if (args) {
            let diagramChanges = diagram.getDiagramUpdates(args);
            if (diagramChanges && diagramChanges.length > 0) {
                let editedElements = getEditedElements(args);
                // Send changes with version and edited element IDs
                connection?.invoke("BroadcastToOtherUsers", diagramChanges, userVersion, editedElements, roomName)
                    .catch((err: Error) => console.error("Send failed:", err));
            }
        }
    }
});

diagram.appendTo('#diagram');

// Listen for remote changes with version tracking
connection?.on("ReceiveData", (diagramChanges: any[], serverVersion: number) => {
    if (diagramChanges && diagramChanges.length > 0) {
        applyRemoteDiagramChanges(diagramChanges);
        // Update user version to server version after applying changes
        userVersion = serverVersion;
    }
});

// Listen for conflict notifications
connection?.on("ShowConflict", () => {
    // Show notification to inform user their update was rejected due to conflict
    alert("Your changes conflicted with another user's updates and were not applied. Please refresh to see the latest version.");
});

// Listen for explicit version updates
connection?.on("UpdateVersion", (serverVersion: number) => {
    userVersion = serverVersion;
});

// Apply changes received from other users
function applyRemoteDiagramChanges(diagramChanges: any[]): void {
    // Sets diagram updates to current diagram
    diagram.setDiagramUpdates(diagramChanges);
}

// Extract edited element IDs from history args
function getEditedElements(args: any): string[] {
    let editedElements: string[] = [];
    // Extract and return IDs of affected nodes/connectors from args
    // TODO: implement extraction logic based on HistoryChangedEventArgs
    return editedElements;
}
