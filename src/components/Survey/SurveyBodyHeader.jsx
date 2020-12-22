import React, {useState, lazy, Suspense} from 'react'
// import '../components.css';
import "./CreateQuestions/EditQuestion2.css";

import SurveyDefinition from "./SurveyDefinition/SurveyDefinition";
import {Route, BrowserRouter as Router, Switch, NavLink, Redirect } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
const CreateQuestions = lazy(() => import("./CreateQuestions/CreateQuestions"));
const Publish = lazy(() => import("./Publish/Publish"));
const Results = lazy(() => import("./Results/Results"));
const Themes = lazy(() => import("./Themes"));
const Ptitle = lazy(() => import("./Ptitle"));

function SurveyBodyHeader() {

    const { t } = useTranslation();
    const [showThemes, setShowThemes]=useState(false);
    const [showQuesSet,setShowQuesSet]=useState(false);

    function handleThemes(){
        setShowThemes(!showThemes);
        // return <Redirect to='/surveydesigner/' />
    }
    function handleQuesSet(){
        setShowQuesSet(!showQuesSet);
    }

    return (
        <div className="main-surveyBodyHeader">
        <div className="surveyBodyHeader">
            <NavLink activeStyle={{ textAlign:"center", borderBottom: "2px solid #0072C6", marginTop:"0.9em",
            paddingBottom:"0.7em", fontWeight: "600",color: "#0072C6"
  }} activeClassName="selected" className="links" exact  to="/surveydesigner/survey-definition"> {t('SURVEY_DEFINITION')} </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"0.9em",
            paddingBottom:"0.7em", fontWeight: "600",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/surveydesigner/create-questions"> {t('CREATE_QUESTIONS')} </NavLink>
            {/* <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"0.9em", 
            paddingBottom:"0.7em",  fontWeight: "600",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/publish"> {t('PUBLISH')}  </NavLink> */}
            {/* <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"0.9em", 
            paddingBottom:"0.7em", fontWeight: "600",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/results"> {t('RESULTS')} </NavLink> */}
        </div>
        <div className="options">
            <button onClick={handleQuesSet}>{t('QUESTION_SET')}</button>
            {/* <button onClick={handleThemes}>{t('THEMES')}</button> */}

            <button onClick={handleThemes}>
            {/* <NavLink activeClassName="selected" className="links" to="/surveydesigner/themes"> {t('THEMES')} </NavLink> */}
            {t('THEMES')}
            </button>
            
            {showThemes? <div > <Themes/>
            <p className="cancel-themes-button" onClick={handleThemes}><i className="fas fa-times" id="cancel-icon"></i></p>
                
                </div>
             :null }
            {/* {showQuesSet? <p className="cancel-quesSet-button" onClick={handleQuesSet}><i className="fas fa-times" id="cancel-icon"></i></p> :null}  */}

            {/* {showThemes? <Themes/> : null} */}
            {showQuesSet? <Ptitle handleQuesSet={handleQuesSet} /> :null}
        </div>
        </div>
    )
}

export default SurveyBodyHeader
