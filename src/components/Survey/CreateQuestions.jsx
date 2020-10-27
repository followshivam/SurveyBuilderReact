import React from 'react'
import WelcomeMessage from "./WelcomeMessage";
import PageTitle from "./PageTitle";
import ThankYou from "./ThankYou";
import EditQuestion from "./EditQuestion";

function CreateQuestions() {
    
    
    return (
        <div>
            {/* <EditQuestion/> */}
            <WelcomeMessage/>
            <PageTitle/>
            <ThankYou/>
        </div>
    )
}

export default CreateQuestions
