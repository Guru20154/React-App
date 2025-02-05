import React, { useState, useEffect } from "react";
import { Container, Typography, Button } from "@mui/material";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Import styles for Quill

const RichTextEditor = () => {
  const [text, setText] = useState(() => {
    return localStorage.getItem("user") || "";
  });

  const [draftText, setDraftText] = useState(text);

  // Save to localStorage on Submit
  const handleSave = () => {
    setText(draftText);
    localStorage.setItem("user", draftText);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom sx={{ color: "#1976d5" }}>
        Rich Text Editor (Save on Submit)
      </Typography>

      <ReactQuill
        value={draftText}
        onChange={setDraftText}
        modules={RichTextEditor.modules}
        formats={RichTextEditor.formats}
        theme="snow" // Quill's default theme
        style={{
          border: "1px solid #1976d5", // Border color
          color: "#1976d5", // Text color
          
        }}
      />

      <Button
        variant="contained"
        color="primary"
        sx={{ mt: 2 }}
        onClick={handleSave}
      >
        Submit
      </Button>
    </Container>
  );
};

// Editor toolbar modules
RichTextEditor.modules = {
  toolbar: [
    [{ header: [1, 2, false] }], // Header levels
    ["bold", "italic", "underline"], // Formatting options
    [{ list: "ordered" }, { list: "bullet" }], // Lists
    ["link"], // Hyperlink
    ["clean"], // Remove formatting
  ],
};

// Allowed formats
RichTextEditor.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "list",
  "bullet",
  "link",
];

export default RichTextEditor;
