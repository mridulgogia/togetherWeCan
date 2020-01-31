import { combineReducers } from 'redux';
import homePageReducer from "./homepageReducers/homepageReducer";

export default combineReducers({
    auth: homePageReducer
});