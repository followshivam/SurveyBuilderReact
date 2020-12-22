import React from 'react'
import '../components.css';
import SurveyHeader from "./SurveyHeader";
import SurveyBody from "./SurveyBody";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    useParams,
    useRouteMatch,
    useLocation
  } from 'react-router-dom'


function Survey() {

    // const [surveyId,setSurveyId]=useState();
    // const [surveyName,setSurveyName]=useState();
    // const [userIndex,setUserIndex]=useState();
    // const [formType,setFormType]=useState();
    // const [surveyDefId,setSurveyDefId]=useState();
    // const [userName,setUserName]=useState();
    // const [cabinetName,setCabinetName]=useState();
    // const [userDBId,setUserDBId]=useState();

    // const url="http://localhost:3000/survey-definiton?surveyid=200&username=shivam&userindex=100";
    // const url=window.location.href;
    // const urlParts=url.split("/");
    // const host=urlParts[2];
    // console.log(host[2]);

    
    // var parsed = queryString.parse(this.props.location.search);
    // console.log(parsed.param);
    
    
    // setSurveyId(host[4]);
    // setSurveyId(host[5]);
    // setSurveyId(host[6]);
    // setSurveyId(host[7]);
    // setSurveyId(host[8]);

    
    // const params = new URLSearchParams(url);
    // let url = new URLSearchParams(useLocation().search);
    // console.log(url);
//     const search = props.location.search; 
// const params = new URLSearchParams(search);
// const foo = params.get('foo');




    // const host=url.split("?");
    // console.log(host[1]);

    

    return (
        <div className="Survey">
            <SurveyHeader/>
            <SurveyBody/>
        </div>
    )
}

export default Survey
