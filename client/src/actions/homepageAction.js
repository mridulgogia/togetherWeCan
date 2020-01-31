import axios from 'axios';
export const LOGIN_POST_DATA = "LOGIN_POST_DATA";
export const SIGNUP_POST_DATA = "SIGNUP_FORM_DATA";

export const loginHandler = (postData) => dispatch => {
    axios.post('/api/auth/login', postData
    //     {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(postData)
    // }
    )
        .then(response => {
            console.log("resp", response);
            if(response.status === 200) {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem('id', response.data.id);
            }



            // dispatch({
            //     type: LOGIN_POST_DATA,
            //     payload: response
            // })
            }
        );
}

export const signupHandler = (postData) => dispatch => {
    console.log(postData);
    axios.post( '/api/auth/signup', postData
        // {
        // method: 'POST',
        // header: {
        //     // 'content-type': 'application/json',
        //     'constent-type': 'application/x-www-form-urlencoded'
        // },
        // body: JSON.stringify(postData)}
    // ).then(
    //     res => res.json()
    )
        .then(
        // response => dispatch({
        //     type: SIGNUP_POST_DATA,
        //     payload: response
        //
        // })
    response => {
        if (response.status === 200) {
            localStorage.setItem('token', response.data.token);
            localStorage.setItem('id', response.data.id);
        }
    }
    );
}