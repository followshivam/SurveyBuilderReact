// import { persistReducer  } from "redux-persist";
// import storage from "redux-persist/lib/storage"; //local storage of browser


// const iState={
//     title:"adas",
//     description:"asds",
//     project:"",
//     duration:{start:"01/01/2020", end:"01/02/2022"},
//     showProgress:false,
//     showQuestions:false
// }

// const persistConfig={
//     key:"root",
//     storage,
//     whitelist:["SurveyInfo"]
// }

// function SurveyInfo(state={iState}, action){
//     switch(action.type){
//         case "ADDINFO":
//            return {
//                ...state ,[action.payload.name]:action.payload.value
//             // title:action.payload.title,
//             // description:action.payload.description
//         };
//         default:
//             return state;
//     }
// }

// export default persistReducer(persistConfig, SurveyInfo);