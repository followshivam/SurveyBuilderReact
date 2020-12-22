import React, {Suspense, lazy} from 'react';
import SurveyBodyHeader from "./SurveyBodyHeader";
import SurveyDefinition from "./SurveyDefinition/SurveyDefinition";
import {Route, BrowserRouter as Router, Switch, Link, NavLink, Redirect } from "react-router-dom";
import '../components.css';

import {addInfo} from "../../Actions/Listen";
import {connect} from "react-redux";
const CreateQuestions = lazy(() => import("./CreateQuestions/CreateQuestions"));
// const Publish = lazy(() => import("./Publish/Publish"));
const Results = lazy(() => import("./Results/Results"));
const Themes = lazy(() => import("./Themes"));
const Preview = lazy(() => import("./Preview"));


function SurveyBody() {
    return (
        <Router>
        <div>
            <SurveyBodyHeader/>
            <Suspense fallback={<div> Loading .... </div>}>
             
        <Switch>
             {/* <Route path="/SurveyDefinition"> <SurveyDefinition/> </Route> */}
             <Route path="/survey-definition"> <SurveyDefinition/> </Route>
             <Route path="/create-questions"> <CreateQuestions/> </Route>
            {/* <Route path="/publish"> <Publish/> </Route> */}
            <Route path="/results"> <Results/> </Route>
            <Route path="/preview"> <Preview/> </Route>
            <Route path="/themes"> <> <Themes/>
            <NavLink style={{color:"black", position:"absolute", right:"22em", top:"4.6em"}} activeClassName="selected" className="links" to="/"> <p className="cancel-themes-button"><i className="fas fa-times" id="cancel-icon"></i></p> </NavLink>
            </> </Route>
             {/* <Route path="/surveydesigner"> <SurveyDefinition/> </Route> */}
             <Route path="/"> <Redirect to="/survey-definition"/> </Route>

        </Switch>
        </Suspense>
            </div>
        </Router>
    )
}

function mapStateToProps(state){
    return{
      title:state.surveyInfo.title,
      description:state.surveyInfo.description,
      project:state.surveyInfo.project,
      duration:state.surveyInfo.duration,
      logo:state.surveyInfo.logo,
      display:state.surveyInfo.display,
      showProgress:state.surveyInfo.showProgress,
      showQuestions:state.surveyInfo.showQuestions,
      surveyDetails:state.surveyDetails
    }
  }

function mapDispatchToProps(dispatch){
    return{
      changeData:(data)=>{dispatch(addInfo(data))}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(SurveyBody);
