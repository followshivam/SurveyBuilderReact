import React from 'react'

function WelcomeMessage() {
    return (
        <div className="welcomeMessage">
            <p className="heading"> Welcome Message </p>
            <div className="title">
                Welcome Text
                <div className="message">
                    <div className="buttons">
                        <button>B</button>
                        <button>I</button>
                        <button>U</button>
                        <button>@</button> &nbsp;
                        <button>#</button>
                        <button>$</button>
                        <button>%</button>
                        <button>^</button> &nbsp;
                        <button>*</button>
                    </div>
                    <div className="text">
                        <h2>Dear Team,</h2>
                        <h4>Please take a moment to fill out a short survey we wil use to improve your experience.</h4>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default WelcomeMessage
