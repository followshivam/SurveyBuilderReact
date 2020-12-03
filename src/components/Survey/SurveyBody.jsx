import React from 'react';
import SurveyBodyHeader from "./SurveyBodyHeader";
import SurveyDefinition from "./SurveyDefinition/SurveyDefinition";
import CreateQuestions from "./CreateQuestions/CreateQuestions";
import Publish from "./Publish/Publish";
import Results from "./Results/Results";
import {Route, BrowserRouter as Router, Switch, Link, NavLink, Redirect } from "react-router-dom";
import '../components.css';
import Themes from "./Themes";
import Preview from "./Preview";



function SurveyBody() {
    return (
        <Router>
        <div>
            <SurveyBodyHeader/>
        <Switch>
             {/* <Route path="/SurveyDefinition"> <SurveyDefinition/> </Route> */}
             <Route path="/survey-definiton"> <SurveyDefinition/> </Route>
             <Route path="/create-questions"> <CreateQuestions/> </Route>
             <Route path="/publish"> <Publish/> </Route>
             <Route path="/results"> <Results/> </Route>
             <Route path="/preview"> <Preview/> </Route>
             <Route path="/themes"> <> <Themes/>
             <NavLink style={{color:"black", position:"absolute", right:"22em", top:"4.6em"}} activeClassName="selected" className="links" to="/"> <p className="cancel-themes-button"><i className="fas fa-times" id="cancel-icon"></i></p> </NavLink>
              </> </Route>
             <Route path="/"> <Redirect to="/survey-definiton"/> </Route>             
        </Switch>
            </div>
        </Router>
    )
}

export default SurveyBody
