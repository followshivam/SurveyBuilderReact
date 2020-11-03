import React from 'react'
import '../components.css';
import SurveyDefinition from "./SurveyDefinition/SurveyDefinition";
import CreateQuestions from "./CreateQuestions/CreateQuestions";
import Publish from "./Publish/Publish";
import Results from "./Results/Results";
import {Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function SurveyBodyHeader() {

    const { t } = useTranslation();

    return (
        <div className="main-surveyBodyHeader">
        <div className="surveyBodyHeader">
            <NavLink activeStyle={{ textAlign:"center", borderBottom: "2px solid #0072C6", marginTop:"1.1em",
            paddingBottom:"0.9em", fontWeight: "bold",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/SurveyDefinition"> {t('SURVEY_DEFINITION')} </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"1.1em",
            paddingBottom:"0.9em", fontWeight: "bold",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/CreateQuestions"> {t('CREATE_QUESTIONS')} </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"1.1em", 
            paddingBottom:"0.9em",  fontWeight: "bold",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/Publish"> {t('PUBLISH')}  </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"1.1em", 
            paddingBottom:"0.9em", fontWeight: "bold",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/Results"> {t('RESULTS')} </NavLink>
        </div>
        <div className="options">
            <button>{t('QUESTION_SET')}</button>
            <button>{t('THEMES')}</button>
        </div>
        </div>
    )
}

export default SurveyBodyHeader
