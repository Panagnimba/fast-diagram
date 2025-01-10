import React, { useRef, useEffect, useState } from "react";
import * as go from "gojs";
import { jsPDF } from 'jspdf';
import "./diagramEditor.css"

const DiagramEditor = () => {
  const diagramRef = useRef(null);
  const paletteRef = useRef(null);
  const [modelData, setModelData] = useState("");
  const [myDiagram, setMyDiagram] = useState(null)

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
          desiredSize: new go.Size(100, 50) // Set default size to 100px by 100px
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

  function exportDiagram(format) {
    switch (format) {
      case 'pdf':
        exportAsPDF();
        break;
      case 'jpeg':
        exportAsImage('image/jpeg');
        break;
      case 'png':
        exportAsImage('image/png');
        break;
      case 'svg':
        exportAsSVG();
        break;
      case 'spreadsheet':
        exportAsSpreadsheet();
        break;
      default:
        console.error("Unsupported format: " + format);
    }
  }

  function exportAsImage(type) {
    const imageData = myDiagram.makeImage({
      scale: 1,
      background: "white",
      type: type,
      details: 1
    });

    const link = document.createElement("a");
    link.href = imageData.src; // Set href to the image data
    link.download = `diagram.${type === 'image/jpeg' ? 'jpeg' : 'png'}`; // Set the desired filename
    link.click(); // Trigger the download
  }

  function exportAsSVG() {
    const svgData = myDiagram.makeSvg({
      scale: 1,
      background: "white"
    });

    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url; // Set href to the SVG blob URL
    link.download = "diagram.svg"; // Set the desired filename
    link.click(); // Trigger the download

    // Clean up the URL object after use
    URL.revokeObjectURL(url);
  }

  function exportAsPDF() {
    // Assuming you have a library like jsPDF or pdf-lib for PDF generation
    const pdfDoc = new jsPDF();

    // Create an image from the diagram
    const imageData = myDiagram.makeImage({
      scale: 1,
      background: "white",
      type: "image/jpeg",
      details: 1
    });

    pdfDoc.addImage(imageData.src, 'JPEG', 10, 10); // Add the image to the PDF at position (10,10)

    pdfDoc.save("diagram.pdf"); // Save the PDF with the desired filename
  }

  function exportAsSpreadsheet() {
    // Convert your diagram data into a format suitable for spreadsheets (like CSV)

    const csvContent = "data:text/csv;charset=utf-8,"
      + "Node Name,Node Type\n"
      + myDiagram.model.nodeDataArray.map(node => `${node.name},${node.type}`).join("\n");

    const encodedUri = encodeURI(csvContent);

    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "diagram.csv"); // Set the desired filename
    document.body.appendChild(link); // Required for Firefox

    link.click(); // Trigger the download
  }

  return (
    <div className="editor-wrap">
      {/* Palette */}
      <div
        ref={paletteRef}
        className="editor"
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
      <select
        id="export-options"
        className="export-option-btn"
        onChange={(e) => {
          const format = e.target.value;
          if (format) {
            exportDiagram(format);
            e.target.value = ""; // Reset the select box after selection
          }
        }}
      >
        <option value="" disabled selected>Select an option</option>
        <option value="pdf">Export as PDF</option>
        <option value="png">Export as png</option>
        <option value="jpeg">Export as jpeg</option>
        <option value="svg">Export as svg</option>
        <option value="spreadsheet">Spreadsheet format</option>
      </select>

    </div>
  );
};

export default DiagramEditor;
