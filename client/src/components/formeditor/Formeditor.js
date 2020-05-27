import React from "react";
import { Editor } from "@tinymce/tinymce-react";

class Editor1 extends React.Component {
  //   handleEditorChange = (e) => {
  //     console.log("Content was updated:", e.target.getContent());
  //   };

  render() {
    return (
      <Editor
        initialValue="<p>Initial content</p>"
        apiKey="wwkmp2fw21ycmhgtkucd5pvy3kp32a35a99edhi5o4nt2nku"
        outputFormat="text"
        init={{
          height: 200,
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
