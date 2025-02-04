import React, { useState, useEffect } from "react";

import "react-quill/dist/quill.snow.css"; 
import './RichTextEditors.css'
import ReactQuill from "react-quill";

const RichTextEditors = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    const savedContent = localStorage.getItem("richTextContent");
    if (savedContent) {
      setContent(savedContent);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("richTextContent", content);
  }, [content]);

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "list",
    "bullet",
  ];

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, false] }],
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
    ],
  };

  

  return (
    <div className="container-rich">
      <h2>Rich Text Editor</h2>
      <ReactQuill
      className="txt"
        theme="snow" 
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
        placeholder="Start typing..."
      />
      <div className="prev">
        <h2>Preview:</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};

export default RichTextEditors;

