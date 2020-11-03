import React,{useEffect} from 'react';
import '../components.css';
import SettingsIcon from '@material-ui/icons/Settings';
import SaveIcon from '@material-ui/icons/Save';
import firebaseDb from "../../firebase";
import {addInfo} from "../../Actions/Listen";
import {connect} from "react-redux";
import SvgSave from "../../iconComponents/Save.tsx";
import SvgSettings from "../../iconComponents/Settings.tsx";
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';

function SurveyHeader(props) {

    useEffect(()=>{
    var browserLang = navigator.language || navigator.userLanguage;
    i18next.changeLanguage(browserLang);
    }
    ,[]);

    const { t } = useTranslation();
    
    function handleSave(){
        firebaseDb.child("definitionData").set(
            {
                title:props.title,
                description:props.description,
                project:props.project,
                duration:props.duration,
                logo:props.logo,
                display:props.display,
                showProgress:props.showProgress,
                showQuestions:props.showQuestions
              }
              ,
            err=>{
                if(err){
                    console.log(err);
                }
            }
        )
        console.log("Survey Defintion data added to firebase");
    }

    
    return (
        <div className="survey-header">
             {/*<p> {t('SURVEY')} &nbsp;
            <svg style={{color:"#697A8B"}}  width="1.1em" height="1.1em" viewBox="0 0 16 16" className="bi bi-box-arrow-up-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
            </svg>
             </p>*/}
            <div className="survey-subheader">
                <div className="survey-sub">
                    <p className="survey-title"> {t('SURVEY_TITLE')}</p>
                </div>
                <p> <SvgSettings />{t('SETTINGS')}</p>
                <p onClick={handleSave} className="saveDef-button" > <SvgSave/> {t('SAVE')}</p>
                
            </div>
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

export default connect(mapStateToProps,mapDispatchToProps)(SurveyHeader);
