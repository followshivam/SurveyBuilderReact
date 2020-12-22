import React from 'react'
import WelcomeMessage from "./WelcomeMessage";
import PageTitle from "./PageTitle";
import ThankYou from "./ThankYou";
import axios from "axios";
import {addInfo} from "../../../Actions/Listen";
import {connect} from "react-redux";

function CreateQuestions(props) {
    
    function Integrate(e){

    console.log(" ");
    console.log(props);
    console.log(" ");

    axios.post("http://127.0.0.1:8080/survey/addSurveyDef",props)
    .then(response => {
        console.log(response)
    })
    .catch(error =>{
        console.log(error);
    })
    }

    return (
        <div>
            {Integrate()}
            <WelcomeMessage/>
            <PageTitle/>
            <ThankYou/>
        </div>
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
      showQuestions:state.surveyInfo.showQuestions
    }
  }

function mapDispatchToProps(dispatch){
    return{
      changeData:(data)=>{dispatch(addInfo(data))}
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(CreateQuestions);

