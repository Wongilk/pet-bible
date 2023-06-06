import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const PostEditor = ({ getContent }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    getContent(value);
  }, [value]);
  const toolbarOptions = [
    ["bold", "italic", "underline", "strike"],
    ["blockquote", "code-block"],

    [{ header: 1 }, { header: 2 }], // custom button values
    [{ list: "ordered" }, { list: "bullet" }],
    [{ script: "sub" }, { script: "super" }], // superscript/subscript
    [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
    [{ direction: "rtl" }], // text direction
    [{ size: ["small", false, "large", "huge"] }], // custom dropdown
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ color: [] }, { background: [] }], // dropdown with defaults from theme
    [{ font: [] }],
    [{ align: [] }, "image"],
    ["clean"],
  ];
  const modules = {
    toolbar: toolbarOptions,
  };
  return (
    <>
      <ReactQuill
        theme="snow"
        style={{ height: "30rem", marginTop: "1rem" }}
        value={value}
        onChange={setValue}
        modules={modules}
      />
    </>
  );
};

export default PostEditor;
