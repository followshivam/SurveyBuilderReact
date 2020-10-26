import { persistReducer  } from "redux-persist";
import storage from "redux-persist/lib/storage"; //local storage of browser


const iState={
    title:"adas",
    description:"asds",
    project:"",
    duration:{start:"", end:""},
    showProgress:false,
    showQuestions:false
}

const persistConfig={
    key:"root",
    storage,
    whitelist:["SurveyInfo"]
}

function SurveyInfo(state={iState}, action){
    switch(action.type){
        case "ADDINFO":
           return {
               ...state ,[action.payload.name]:action.payload.value
            // title:action.payload.title,
            // description:action.payload.description
        };
        default:
            return state;
    }
}

export default persistReducer(persistConfig, SurveyInfo);