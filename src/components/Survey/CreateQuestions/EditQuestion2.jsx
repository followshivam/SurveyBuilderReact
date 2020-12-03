import React,{useState, useEffect} from 'react'
import Select from '@material-ui/core/Select';
import "./EditQuestion2.css";
import { useTranslation } from 'react-i18next';
import Deleteg from "../../../iconComponents/Deleteg.tsx";
import Edit from "../../../iconComponents/Edit.tsx";
import { uuid } from 'uuidv4';


function EditQuestion2(props) {
    
    const { t } = useTranslation();
    // const [questions,setQuestions]=useState([]);
    const [quesNo,setQuesNo]=useState(1);
    const [scoring,setScoring]=useState(false);
    const [validQuestion, setValidity] = useState(false);
    // const [optionName,setOptionName]=useState("");
    // const [optionValue,setOptionValue]=useState("");
    // const [optionScore,setOptionScore]=useState("");
    const [answerType, setAnswerType] = useState(false);
    const [optionCheck, setOptionCheck] = useState(false);
    const [valueCheck, setValueCheck] = useState(false);
    const [scoringCheck, setScoringCheck] = useState(false);
    const [rowAdded, setRowAdded] = useState(false);
    const [optionsUpdateAdd,setOptionsUpdateAdd]=useState({
        action:"",
        updateId:""
    });

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
        options:{},
        logic:[]
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
                ...(props.pageData[props.selectedIdd])[props.selectedId]
            });
            
        setOptions({
            ...(props.pageData[props.selectedIdd])[props.selectedId].options
            });
            
        }
        
    }, [props.pageData, props.selectedId, props.selectedIdd])

    function handleValidation(){
            setAnswerType(false);
            setOptionCheck(false);
            setValueCheck(false);
            setScoringCheck(false);

        if(!validQuestion){
                    setValidity(true);
                    return;
                    }
    }
    
    function handleAnswerType(){
                
        setValidity(false);
        setOptionCheck(false);
        setValueCheck(false);
        setScoringCheck(false);
       
   if(!answerType){
        setAnswerType(true);
        return;
    }

}
function handleOptionName() {
        
        setValidity(false);
        setAnswerType(false);                   
        setValueCheck(false);
        setScoringCheck(false);
       
   if(!optionCheck){
        setOptionCheck(true);
        return;
    }
}
function handleValue(){

    
        setValidity(false);
        setAnswerType(false);
        setOptionCheck(false);
        setScoringCheck(false);
      
   if(!valueCheck){
        setValueCheck(true);
        return;
    }
}
function handleScoring(){
        setValidity(false);
        setAnswerType(false);
        setOptionCheck(false);
        setValueCheck(false);
      
        
 if(!scoringCheck){
        setScoringCheck(true);
        return;
}
}

    function handleChange(event){
        // event.preventDefault();
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
        console.log("handle options called:",option.score);
        // setRowAdded(false);
        // if(option.name.length===0){
        //     console.log("name: ",option.name.length);
        //     handleOptionName();
        //    return;
        // }
        // else if(option.value.length===0){
        //     console.log("value: ",option.value.length);
        //     setOptionCheck(false);
        //     handleValue();
        //     return;
        // }
        // else if(scoring && option.score<=0){
        //     console.log("Score: ");
        //     setValueCheck(false);
        //     handleScoring();
        //     return;
        // }
        if(optionsUpdateAdd.action==="update"){
            
            setOptions((prev)=>{
                return{
                    ...prev,[optionsUpdateAdd.updateId]:{
                        "name":option.name,
                        "value":option.value,
                        "score":option.score
                    }
                     }});

            // delete options[optionsUpdateAdd.updateId];

            setQuesData((prev)=>{
                return{
                ...prev, options:{
                    ...prev.options, [optionsUpdateAdd.updateId]:{
                    "name":option.name,
                    "value":option.value,
                    "score":option.score}
            }}});
        }
        // setValueCheck(false);
        // setScoringCheck(false);
        // setRowAdded(false);
        
        // console.log("yes");
        else{
        const newId=uuid();
        setOptions((prev)=>{
            return{
                ...prev,[newId]:{
                    "name":option.name,
                    "value":option.value,
                    "score":option.score
                }
                 }});
                 setQuesData((prev)=>{
                    return{
                    ...prev, options:{
                        ...prev.options, [newId]:{
                        "name":option.name,
                        "value":option.value,
                        "score":option.score}
                }}});
            }
                
        setOption({
                "name":"",
                "value":"",
                "score":""
        })
    }

    function handleOptionDelete(id){
        console.log(id);
        delete options[id];
        console.log(options);
        setQuesData((prev)=>{
            return{
             ...prev, options:{...options
        }}});
    }

    function handleOptionEdit(id){
        console.log(id);
        setOption({
            "name":options[id].name,
            "value":options[id].value,
            "score":options[id].score
        })
        setOptionsUpdateAdd(()=>{
            return{
                "action":"update",
                updateId:id
            }
        });
    }

    function handleSave(event){
        event.preventDefault();
        var quesRegex = /^[0-9a-zA-Z%\.]+[0-9a-zA-Z\\s?\.]*/;
        var ques = quesData.question.trim();
        console.log(quesData.type===''?'hi':'hello');
        if(quesData.question.length<1){
            setRowAdded(false);
            setOptionCheck(false);
            setValueCheck(false);
            setScoringCheck(false);
            setAnswerType(false);
            console.log(quesData.question);
            handleValidation();
            return;
        }
        else if (quesData.type==='Select' || quesData.type===''){
            setRowAdded(false);
            setOptionCheck(false);
            setValueCheck(false);
            setScoringCheck(false);
            console.log("length:",quesData.type.length);
            handleAnswerType();
            return;        
        }
        else if(quesData.type==='dropdown' || quesData.type==='single-select' || quesData.type==='multi-select'){
            setValidity(false);
            setAnswerType(false);
            setOptionCheck(false);
            setValueCheck(false);
            setScoringCheck(false);
            if(Object.keys(options).length<1){
            setRowAdded(true);
                return;
            }
        }
        console.log(option.name.length,option.value,quesData.scoring);
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
    console.log("size:",Object.keys(options).length,"   ",option.name.length,option.value.length,option.score);


    return (
        <>
        <div className="shade-main2"></div>
        <div className="question-popup">
        {/* <form>  */}
        <p className="ques-heading">{t('PROPERTIES')}</p>
        <p>{t('QUESTION')}</p>
        <input required className="question-input" name="question" onChange={handleChange} required 
        value={quesData.question} type="text" placeholder={t('QUESTION_PLACEHOLDER')}/> <br/> <br/>

        {validQuestion?<p className="validate-Question-edit" > {t('ADD_QUESTION_INVALID_MSG')} </p>:null } 
        
        <input name="isMandatory" value="true" type="checkbox" onChange={handleChange} required id="mandatory"/> <label htmlFor="mandatory">{t('MAKE_QUESTION_MANDATORY')}</label> <br/> <br/>
        
        <p>{t('ANSWER_TYPE')}</p>
        <Select
              className="selectClass"
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
            <label htmlFor="scoring" style={{ marginLeft:"2px"}}>
            Enable Scoring for the Answers.</label> <br/> <br/>
            <p style={{ display:"inline"}} >Option</p> 
            <p style={{marginLeft:"44%", display:"inline"}}>  Value</p> 
            {scoring? <p style={{marginLeft:"22%", display:"inline"}} > Scoring</p>: null} <br/>
                
            {/* <form > */}
                <input className="optionInput" required type="text" name="name" value={option.name} onChange={handleOption}/> 
                <input className="valueInput" required type="text" name="value" value={option.value} onChange={handleOption}/>
                {scoring?
                <input className="scoreInput" type="number" min="-2" max="4" placeholder="0" value={option.score} name="score" onChange={handleOption}/>
                 : null}
                <button className="plusButton" onClick={handleOptions} type="submit" ><i class='fas fa-plus'></i></button> <br/> <br/>

            {/* </form> */}
            {/* <p style={{margin:"1em 4em", display: "inline"}}>Option</p> <p style={{margin:"1em 6em", display: "inline"}}>Value</p> <br/> */}

            <table className="optionsTable">
                <thead>
                    <tr  >
                        <th style={{width:"48.5%"}} className="optionsTH" >Option</th>
                        <th style={{width:"28%"}} className="optionsTH" >Value</th>
                        {scoring? 
                        <th style={{width:"14%"}} className="optionsTH" >Score</th>: null}
                    </tr>
                </thead>
                <tbody>
                {Object.keys(options).map(id=>{
                    return(
                    <tr key={id}>
                        <td className="optionsTD" style={{fontWeight:"lighter"}} > {options[id].name}</td>
                        <td className="optionsTD" style={{fontWeight:"lighter"}}> {options[id].value}</td>
                        {scoring?
                        <td className="optionsTD" style={{fontWeight:"lighter"}}> {options[id].score}</td> :null}
                        <div className="optionsTD" style={{}} onClick={() => handleOptionEdit(id)} > <Edit /></div>
                        <div className="optionsTD" style={{}} onClick={() => handleOptionDelete(id)} > <Deleteg /></div>
                        
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

            {answerType ? <p className="validate-Question-edit">{t('ANSWER_TYPE_INVALID_MSG')} </p> : null}
            {rowAdded ?  <p className="validate-Question-edit">{t('ADD_ROW_MSG')} </p>: null  }
            {optionCheck ? <p className="validate-Question-edit"> {t('OPTION_FIELD_MSG')} </p> : null}
            {valueCheck ? <p className="validate-Question-edit"> {t('VALUE_FIELD_MSG')} </p> : null}
            {scoringCheck ? <p className="validate-Question-edit"> {t('SCORE_MSG')} </p> : null}
    

            
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
        </>
    )
}

export default EditQuestion2;
