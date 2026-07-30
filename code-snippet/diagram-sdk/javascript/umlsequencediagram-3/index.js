// Define the UML Sequence Diagram model with participants and activation boxes
var model = {
  // Defines the participants involved in the sequence diagram
  participants: [
    {
      id: "User",
      content: "User",
      stereotype: ej.diagrams.UmlSequenceParticipantStereotype.Actor
    },
    {
      id: "System",
      content: "System",
      showDestructionMarker: true,
      // Activation boxes for System
      activationBoxes: [
        {
          id: "ActSystem", // Unique identifier for the activation box
          startMessageID: "MSG1", // Message ID that marks the start of the activation
          endMessageID: "MSG2" // Message ID that marks the end of the activation
        }
      ]
    }
  ],
  // Define messages exchanged between participants
  messages: [
    {
      id: "MSG1", content: "Login Request", fromParticipantID: "User", toParticipantID: "System",
      type: ej.diagrams.UmlSequenceMessageType.Synchronous
    },
    {
      id: "MSG2", content: "Login Response", fromParticipantID: "System", toParticipantID: "User",
      type: ej.diagrams.UmlSequenceMessageType.Reply
    }
  ],
};
// Initializes diagram control
var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    // Specifies the model for the diagram
    model: model,
    snapSettings: {constraints: ej.diagrams.SnapConstraints.None}
  },
  '#element'
);
