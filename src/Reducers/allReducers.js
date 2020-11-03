import surveyInfo from "./surveyInfo.js";
import {combineReducers} from 'redux';

const allReducers= combineReducers({
    surveyInfo: surveyInfo
});

export default allReducers;
