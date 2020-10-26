import React from 'react'
import '../components.css';

function SurveyHeader() {
    return (
        <div className="survey-header">
            <p> 🥛survey </p>
            <div className="survey-subheader">
                <div className="survey-sub">
                    <p className="survey-title">Survey Title</p>
                </div>
                <p> ⚙ Settings</p>
                <p> 🔧 Save</p>

            </div>
        </div>
    )
}

export default SurveyHeader
