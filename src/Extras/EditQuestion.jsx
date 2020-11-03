import React from 'react';
import "./EditQuestion.css"

function EditQuestion() {
    return (
        <div>
            <input type="checkbox" id="check"/>
            <label for="check">
                <i className="fas fa-bars" id="btn"></i>
                <i className="fas fa-times" id="cancel"></i>
            </label>
        <div className="sidebar">
            <h3>Properties</h3>
            <ul>
                 <label htmlFor="Question">Questions</label> <br/>
                <input id="Question" type="text" 
                placeholder="How well do you fit into the company's culture"/> <br/>
                
                <input type="checkbox" name="Mandatory" id="Mandatory"/> 
                <label htmlFor="Mandatory">Make this question mandatory</label> <br/>
                
                <label htmlFor="Type">Answer Type</label><br/>
                <select id="Type" name="Type">
                    <option value="dropdown">Dropdown</option>
                    <option value="singleSelect">Multiple Choice(Single Select)</option>
                    <option value="multipleSelect">Multiple Choice(Multiple Select)</option>
                    <option value="shortAnswer">Short Answer</option>
                    <option value="longAnswer">Long Answer</option>
                    <option value="dateTime">Date/Time</option>
                </select>
            </ul>
        </div>
        </div>
        
    )
}

export default EditQuestion
