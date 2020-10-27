import React from 'react'
import '../components.css';
import SurveyDefinition from "./SurveyDefinition";
import CreateQuestions from "./CreateQuestions";
import Publish from "./Publish";
import Results from "./Results";
import {Route, BrowserRouter as Router, Switch, NavLink } from "react-router-dom";

function SurveyBodyHeader() {
    return (
        <div className="main-surveyBodyHeader">
        <div className="surveyBodyHeader">
            <NavLink activeStyle={{ textAlign:"center", borderBottom: "2px solid #0072C6", marginTop:"1.1em",
            paddingBottom:"0.9em", fontWeight: "bold",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/SurveyDefinition"> Survey Definition &nbsp;&nbsp;&nbsp; </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"1.1em", 
            paddingBottom:"0.9em", fontWeight: "bold",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/CreateQuestions"> Create Questions &nbsp;&nbsp;&nbsp; </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"1.1em", 
            paddingBottom:"0.9em",  fontWeight: "bold",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/Publish"> Publish &nbsp;&nbsp;&nbsp; </NavLink>
            <NavLink activeStyle={{ borderBottom: "2px solid #0072C6", marginTop:"1.1em", 
            paddingBottom:"0.9em", fontWeight: "bold",color: "#0072C6"
  }} activeClassName="selected" className="links" to="/Results"> Results </NavLink>
        </div>
        <div className="options">
            <button>Question Set</button>
            <button> Themes</button>
        </div>
        </div>
    )
}

export default SurveyBodyHeader
