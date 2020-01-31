export const LOGIN_POST_DATA = "LOGIN_POST_DATA";
export const SIGNUP_POST_DATA = "SIGNUP_FORM_DATA";

export const loginHandler = (postData) => dispatch => {
    fetch('https://localhost:5000/api/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
        .then(res => res.json())
        .then(response =>
            dispatch({
                type: LOGIN_POST_DATA,
                payload: post
            })
        );
}