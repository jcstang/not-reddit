import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import "./formeditor.css";

class Editor1 extends React.Component {
  //   handleEditorChange = (e) => {
  //     console.log("Content was updated:", e.target.getContent());
  //   };

  render() {
    return (
      <Editor
        className="height"
        initialValue="<p></p>"
        apiKey="wwkmp2fw21ycmhgtkucd5pvy3kp32a35a99edhi5o4nt2nku"
        outputFormat="text"
        init={{
          menubar: false,
          plugins: [
            "advlist autolink lists link image",
            "charmap print preview anchor help",
            "searchreplace visualblocks code",
            "insertdatetime media table paste wordcount",
          ],
          toolbar:
            "undo redo | bold italic | bullist numlist outdent indent | help",
        }}
        onChange={this.props.handleEditorChange}
      />
    );
  }
}

export default Editor1;
