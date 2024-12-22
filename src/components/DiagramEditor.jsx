import React, { useRef, useEffect, useState } from "react";
import * as go from "gojs";

const DiagramEditor = () => {
  const diagramRef = useRef(null);
  const paletteRef = useRef(null);
  const [modelData, setModelData] = useState("");
  const [myDiagram,setMyDiagram] = useState(null)

  useEffect(() => {
    const $ = go.GraphObject.make;

    if (!diagramRef.current || !paletteRef.current) {
      console.error("Diagram or Palette container not found");
      return;
    }

    // Diagram Initialization
    const diagram = $(go.Diagram, diagramRef.current, {
      "undoManager.isEnabled": true,
      initialContentAlignment: go.Spot.Center,
      allowDrop: true, // Allow drag-and-drop from Palette
    });
    //
    setMyDiagram(diagram)
    // Node Template with Reduced Size and Improved Aesthetics
diagram.nodeTemplate = $(
    go.Node,
    "Spot", // Use Spot Panel for precise port placement
    {
      locationSpot: go.Spot.Center,
      resizable: true, // Allow nodes to be resized dynamically
      resizeObjectName: "SHAPE", // Resize the shape, not the whole node
    },
    new go.Binding("location", "location", go.Point.parse).makeTwoWay(go.Point.stringify),
    // Main Shape with Dynamic Sizing and Styling
    $(
      go.Shape,
      "RoundedRectangle",
      {
        name: "SHAPE", // Referenced for resizing
        fill: $(go.Brush, "Linear", { 0: "white", 1: "lightblue" }), // Gradient fill
        strokeWidth: 1,
        stroke: "gray", // Border color
      },
      new go.Binding("desiredSize", "size", go.Size.parse).makeTwoWay(go.Size.stringify) // Dynamic sizing
    ),
    // TextBlock for Node Label
    $(
      go.TextBlock,
      {
        margin: 5,
        editable: true, // Allow inline editing
        font: "bold 12px sans-serif", // Better font for aesthetics
        wrap: go.TextBlock.WrapFit, // Wrap text if it's too long
        textAlign: "center",
        overflow: go.TextBlock.OverflowEllipsis, // Add ellipsis for long text
      },
      new go.Binding("text", "name").makeTwoWay()
    ),
    // Port at Top-Left Corner
    $(go.Shape, "Circle", {
      width: 6,
      height: 6,
      fill: "blue",
      portId: "TL",
      fromLinkable: true,
      toLinkable: true,
      cursor: "pointer",
      fromSpot: go.Spot.TopLeft,
      toSpot: go.Spot.TopLeft,
      alignment: go.Spot.TopLeft,
    }),
    // Port at Top-Right Corner
    $(go.Shape, "Circle", {
      width: 6,
      height: 6,
      fill: "blue",
      portId: "TR",
      fromLinkable: true,
      toLinkable: true,
      cursor: "pointer",
      fromSpot: go.Spot.TopRight,
      toSpot: go.Spot.TopRight,
      alignment: go.Spot.TopRight,
    }),
    // Port at Bottom-Left Corner
    $(go.Shape, "Circle", {
      width: 6,
      height: 6,
      fill: "blue",
      portId: "BL",
      fromLinkable: true,
      toLinkable: true,
      cursor: "pointer",
      fromSpot: go.Spot.BottomLeft,
      toSpot: go.Spot.BottomLeft,
      alignment: go.Spot.BottomLeft,
    }),
    // Port at Bottom-Right Corner
    $(go.Shape, "Circle", {
      width: 6,
      height: 6,
      fill: "blue",
      portId: "BR",
      fromLinkable: true,
      toLinkable: true,
      cursor: "pointer",
      fromSpot: go.Spot.BottomRight,
      toSpot: go.Spot.BottomRight,
      alignment: go.Spot.BottomRight,
    })
  );
  
  

    // Link Template
    diagram.linkTemplate = $(
      go.Link,
      { routing: go.Link.AvoidsNodes, curve: go.Link.JumpOver },
      $(go.Shape), // Link line
      $(go.Shape, { toArrow: "Standard" }) // Arrowhead
    );

    // Context Menu for Diagram
    diagram.contextMenu = $(
      "ContextMenu",
      $("ContextMenuButton", $(go.TextBlock, "Add Node"), {
        click: (e) => {
          const point = diagram.lastInput.documentPoint;
          diagram.model.addNodeData({
            key: diagram.model.nodeDataArray.length + 1, // Unique key
            name: "New Node",
            location: go.Point.stringify(point),
          });
        },
      })
    );

    // Initial Model
    diagram.model = new go.GraphLinksModel(
      [
        { key: 1, name: "Main Function", location: "0 0" },
        { key: 2, name: "Why?", location: "150 0" },
      ],
      [{ from: 1, to: 2 }]
    );

    // Palette Initialization
    const palette = $(go.Palette, paletteRef.current, {
      nodeTemplate: diagram.nodeTemplate,
    });

    palette.model = new go.GraphLinksModel([
      { key: "P1", name: "Process" },
      { key: "D1", name: "Decision" },
    ]);

    return () => {
      if (diagram) diagram.div = null;
      if (palette) palette.div = null;
    };
  }, []);

  function exportDiagram(){
    const imageData = myDiagram.makeImage({
        scale: 1,
        background: "white",
        type: "image/jpeg",
        details: 1
      });

        // Create a temporary link element to download the image
    const link = document.createElement("a");
    link.href = imageData.src; // Set href to the image data
    link.download = "diagram.png"; // Set the desired filename
    link.click(); // Trigger the download
  }
  return (
    <div style={{ display: "flex" }}>
      {/* Palette */}
      <div
        ref={paletteRef}
        style={{
          width: "200px",
          height: "600px",
          border: "1px solid black",
          marginRight: "10px",
        }}
      ></div>

      {/* Diagram */}
      <div
        ref={diagramRef}
        style={{
          flexGrow: 1,
          height: "600px",
          border: "1px solid black",
        }}
      ></div>

      <button onClick={()=>exportDiagram()}>export</button>
    </div>
  );
};

export default DiagramEditor;
