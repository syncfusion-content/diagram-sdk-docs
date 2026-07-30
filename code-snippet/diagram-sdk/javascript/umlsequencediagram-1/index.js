// Define the model for the UML Sequence Diagram
var umlSequenceDiagramModel = {
  // Define the participants involved in the UML Sequence Diagram
  participants: [
    {
      id: "User", // Unique identifier for the participant
      content: "User", // Label or name of the participant
      stereotype: ej.diagrams.UmlSequenceParticipantStereotype.Actor // Indicates that the participant is an actor
    },
    {
      id: "System", // Unique identifier for the participant
      content: "System", // Label or name of the participant
      showDestructionMarker: true, // Flag to show destruction marker at the end of the lifeline
    }
  ],
};

var diagram = new ej.diagrams.Diagram(
  {
    width: '100%',
    height: '600px',
    // Specifies the model for the diagram
    model: umlSequenceDiagramModel,
    snapSettings: {constraints: ej.diagrams.SnapConstraints.None}
  },
  '#element'
);



