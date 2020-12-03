import React, {useState} from 'react'
import '../components.css';
import SurveyDefinition from "./SurveyDefinition/SurveyDefinition";
import CreateQuestions from "./CreateQuestions/CreateQuestions";
import Publish from "./Publish/Publish";
import Results from "./Results/Results";
import {Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import Themes from "./Themes";
import Ptitle from './Ptitle';


function SurveyBodyHeader() {

    const { t } = useTranslation();
    const [showThemes, setShowThemes]=useState(false);
    const [showQuesSet,setShowQuesSet]=useState(false);

    function handleThemes(){
        setShowThemes(!showThemes);
    }
    function handleQuesSet(){
        setShowQuesSet(!showQuesSet);
    }

    return (
        <div className="main-surveyBodyHeader">
        <div className="surveyBodyHeader">
            <NavLink activeStyle={{ textAlign:"center", borderBottom: "2px solid #0072C6", marginTop:"0.9em",
            paddingBottom:"0.7em", fontWeight: "600",color: "#0072C6"
  }} activeClassName="selected" className="links" exact  to="/survey-definiton"> {t('SURVEY_DEFINITION')} </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"0.9em",
            paddingBottom:"0.7em", fontWeight: "600",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/create-questions"> {t('CREATE_QUESTIONS')} </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"0.9em", 
            paddingBottom:"0.7em",  fontWeight: "600",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/publish"> {t('PUBLISH')}  </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"0.9em", 
            paddingBottom:"0.7em", fontWeight: "600",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/results"> {t('RESULTS')} </NavLink>
        </div>
        <div className="options">
            <button onClick={handleQuesSet}>{t('QUESTION_SET')}</button>
            {/* <button onClick={handleThemes}>{t('THEMES')}</button> */}

            <button onClick={handleThemes}>
            {/* <NavLink activeClassName="selected" className="links" to="/Themes"> {t('THEMES')} </NavLink> */}
            {t('THEMES')}
            </button>
            
            {showThemes? <p className="cancel-themes-button" onClick={handleThemes}><i className="fas fa-times" id="cancel-icon"></i></p> :null }
            {/* {showQuesSet? <p className="cancel-quesSet-button" onClick={handleQuesSet}><i className="fas fa-times" id="cancel-icon"></i></p> :null}  */}

            {showThemes? <Themes/> : null}
            {showQuesSet? <Ptitle handleQuesSet={handleQuesSet} /> :null}
        </div>
        </div>
    )
}

export default SurveyBodyHeader
