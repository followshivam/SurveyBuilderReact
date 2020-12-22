import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "./TextEditor.css";


export class TextEditor2 extends Component {
    constructor(props){
        super(props);
        this.state={
            text: `<h2> Dear Team, </h2> <h3> We thank you for taking part in the survey. </h3>`
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(value) {
        this.setState({ 
                text:value
        })
      }

    modules = {
        toolbar:{
            container:[
        ['bold', 'italic', 'underline', 'strike'],       
        [{ 'list': 'bullet' },{ 'list': 'ordered'},{ 'indent': '+1' },{ 'indent': '-1'} ],
        [{ 'direction': 'rtl' }]
        ],
    },}   
        
    render() {
        return (
            <div>
                <ReactQuill
                className="text-editor"
                ref={(el)=> this.quill=el}
                value={this.state.text}
                onChange={(e)=> this.handleChange(e)}
                theme='snow'
                modules={this.modules}
                  />
            </div>
        )
    }
}

export default TextEditor2
