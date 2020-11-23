import React, { Component } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";

const wrapperStyle = {
  border: "1px solid gray", // add some border
  width: "400px", // set fixed width
  margin: "auto", // aligns the component in the middle
  textAlign: "left" // start the text from left hand side
};

class MyEditor extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createEmpty() };
    this.onChange = editorState => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }

  handleKeyCommand(command) {
    const { editorState } = this.state;
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      this.onChange(newState);
      return true;
    }
    return false;
  }

  render() {
    return (
      <div>
        <button onClick={() => this.handleKeyCommand("bold")}>B</button>
        <button onClick={() => this.handleKeyCommand("italic")}>I</button>
        <button onClick={() => this.handleKeyCommand("underline")}>
          U
        </button>

        <div style={wrapperStyle}>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            handleKeyCommand={this.handleKeyCommand}
          />
        </div>
      </div>
    );
  }
}

export default MyEditor;