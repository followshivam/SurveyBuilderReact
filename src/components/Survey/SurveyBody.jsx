import React from 'react';
import SurveyBodyHeader from "./SurveyBodyHeader";
import SurveyDefinition from "./SurveyDefinition";
import CreateQuestions from "./CreateQuestions";
import Publish from "./Publish";
import Results from "./Results";
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import '../components.css';

function SurveyBody() {
    return (
        <Router>
        <div>
            <SurveyBodyHeader/>
            <Switch>
             <Route path="/SurveyDefinition"> <SurveyDefinition/> </Route>
             <Route path="/CreateQuestions"> <CreateQuestions/> </Route>
             <Route path="/Publish"> <Publish/> </Route>
             <Route path="/Results"> <Results/> </Route>
        </Switch>
            </div>
        </Router>
    )
}

export default SurveyBody
