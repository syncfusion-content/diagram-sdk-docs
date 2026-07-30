import * as signalR from "@microsoft/signalr";

// Initialize SignalR connection
let connection: signalR.HubConnection | null = null;
let roomName: string = "Syncfusion";
let connectionId: string | null = null;

function initializeSignalRConnection(): void {
    if (connection === null) {
        // Create connection
        connection = new signalR.HubConnectionBuilder()
            .withUrl("<<Place your SignalR Hub URL>>", {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .withAutomaticReconnect()
            .build();

        // Triggered when the connection to the SignalR Hub is successfully established
        connection.on("OnConnectedAsync", onConnectedAsync);

        // Start the connection
        connection.start()
            .then(() => {
                console.log("Connected to SignalR Hub");
            })
            .catch((error: Error) => {
                console.error("Connection failed:", error);
            });
    }
}

function onConnectedAsync(id: string): void {
    if (id && id.length > 0) {
        connectionId = id;
        console.log("Connection ID:", connectionId);
        // Join the room after connection is established
        connection?.invoke("JoinDiagram", roomName)
            .catch((error: Error) => {
                console.error("JoinDiagram failed:", error);
            });
    }
}

// Initialize connection when document is ready
document.addEventListener("DOMContentLoaded", function() {
    initializeSignalRConnection();
});
