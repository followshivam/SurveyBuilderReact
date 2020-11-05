import React,{useState, useEffect} from 'react'
import Select from '@material-ui/core/Select';
import "./EditQuestion2.css";
import { useTranslation } from 'react-i18next';

function EditQuestion2(props) {
    
    const { t } = useTranslation();
    // const [questions,setQuestions]=useState([]);
    const [quesNo,setQuesNo]=useState(1);
    const [scoring,setScoring]=useState(false);
    // const [optionName,setOptionName]=useState("");
    // const [optionValue,setOptionValue]=useState("");
    // const [optionScore,setOptionScore]=useState("");
    const [option,setOption]=useState({
        name:"",
        value:"",
        score:""
    });
    const [options,setOptions]=useState({});
    const initialValues={
        question:"",
        isMandatory:"",
        id:"",
        type:"",
        scoring:"",
        options:{}
    }

    const [quesData, setQuesData]=useState(initialValues);

    useEffect(() => {
        if(props.selectedId===""){
            setQuesData({
                ...initialValues
            })
        } else
        {
            setQuesData({
                ...props.mainfetch[props.selectedId]
            });
            
        }
        
    }, [props.mainfetch, props.selectedId])


    function handleChange(event){
        event.preventDefault();
        const {name,value}=event.target;
        if(name==="scoring"){
            setScoring(!scoring);
        }
        setQuesData((prev)=>{
            return{
            ...prev, [name]:value,
            // id:quesNo
            }})
    }
    // function handleOptionName(event){
    //     event.preventDefault();
    //     setOption(event.target.value);
    // }
    // function handleOptionValue(event){
    //     event.preventDefault();
    //     setOptionValue(event.target.value);
    // }
    // function handleOptionScore(event){
    //     event.preventDefault();
    //     setOptionScore(event.target.value);
    // }
    function handleOption(event){
        event.preventDefault();
        const {name,value}=event.target;
        setOption((prev)=>{
            return{
            ...prev, [name]:value
            }
        })
    }
    function handleOptions(event){
        event.preventDefault();
        console.log("handle options called");
        setOptions((prev)=>{
            return{
                ...prev,[option.name]:{"value":option.value,
        "score":option.score}
                 }});
        setQuesData((prev)=>{
            return{
            ...prev, options:{...prev.options, [option.name]:{"value":option.value,
            "score":option.score}
            // id:quesNo
        }}})                 
    }
    
    function handleSave(event){
        event.preventDefault();
        // setQuestions([
        //     ...questions,
        //     {
        //         id:quesData.id,
        //         question:quesData.question,
        //         isMandatory:quesData.isMandatory,
        //         type:quesData.type,
        //         scoring:quesData.scoring,
        //         options:options
        //      }
        // ]);
        setQuesData({
            question:"",
            isMandatory:"",
            id:"",
            type:"",
            scoring:"",
            options:{}
        });
        setOptions({});
        setQuesNo((quesNo+1));
        props.actionSave();
        props.getData(quesData);
    }
    
    // console.log({quesData});
    console.log({quesData});
    console.log({options});
    

    return (
        <div className="question-popup">
        {/* <form>  */}
        <p className="ques-heading">{t('PROPERTIES')}</p>
        <p>{t('QUESTION')}</p>
        <input required className="question-input" name="question" onChange={handleChange} required 
        value={quesData.question} type="text" placeholder={t('QUESTION_PLACEHOLDER')}/> <br/> <br/>
        
        <input name="isMandatory" value="true" type="checkbox" onChange={handleChange} required id="mandatory"/> <label htmlFor="mandatory">{t('MAKE_QUESTION_MANDATORY')}</label> <br/> <br/>
        
        <p>{t('ANSWER_TYPE')}</p>
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
            <option value="dropdown">{t('DROPDOWN')}</option>
            <option value="single-select">{t('MCQ_SS')}</option>
            <option value="multi-select">{t('MCQ_MS')}</option>
            <option value="short">{t('SHORT_ANSWER')}</option>
            <option value="long">{t('LONG_ANSWER')}</option>
            <option value="date-time">{t('DATE_TIME')}</option>
            </Select> <br/> <br/>
            
            {quesData.type==="single-select" || quesData.type==="multi-select" ||quesData.type==="dropdown" ?
            <div>
            <h3 style={{fontWeight:"900"}}> Options</h3> 
            <input name="scoring" type="checkbox" value="true"
            onChange={handleChange} id="scoring"/>
            <label htmlFor="scoring">
            Enable Scoring for the Answers.</label> <br/> <br/>
            <p style={{marginLeft:"5em", display:"inline"}} >Option</p> <p style={{marginLeft:"6em", display:"inline"}}>  Value</p> 
            {scoring? <p style={{marginLeft:"6em", display:"inline"}} > Scoring</p>: null} <br/>
                
            {/* <form > */}
                <input required type="text" name="name" onChange={handleOption}/> 
                <input required type="text" name="value" onChange={handleOption}/>
                {scoring?
                <input type="number" min="-2" max="4" placeholder="0" name="score" onChange={handleOption}/>
                 : null}
                <button onClick={handleOptions} type="submit" >+</button> <br/> <br/>

            {/* </form> */}
            <p style={{margin:"1em 4em", display: "inline"}}>Option</p> <p style={{margin:"1em 6em", display: "inline"}}>Value</p> <br/>

            <table className="optionsTable">
                <thead>
                    <tr  >
                        <th className="optionsTH" >Option</th>
                        <th className="optionsTH" >Value</th>
                        {scoring? 
                        <th className="optionsTH" >Score</th>: null}
                    </tr>
                </thead>
                <tbody>
                {Object.keys(options).map(id=>{
                    return(
                    <tr key={id}>
                        <td className="optionsTD" > {id}</td>
                        <td className="optionsTD" > {options[id].value}</td>
                        {scoring?
                        <td className="optionsTD" > {options[id].score}</td> :null}
                    </tr>
                    )
                })}
                </tbody>
            </table>
            </div> : null }

            {/* {quesData.type==="dropdown" ? 
            <div>
                Add Options here
            </div>
            : null } */}

            {/* <div> {Object.keys(option).map(id=>{
                    return(
                        <div key={id}>
                        <p style={{margin:"1em 4em", display: "inline"}}> {option[id][0]}  </p>  <p style={{margin:"1em 4em", display: "inline"}} > {option[id].value} {option[id].score} &nbsp;  </p> 
                        </div>
                    )
                })} </div> */}

            


            <div className="sc-buttons">
                <button onClick={props.handleCheck} className="cancel-button">{t('CANCEL_BTN')}</button>
                <button onClick={handleSave} className="save-button">{props.selectedId==="" ? t('SAVE_BTN') :"Update"}</button>
            </div>
            {/* <ul>
             {questions.map(q => (
            <li key={q.id}>{q.id} {q.question}</li>
            ))}
            </ul> */}
            {/* </form> */}
        </div>
    )
}

export default EditQuestion2;
