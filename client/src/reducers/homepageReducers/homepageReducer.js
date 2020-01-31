import {SIGNUP_POST_DATA, LOGIN_POST_DATA} from '../../actions/homepageAction';
const initialState = {
    id: null,
    token: null,
    error: null
}
export default function homePageReducer(state= initialState, action) {
    switch(action.type) {
        case SIGNUP_POST_DATA:
            console.log(action.payload);
            return initialState;
        case LOGIN_POST_DATA:
            console.log(action.payload);
            return initialState;
        default:
            return initialState;
    }

}
