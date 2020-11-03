const iState={
    title:"",
    description:"",
    project:"",
    duration:{start:"01/11/2020", end:"01/12/2020"},
    logo:"",
    display:"",
    showProgress:"",
    showQuestions:""
}

function surveyInfo(state=iState, action){
    switch(action.type){
        case "ADDINFO":
           return {
               ...state ,[action.payload.name]:action.payload.value
        };
        default:
            return state;
    }
}

export default surveyInfo;