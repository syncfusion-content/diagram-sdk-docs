// Define the model for the UML Sequence Diagram
var umlSequenceDiagramModel = {
  // Defines the participants involved in the sequence diagram
  participants: [
    { id: "User", content: "User", stereotype: ej.diagrams.UmlSequenceParticipantStereotype.Actor }, // User as an actor
    { id: "System", content: "System", showDestructionMarker: true, }, // System participant
    { id: "Logger", content: "Logger", showDestructionMarker: true, }, // Logger participant
    { id: "SessionManager", content: "SessionManager", } // SessionManager participant
  ],
  // Define messages exchanged between participants
  messages: [
    // User sends login request to System via Synchronous message
    {
      id: "MSG1", content: "Login Request", fromParticipantID: "User", toParticipantID: "System",
      type: ej.diagrams.UmlSequenceMessageType.Synchronous
    },
    // System replies to User with login response via Reply message
    {
      id: "MSG2", content: "Login Response", fromParticipantID: "System", toParticipantID: "User",
      type: ej.diagrams.UmlSequenceMessageType.Reply
    },
    // System sends log event to Logger via Asynchronous message
    {
      id: "MSG3", content: "Log Event", fromParticipantID: "System", toParticipantID: "Logger",
      type: ej.diagrams.UmlSequenceMessageType.Asynchronous
    },
    // System requests SessionManager to create session via Create message
    {
      id: "MSG4", content: "Create Session", fromParticipantID: "System", toParticipantID: "SessionManager",
      type: ej.diagrams.UmlSequenceMessageType.Create
    },
    // System requests SessionManager to delete session via Delete message
    {
      id: "MSG5", content: "Delete Session", fromParticipantID: "System", toParticipantID: "SessionManager",
      type: ej.diagrams.UmlSequenceMessageType.Delete
    },
    // System validates inputs itself via Self message
    {
      id: "MSG6", content: "Validate Inputs", fromParticipantID: "System", toParticipantID: "System",
      type: ej.diagrams.UmlSequenceMessageType.Self
    }
  ],
};
// Initializes diagram control
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '700px',
    // Specifies the model for the diagram
    model: umlSequenceDiagramModel,
    snapSettings: {constraints: ej.diagrams.SnapConstraints.None}
  },
  '#element'
);
