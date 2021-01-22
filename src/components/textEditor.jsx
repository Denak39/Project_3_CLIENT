import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

class EditorConvertToHTML extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange: Function = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={this.props.value}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          onEditorStateChange={this.props.onChange}
        />
        <textarea
          disabled
          hidden
          value={draftToHtml(
            convertToRaw(this.props.value.getCurrentContent())
          )}
        />
        <div
          hidden
          dangerouslySetInnerHTML={{
            __html: draftToHtml(
              convertToRaw(this.props.value.getCurrentContent())
            ),
          }}
        ></div>
      </div>
    );
  }
}
export default EditorConvertToHTML;
