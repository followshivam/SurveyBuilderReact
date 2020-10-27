import React,{useState} from 'react'
import Select from '@material-ui/core/Select';
import "./EditQuestion2.css";

function EditQuestion2(props) {
    
    const [questions,setQuestions]=useState([]);
    
    const [quesData, setQuesData]=useState({
        question:"",
        isMandatory:"",
        id:"",
        type:""

    });

    const [quesNo,setQuesNo]=useState(1);

    function handleChange(event){
        const {name,value}=event.target;
        setQuesData((prev)=>{
            return{
            ...prev, [name]:value, id:quesNo
            }})
    }
    function handleSave(event){
        event.preventDefault();
        setQuestions([
            ...questions,
            {
                id:quesData.id,
                question:quesData.question,
                isMandatory:quesData.isMandatory,
                type:quesData.type
             }
        ]);
        setQuesData({
            question:"",
        isMandatory:"",
        id:"",
        type:""
        });
        setQuesNo(quesNo+1);
        props.actionSave();
        props.getData(quesData);
    }
    
    // console.log({quesData});
    console.log({questions});

    return (
        <div className="question-popup">
        <p class="ques-heading"> Properties</p>
        <p>Question</p>
        <input required className="question-input" name="question" onChange={handleChange} value={quesData.question} type="text" placeholder="Type your question here"/> <br/> <br/>
        
        <input name="isMandatory" type="checkbox" onChange={handleChange} id="mandatory"/> <label htmlFor="mandatory">Make this question mandatory.</label> <br/> <br/>
        
        <p>Answer Type</p>
            <Select
            value={quesData.type}
              onChange={handleChange}
              native
              label="type"
              inputProps={{
              name: "type",
              id: "type",
            }}>
            <option aria-label="Select" value="Select" />
            <option value="dropdown">Dropdown</option>
            <option value="single-select">Multiple Choice(Single Select)</option>
            <option value="multi-select">Multiple Choice(Multi Select)</option>
            <option value="short">Short Answer</option>
            <option value="long">Long Answer</option>
            <option value="date-time">Date/Time</option>
            </Select> <br/> <br/>
            <div className="sc-buttons">
                <button className="cancel-button">Cancel</button>
                <button onClick={handleSave} className="save-button">Save</button>
            </div>
            <ul>
             {questions.map(q => (
            <li key={q.id}>{q.id} {q.question}</li>
        ))}
      </ul>
        </div>
    )
}

export default EditQuestion2
