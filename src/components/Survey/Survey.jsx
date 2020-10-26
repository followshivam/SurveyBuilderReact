import React from 'react'
import '../components.css';
import SurveyHeader from "./SurveyHeader";
import SurveyBody from "./SurveyBody";


function Survey() {
    return (
        <div className="Survey">
            <SurveyHeader/>
            <SurveyBody/>
        </div>
    )
}

export default Survey
