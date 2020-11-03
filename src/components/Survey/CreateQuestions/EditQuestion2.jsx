import React,{useState} from 'react'
import Select from '@material-ui/core/Select';
import "./EditQuestion2.css";
import { useTranslation } from 'react-i18next';

function EditQuestion2(props) {
    
    const { t } = useTranslation();
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
        setQuesNo((quesNo+1));
        props.actionSave();
        props.getData(quesData);
    }
    
    // console.log({quesData});
    console.log({questions});

    return (
        <div className="question-popup">
        <p className="ques-heading">{t('PROPERTIES')}</p>
        <p>{t('QUESTION')}</p>
        <input required className="question-input" name="question" onChange={handleChange} value={quesData.question} type="text" placeholder={t('QUESTION_PLACEHOLDER')}/> <br/> <br/>
        
        <input name="isMandatory" type="checkbox" onChange={handleChange} id="mandatory"/> <label htmlFor="mandatory">{t('MAKE_QUESTION_MANDATORY')}</label> <br/> <br/>
        
        <p>{t('ANSWER_TYPE')}</p>
            <Select
            value={quesData.type}
              onChange={handleChange}
              native
              label="type"
              inputprops={{
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
            <div className="sc-buttons">
                <button className="cancel-button">{t('CANCEL_BTN')}</button>
                <button onClick={handleSave} className="save-button">{t('SAVE_BTN')}</button>
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
