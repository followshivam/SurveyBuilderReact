import {createStore} from "redux";
import SurveyInfo from "./Reducers/SurveyInfo" 
import {persistStore} from "redux-persist";

export const store=createStore(
    SurveyInfo, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export const persistor= persistStore(store);

export default {store, persistor};