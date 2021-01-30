import * as actionTypes from './actionTypes'
import axios from 'axios'

// axios.defaults.timeout = 60 * 15 * 1000;


export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
}


export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
}

export const logout = () => {

    localStorage.removeItem('user');
    localStorage.removeItem('expirationDate')
    localStorage.removeItem('username');
    localStorage.removeItem('token');


    // localStorage.setItem('username', 'Muskan');

    return {
        type: actionTypes.AUTH_LOGOUT,

    };
}


export const authLogin = (username, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/dj-rest-auth/login/', {
            username: username,
            password: password
        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('username', username);
                localStorage.setItem('expirationDate ', expirationDate);
                dispatch(authSuccess(token))


            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }

}

export const authSignup = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('http://127.0.0.1:8000/dj-rest-auth/registration/', {
            username: username,
            email: email,
            password1: password1,
            password2: password2
        })
            .then(res => {
                const token = res.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000)
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate ', expirationDate);
                dispatch(authSuccess(token))


            })
            .catch(err => {
                dispatch(authFail(err))
            })
    }

}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        console.log(token)
        if (token) {
            dispatch(authSuccess(token));
        }
        else {
            dispatch(logout());
        }
    }
}

